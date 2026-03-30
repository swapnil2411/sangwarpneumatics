"use client"; // Remove if using Next.js pages router

import React, { useState, useRef, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AccordionItem {
  id: string | number;
  title: string;
  content: React.ReactNode;
  icon: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: (string | number)[];
  variant?: "default" | "bordered" | "flush";
  className?: string;
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const accordionStyles = `
  
`;

// ─── Single Panel ─────────────────────────────────────────────────────────────

interface PanelProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: (id: string | number) => void;
  variant: AccordionProps["variant"];
  index: number;
}

const AccordionPanel: React.FC<PanelProps> = ({
  item,
  isOpen,
  onToggle,
  variant,
  index,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const panelClass = [
    "accordion-panel",
    `variant-${variant}`,
    isOpen ? "open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={panelClass}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <button
        className="accordion-trigger"
        onClick={() => onToggle(item.id)}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
        id={`accordion-trigger-${item.id}`}
        type="button"
      >
        <img className="accordion-header-img" src={item?.icon} />
        <span className="accordion-trigger-text">{item.title}</span>
        <span className="accordion-icon" aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        id={`accordion-content-${item.id}`}
        role="region"
        aria-labelledby={`accordion-trigger-${item.id}`}
        className="accordion-content-wrapper"
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="accordion-content">
          {item.content}
        </div>
      </div>
    </div>
  );
};

// ─── Main Accordion ───────────────────────────────────────────────────────────

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpen = [],
  variant = "default",
  className = "",
}) => {
  const [openIds, setOpenIds] = useState<Set<string | number>>(
    new Set(defaultOpen)
  );

  const handleToggle = (id: string | number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <>
      {/* Inject styles once into the document */}
      

      <div className={`accordion ${className}`.trim()}>
        {items.map((item, index) => (
          <AccordionPanel
            key={item.id}
            item={item}
            isOpen={openIds.has(item.id)}
            onToggle={handleToggle}
            variant={variant}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Accordion;