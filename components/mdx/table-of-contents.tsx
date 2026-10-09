"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

const CONTENT_SELECTOR = "[data-docs-content]";

export default function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const root = document.querySelector(CONTENT_SELECTOR);
    if (!root) return;

    const headings = Array.from(
      root.querySelectorAll<HTMLElement>("h2[id], h3[id]")
    );

    const nextItems: TocItem[] = headings.map((el) => ({
      id: el.id,
      text: el.innerText.replace(/\s+/g, " ").trim(),
      level: el.tagName === "H2" ? 2 : 3,
    }));

    setItems(nextItems);

    if (nextItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Table of contents" className="toc-nav">
      <p className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-keploy">
        On this page
      </p>
      <ul className="space-y-1 border-l border-docs-border">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block border-l-2 py-1 pl-3 font-mono text-sm leading-snug transition hover:text-keploy ${
                item.level === 3 ? "ml-2 text-[13px]" : ""
              } ${
                activeId === item.id
                  ? "border-keploy font-medium text-keploy"
                  : "border-transparent text-docs-muted"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
