"use client";

import { useCallback, useState } from "react";

type CodeBlockProps = {
  code: string;
  language?: string;
};

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [code]);

  return (
    <div className="group relative my-6 overflow-hidden rounded-lg border border-[#1e2127] bg-terminal shadow-sm">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#21252b] px-4 py-2">
        <span className="font-mono text-xs uppercase tracking-wide text-white/60">
          {language || "code"}
        </span>
        <button
          type="button"
          onClick={copy}
          className="rounded px-2.5 py-1 font-mono text-xs text-white/80 transition hover:bg-white/10 hover:text-white"
          aria-label={copied ? "Copied" : "Copy code"}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="terminal overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code className="font-mono text-white/95">{code}</code>
      </pre>
    </div>
  );
}
