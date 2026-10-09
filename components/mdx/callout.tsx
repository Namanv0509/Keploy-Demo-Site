import type { ReactNode } from "react";

type CalloutProps = {
  title?: string;
  type?: "info" | "tip" | "warning" | "success";
  children: ReactNode;
};

const styles: Record<NonNullable<CalloutProps["type"]>, string> = {
  info: "border-keploy bg-keploy/10 text-[#8a4b22] dark:bg-keploy/15 dark:text-[#ffb380]",
  tip: "border-[#2da44e] bg-[#dafbe1] text-[#116329] dark:bg-[#122117] dark:text-[#7ee787]",
  warning:
    "border-[#bf8700] bg-[#fff8c5] text-[#7d4e00] dark:bg-[#2a1f00] dark:text-[#f0c14a]",
  success:
    "border-[#2da44e] bg-[#dafbe1] text-[#116329] dark:bg-[#122117] dark:text-[#7ee787]",
};

export default function Callout({
  title,
  type = "info",
  children,
}: CalloutProps) {
  return (
    <aside
      className={`my-6 rounded-r-lg border-l-4 p-4 font-mono text-sm leading-relaxed ${styles[type]}`}
      role="note"
    >
      {title ? <p className="mb-2 font-bold">{title}</p> : null}
      <div>{children}</div>
    </aside>
  );
}
