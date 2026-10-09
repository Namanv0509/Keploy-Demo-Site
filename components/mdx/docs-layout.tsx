import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import TableOfContents from "./table-of-contents";

type DocsLayoutProps = {
  title?: string;
  children: ReactNode;
};

export default function DocsLayout({ title, children }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex min-w-0 items-center gap-2">
            <a href="#">
              <img src="/favicon.ico" alt="Keploy logo" />
            </a>
            <span className="truncate text-sm font-semibold">
              <a href="#">Keploy Docs</a>
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            {title ? (
              <span className="hidden max-w-[12rem] truncate text-xs text-neutral-500 sm:inline md:max-w-xs">
                {title}
              </span>
            ) : null}
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 rounded-lg border p-4 lg:hidden">
          <TableOfContents />
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px]">
          <article
            data-docs-content
            className="prose min-w-0 max-w-none dark:prose-invert"
          >
            {children}
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <TableOfContents />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
