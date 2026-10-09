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
  return <div className="my-8 grid gap-4 sm:grid-cols-2">{children}</div>;
}

export function DiscoverCard({ title, command, children }: DiscoverCardProps) {
  return (
    <article className="flex flex-col rounded-lg border p-5">
      <h4 className="mb-2 font-semibold">{title}</h4>
      {command ? (
        <code className="mb-3 block rounded border px-2 py-1 font-mono text-xs">
          {command}
        </code>
      ) : null}
      <p className="mb-0 flex-1 text-sm leading-relaxed text-neutral-500">
        {children}
      </p>
    </article>
  );
}
