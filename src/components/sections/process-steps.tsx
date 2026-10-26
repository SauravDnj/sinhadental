import { cn } from "@/lib/utils";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

type Step = { title: string; text: string };

/** Numbered steps revealed in sequence. Horizontal on desktop, vertical timeline on mobile. */
const columnClasses = { 2: "sm:grid-cols-2", 3: "lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" } as const;

export function ProcessSteps({
  steps,
  columns = steps.length >= 4 ? 4 : 3,
  className,
}: {
  steps: Step[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  return (
    <RevealGroup as="ol" stagger={0.12} className={cn("relative grid gap-4 sm:gap-6", columnClasses[columns], className)}>
      {steps.map((step, index) => (
        <RevealItem
          key={step.title}
          as="li"
          className="relative rounded-(--radius-card) border border-border bg-surface p-6 lg:p-7"
        >
          <span aria-hidden className="font-heading text-5xl font-extrabold text-mint-strong">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-xl font-bold">
            <span className="sr-only">Step {index + 1}: </span>
            {step.title}
          </h3>
          <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
