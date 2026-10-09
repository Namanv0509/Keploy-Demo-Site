import type { ReactNode } from "react";

type StepsProps = {
  children: ReactNode;
};

type StepProps = {
  number: number;
  title: string;
  children: ReactNode;
};

export function Steps({ children }: StepsProps) {
  return (
    <ol className="my-8 list-none space-y-8 p-0 counter-reset-none">
      {children}
    </ol>
  );
}

export function Step({ number, title, children }: StepProps) {
  return (
    <li className="relative border-l-2 border-keploy/30 pl-8">
      <span
        className="absolute -left-[1.15rem] flex h-9 w-9 items-center justify-center rounded-full border-2 border-keploy bg-docs-bg font-mono text-sm font-bold text-keploy shadow-sm"
        aria-hidden
      >
        {number}
      </span>
      <h3 className="mb-3 mt-0 text-lg font-bold text-docs-fg">{title}</h3>
      <div className="step-content">{children}</div>
    </li>
  );
}
