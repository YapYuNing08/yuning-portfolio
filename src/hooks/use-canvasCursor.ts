import { useEffect } from "react";

/**
 * Animated ribbon trail that follows the pointer, drawn on a full-screen canvas.
 * The ribbons cycle through the hue wheel, each offset slightly from the last.
 * Strokes are drawn with the default composite mode — a "lighter" composite
 * would wash out against this theme's light background.
 */
export interface CanvasCursorOptions {
  /** Canvas element id to draw into. */
  canvasId?: string;
  /** Number of ribbons trailing the pointer. */
  trails?: number;
  /** Nodes per ribbon — higher is a longer, smoother tail. */
  size?: number;
  /** How quickly a node loses speed (0-1). */
  friction?: number;
  /** How much of a node's speed passes to the next one. */
  dampening?: number;
  /** How fast the pull weakens along the tail. */
  tension?: number;
  /** Starting hue in degrees. */
  hue?: number;
  /** Degrees the hue advances each frame — the colour cycle speed. */
  hueSpeed?: number;
  /** Degrees of hue between one ribbon and the next, for a spread-out rainbow. */
  hueSpread?: number;
  saturation?: number;
  lightness?: number;
  alpha?: number;
}

const DEFAULTS: Required<CanvasCursorOptions> = {
  canvasId: "canvas",
  trails: 20,
  size: 50,
  friction: 0.5,
  dampening: 0.025,
  tension: 0.99,
  hue: 26,
  hueSpeed: 0.6,
  hueSpread: 6,
  saturation: 75,
  lightness: 45,
  alpha: 0.4,
};

interface Point {
  x: number;
  y: number;
}

class Node {
  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
}

class Line {
  private spring: number;
  private friction: number;
  private nodes: Node[] = [];

  constructor(
    spring: number,
    private config: Required<CanvasCursorOptions>,
    origin: Point,
  ) {
    this.spring = spring + 0.1 * Math.random() - 0.05;
    this.friction = config.friction + 0.01 * Math.random() - 0.005;

    for (let i = 0; i < config.size; i++) {
      const node = new Node();
      node.x = origin.x;
      node.y = origin.y;
      this.nodes.push(node);
    }
  }

  update(pointer: Point) {
    let spring = this.spring;
    let node = this.nodes[0];

    node.vx += (pointer.x - node.x) * spring;
    node.vy += (pointer.y - node.y) * spring;

    for (let i = 0; i < this.nodes.length; i++) {
      node = this.nodes[i];

      if (i > 0) {
        const prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * this.config.dampening;
        node.vy += prev.vy * this.config.dampening;
      }

      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;

      spring *= this.config.tension;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const nodes = this.nodes;
    let x = nodes[0].x;
    let y = nodes[0].y;

    ctx.beginPath();
    ctx.moveTo(x, y);

    for (let i = 1; i < nodes.length - 2; i++) {
      const current = nodes[i];
      const next = nodes[i + 1];
      x = 0.5 * (current.x + next.x);
      y = 0.5 * (current.y + next.y);
      ctx.quadraticCurveTo(current.x, current.y, x, y);
    }

    const secondLast = nodes[nodes.length - 2];
    const last = nodes[nodes.length - 1];
    ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y);
    ctx.stroke();
    ctx.closePath();
  }
}

export default function useCanvasCursor(options: CanvasCursorOptions = {}) {
  useEffect(() => {
    const config = { ...DEFAULTS, ...options };

    // No pointer to trail, or the visitor asked for less motion.
    const noHover = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (noHover || reducedMotion) return;

    const canvas = document.getElementById(config.canvasId) as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const pointer: Point = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let hue = config.hue;
    let lines: Line[] = [];
    let started = false;
    let running = true;
    let frame = 0;

    const spawnLines = () => {
      lines = [];
      for (let i = 0; i < config.trails; i++) {
        lines.push(new Line(0.45 + (i / config.trails) * 0.025, config, pointer));
      }
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineWidth = 1;
    };

    const movePointer = (x: number, y: number) => {
      pointer.x = x;
      pointer.y = y;
      if (!started) {
        started = true;
        spawnLines();
      }
    };

    const onMouseMove = (e: MouseEvent) => movePointer(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) movePointer(e.touches[0].clientX, e.touches[0].clientY);
    };

    const render = () => {
      if (!running) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.lineWidth = 1;
      hue = (hue + config.hueSpeed) % 360;

      lines.forEach((line, i) => {
        const lineHue = (hue + i * config.hueSpread) % 360;
        ctx.strokeStyle = `hsla(${lineHue.toFixed(1)}, ${config.saturation}%, ${config.lightness}%, ${config.alpha})`;
        line.update(pointer);
        line.draw(ctx);
      });

      frame = window.requestAnimationFrame(render);
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        running = false;
        window.cancelAnimationFrame(frame);
      } else if (!running) {
        running = true;
        frame = window.requestAnimationFrame(render);
      }
    };

    resize();
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onTouchMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("resize", resize);
    frame = window.requestAnimationFrame(render);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
