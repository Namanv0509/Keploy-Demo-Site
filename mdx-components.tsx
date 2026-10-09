import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import Callout from "./components/mdx/callout";
import DocsLayout from "./components/mdx/docs-layout";
import { Step, Steps } from "./components/mdx/steps";
import ScrollTop from "./components/mdx/scroll-top";
import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "./components/mdx/code-block";

type AnchorProps = ComponentPropsWithoutRef<"a">;

export function useMDXComponents(): MDXComponents {
  return {
    Callout,
    DocsLayout,
    Step,
    Steps,
    ScrollTop,
    pre: CodeBlock, 
    a: ({ href, children, ...props }: AnchorProps) => {
      if (href?.startsWith("/")) {
        return (
          <Link href={href} {...props}>
            {children}
          </Link>
        );
      }
      if (href?.startsWith("#")) {
        return (
          <a href={href} {...props}>
            {children}
          </a>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    },
  };
}
