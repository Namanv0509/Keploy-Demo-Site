import React, { ComponentPropsWithoutRef, isValidElement } from "react";
import Link from "next/link";
import Callout from "./components/mdx/callout";
import CodeBlock from "./components/mdx/code-block";
import { DiscoverCard, DiscoverGrid } from "./components/mdx/discover-grid";
import DocsLayout from "./components/mdx/docs-layout";
import { Step, Steps } from "./components/mdx/steps";
import { getHeadingText } from "./lib/get-heading-text";
import { slugify } from "./lib/slugify";
import { MDXComponents } from "mdx/types";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type PreProps = ComponentPropsWithoutRef<"pre">;
type CodeProps = ComponentPropsWithoutRef<"code">;

function headingId(children: React.ReactNode, propsId?: string) {
  if (propsId) return propsId;
  return slugify(getHeadingText(children));
}

const linkClassName =
  "text-keploy underline underline-offset-2 decoration-keploy/40 hover:decoration-keploy";

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="mb-6 pt-2 text-4xl font-bold tracking-tight" {...props} />
  ),
  h2: ({ children, id, ...props }: HeadingProps) => {
    const headingSlug = headingId(children, id);
    return (
      <h2
        id={headingSlug}
        className="mb-3 mt-10 text-2xl font-bold text-docs-fg"
        {...props}
      >
        <a
          href={`#${headingSlug}`}
          className="group inline-flex items-center gap-2 no-underline hover:text-keploy"
        >
          {children}
          <span
            className="text-keploy/0 transition group-hover:text-keploy/70"
            aria-hidden
          >
            #
          </span>
        </a>
      </h2>
    );
  },
  h3: ({ children, id, ...props }: HeadingProps) => {
    const headingSlug = headingId(children, id);
    return (
      <h3
        id={headingSlug}
        className="mb-2 mt-8 text-lg font-bold text-docs-fg"
        {...props}
      >
        <a
          href={`#${headingSlug}`}
          className="no-underline hover:text-keploy"
        >
          {children}
        </a>
      </h3>
    );
  },
  h4: (props: HeadingProps) => (
    <h4 className="mb-2 mt-6 font-bold" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p
      className="mb-4 leading-relaxed text-docs-muted"
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol
      className="mb-4 list-decimal space-y-2 pl-6 text-docs-muted"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="mb-4 list-disc space-y-1 pl-6 text-docs-muted"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="pl-1 leading-relaxed" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-bold text-docs-fg" {...props} />
  ),
  hr: () => <hr className="my-8 border-docs-border" />,
  code: ({ className, children, ...props }: CodeProps) => {
    if (className?.startsWith("language-")) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
    return (
      <code
        className="rounded border border-docs-border bg-keploy/10 px-1.5 py-0.5 font-mono text-sm text-keploy dark:bg-keploy/15"
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }: PreProps) => {
    if (
      isValidElement<{ className?: string; children?: React.ReactNode }>(
        children
      )
    ) {
      const className = children.props.className ?? "";
      const language = className.replace("language-", "");
      const code = String(children.props.children ?? "").replace(/\n$/, "");
      return <CodeBlock code={code} language={language} />;
    }
    return <pre {...props}>{children}</pre>;
  },
  a: ({ href, children, ...props }: AnchorProps) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={linkClassName} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={linkClassName} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        {...props}
      >
        {children}
      </a>
    );
  },
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="my-6 border-l-4 border-keploy/40 bg-keploy/5 py-2 pl-4 italic text-docs-muted"
      {...props}
    />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-docs-border">
      <table
        className="w-full border-collapse text-left text-sm text-docs-muted"
        {...props}
      />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<"thead">) => (
    <thead className="border-b border-docs-border bg-surface/80 font-bold text-docs-fg" {...props} />
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th className="px-4 py-3 font-mono text-xs uppercase tracking-wide" {...props} />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="border-t border-docs-border px-4 py-3" {...props} />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXComponents {
  return {
    Callout,
    DiscoverCard,
    DiscoverGrid,
    DocsLayout,
    Step,
    Steps,
    ...components,
  };
}
