"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useInView } from "framer-motion";

type CounterProps = {
  value: string;
};

export default function Counter({
  value,
}: CounterProps) {
  const [count, setCount] =
    useState(0);

  const ref =
    useRef<HTMLSpanElement>(
      null
    );

  const isInView =
    useInView(ref, {
      once: true,
    });

  const numericValue =
    parseInt(
      value.replace(
        /\D/g,
        ""
      )
    );

  const suffix =
    value.replace(
      /[0-9]/g,
      ""
    );

  useEffect(() => {
    if (!isInView) return;

    let start = 0;

    const duration = 2000;

    const increment =
      numericValue /
      (duration / 16);

    const timer =
      setInterval(() => {
        start += increment;

        if (
          start >=
          numericValue
        ) {
          setCount(
            numericValue
          );

          clearInterval(
            timer
          );

          return;
        }

        setCount(
          Math.floor(
            start
          )
        );
      }, 16);

    return () =>
      clearInterval(timer);
  }, [
    isInView,
    numericValue,
  ]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}