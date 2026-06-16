"use client";

import { useEffect, useRef, useState } from "react";

const subtitles = [
  "AI Workflow Builder",
  "Loop Engineer",
  "tokenmaxxer",
  "Operator to AI Builder"
];

function renderLetters(text: string, direction: "in" | "out") {
  return Array.from(text).map((character, characterIndex) => (
    <span
      className="subtitle-letter"
      key={`${text}-${characterIndex}`}
      style={
        {
          "--letter-delay": `${characterIndex * (direction === "in" ? 40 : 22)}ms`
        } as React.CSSProperties
      }
    >
      {character}
    </span>
  ));
}

export function SubtitleRotator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [cycle, setCycle] = useState(0);
  const timeoutRefs = useRef<number[]>([]);

  useEffect(() => {
    function clearTimers() {
      timeoutRefs.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
      timeoutRefs.current = [];
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        setPreviousIndex(currentIndex);
        setCycle((currentCycle) => currentCycle + 1);
        return (currentIndex + 1) % subtitles.length;
      });

      setIsRevealed(false);
      setIsExiting(false);

      timeoutRefs.current.push(
        window.setTimeout(() => {
          setIsRevealed(true);
          setIsExiting(true);
        }, 40)
      );

      timeoutRefs.current.push(
        window.setTimeout(() => {
          setPreviousIndex(null);
          setIsExiting(false);
        }, 1180)
      );
    }, 3600);

    return () => {
      window.clearInterval(intervalId);
      clearTimers();
    };
  }, []);

  const activeSubtitle = subtitles[activeIndex];
  const previousSubtitle =
    previousIndex === null ? null : subtitles[previousIndex];

  return (
    <div
      className={
        previousSubtitle
          ? "subtitle-rotator is-transitioning"
          : "subtitle-rotator"
      }
      aria-label={subtitles.join(", ")}
    >
      {previousSubtitle ? (
        <span
          aria-hidden="true"
          className={
            isExiting
              ? "subtitle-word subtitle-word-exit is-hiding"
              : "subtitle-word subtitle-word-exit"
          }
          key={`previous-${previousSubtitle}-${cycle}`}
        >
          {renderLetters(previousSubtitle, "out")}
        </span>
      ) : null}
      <span
        aria-hidden="true"
        className={
          cycle === 0
            ? "subtitle-word subtitle-word-ready"
            : isRevealed
              ? "subtitle-word subtitle-word-enter is-visible"
              : "subtitle-word subtitle-word-enter"
        }
        key={`active-${activeSubtitle}-${cycle}`}
      >
        {renderLetters(activeSubtitle, "in")}
      </span>
    </div>
  );
}
