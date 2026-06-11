"use client";

import { useEffect, useState } from "react";
import "../../app/styles/preloader.css";

export default function Preloader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showLoaded, setShowLoaded] = useState(false);
  const [openCurtain, setOpenCurtain] = useState(false);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 2;

      if (value >= 100) {
  value = 100;

  clearInterval(interval);

  setProgress(100);

  // Keep showing 100%
  setTimeout(() => {
    setShowLoaded(true);

    // Keep CONTENT LOADED visible
    setTimeout(() => {
      setOpenCurtain(true);

      setTimeout(() => {
        setLoading(false);
      }, 1800);
    }, 5000);
  }, 1000);

  return;
}

      setProgress(value);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`preloader ${
            openCurtain ? "curtain-open" : ""
          }`}
        >
          <div
            className={`loader-content ${
              showLoaded ? "loaded-state" : ""
            }`}
          >
            {!showLoaded ? (
              <>
                <div className="loader-bars">
                  {Array.from({ length: 12 }).map(
                    (_, i) => (
                      <span
                        key={i}
                        className={`bar ${
  i <=
  Math.min(
    11,
    Math.floor(progress / 8.33)
  )
    ? "active"
    : ""
}`}
                      />
                    )
                  )}
                </div>

                <div className="loader-info">
                  <span>
                    LOADING CONTENT
                  </span>
                  <span>{progress}%</span>
                </div>
              </>
            ) : (
              <div className="loaded-wrapper">
                <div className="loaded-brand">
                  SANGAWAR PNEUMATICS
                </div>

                <div className="loaded-text">
                  CONTENT LOADED
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {children}
    </>
  );
}