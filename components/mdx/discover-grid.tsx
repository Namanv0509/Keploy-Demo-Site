import type { ReactNode } from "react";

type DiscoverGridProps = {
  children: ReactNode;
};

type DiscoverCardProps = {
  title: string;
  command?: string;
  children: ReactNode;
};

export function DiscoverGrid({ children }: DiscoverGridProps) {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2">{children}</div>
  );
}

export function DiscoverCard({ title, command, children }: DiscoverCardProps) {
  return (
    <article className="surface-card flex flex-col rounded-lg border border-docs-border p-5 transition hover:border-keploy/40">
      <h4 className="mb-2 font-bold text-docs-fg">{title}</h4>
      {command ? (
        <code className="mb-3 block rounded border border-docs-border bg-keploy/10 px-2 py-1 font-mono text-xs text-keploy dark:bg-keploy/15">
          {command}
        </code>
      ) : null}
      <p className="mb-0 flex-1 text-sm leading-relaxed text-docs-muted">
        {children}
      </p>
    </article>
  );
}
