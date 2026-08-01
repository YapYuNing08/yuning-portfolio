import useCanvasCursor, { type CanvasCursorOptions } from "@/hooks/use-canvasCursor";

const CanvasCursor = (props: CanvasCursorOptions) => {
  useCanvasCursor(props);

  return (
    <canvas
      id="canvas"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] h-full w-full"
    />
  );
};

export default CanvasCursor;
