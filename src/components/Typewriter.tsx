import React, { useEffect, useState } from "react";

interface TypewriterProps {
  /** Phrases cycled through, one character at a time. */
  texts: string[];
  /** Static text rendered before the typed segment. */
  prefix?: string;
  /** Milliseconds per character while typing. */
  typeSpeed?: number;
  /** Milliseconds per character while deleting. */
  deleteSpeed?: number;
  /** Milliseconds a fully typed phrase is held before it starts deleting. */
  holdTime?: number;
  showCursor?: boolean;
  /** Hide the cursor while characters are actively being added/removed. */
  hideCursorOnType?: boolean;
  cursorChar?: string;
  className?: string;
  typedClassName?: string;
  cursorClassName?: string;
}

/**
 * Types out each phrase in `texts`, holds it, deletes it, then moves to the
 * next one and loops. The typing loop is a chain of single timeouts driven by
 * state transitions rather than one interval, so typing, deleting and the
 * end-of-phrase hold can each run at their own pace.
 */
const Typewriter = ({
  texts,
  prefix = "",
  typeSpeed = 70,
  deleteSpeed = 40,
  holdTime = 1500,
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = "_",
  className = "",
  typedClassName = "text-primary",
  cursorClassName = "text-primary",
}: TypewriterProps) => {
  const list = (texts ?? []).filter((t) => typeof t === "string");
  const hasTexts = list.length > 0;

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Users who ask for less motion get the first phrase, fully typed, no loop.
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const currentText = list[currentTextIndex] ?? "";

  useEffect(() => {
    if (reducedMotion || !hasTexts) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % list.length);
        setCurrentIndex(0);
      } else {
        timeout = setTimeout(
          () => setDisplayText((prev) => prev.slice(0, -1)),
          deleteSpeed
        );
      }
    } else if (currentIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typeSpeed);
    } else if (list.length > 1) {
      timeout = setTimeout(() => setIsDeleting(true), holdTime);
    }

    return () => clearTimeout(timeout);
    // `list` is rebuilt on every render, so it is deliberately not a dep —
    // the reset effect below handles an actual change of the `texts` prop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentIndex,
    displayText,
    isDeleting,
    currentTextIndex,
    currentText,
    typeSpeed,
    deleteSpeed,
    holdTime,
    hasTexts,
    reducedMotion,
  ]);

  // Restart cleanly if the phrases themselves change, so we never index into
  // a string that no longer exists.
  const textsKey = list.join("|");
  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
    setIsDeleting(false);
    setCurrentTextIndex(0);
  }, [textsKey]);

  const renderedText = reducedMotion ? (list[0] ?? "") : displayText;
  const isActivelyTyping =
    !reducedMotion &&
    hasTexts &&
    (isDeleting || (currentIndex > 0 && currentIndex < currentText.length));

  return (
    <span className={className}>
      {prefix ? <span>{prefix}</span> : null}
      <span className={typedClassName}>{renderedText}</span>
      {showCursor && (
        <span
          aria-hidden="true"
          className={`ml-1 typewriter-cursor ${cursorClassName}`}
          style={{
            visibility:
              hideCursorOnType && isActivelyTyping ? "hidden" : "visible",
          }}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
};

export default Typewriter;
