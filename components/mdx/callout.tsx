import type { ReactNode } from "react";
import { Info, AlertTriangle, Lightbulb, PartyPopper } from 'lucide-react'

type CalloutProps = {
  title?: string;
  type?: "info" | "tip" | "warning" | "success";
  children: ReactNode;
};

const styles = {
  info: {"icon": Info, "cls": "border-sky-400 bg-sky-50 text-sky-950 dark:bg-sky-950 dark:text-sky-100"},
  tip: {"icon": Lightbulb, "cls": "border-emerald-400 bg-emerald-50 text-emerald-950 dark:bg-emerald-950 dark:text-emerald-100"},
  warning: {"icon": AlertTriangle, "cls": "border-amber-400 bg-amber-50 text-amber-950 dark:bg-amber-950 dark:text-amber-100"},
  success: {"icon": PartyPopper, "cls": "border-green-500 bg-green-50 text-green-950 dark:bg-green-950 dark:text-green-100"},
};

export default function Callout({
  title,
  type = "info",
  children,
}: CalloutProps) {
   const { icon: Icon, cls } = styles[type]
  return (
    <aside
      className={`my-6 rounded-r-lg border-l-4 p-4 text-sm leading-relaxed ${cls}`}
      role="note"
    >
      <div className="mb-2 flex items-center gap-2">
        <Icon className="h-5 w-5" />
        {title ? <p className="font-semibold">{title}</p> : null}
      </div>
      <div>{children}</div>
    </aside>
  );
}
