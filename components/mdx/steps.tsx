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
  return <ol className="my-8 list-none space-y-8 p-0">{children}</ol>;
}

export function Step({ number, title, children }: StepProps) {
  return (
    <li className="relative border-l-2 border-neutral-300 pl-8 dark:border-neutral-700">
      <span
        className="absolute -left-[1.15rem] flex h-9 w-9 items-center justify-center rounded-full border bg-background text-sm font-semibold"
        aria-hidden
      >
        {number}
      </span>
      <h3 className="mt-0 mb-3 text-lg font-semibold">{title}</h3>
      <div>{children}</div>
    </li>
  );
}
