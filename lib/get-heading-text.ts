import { isValidElement, type ReactNode } from "react";

export function getHeadingText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(getHeadingText).join("");
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return getHeadingText(node.props.children);
  }
  return "";
}
