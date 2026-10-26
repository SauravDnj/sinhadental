import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SmileCurve } from "@/components/dental/illustrations";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  id,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <SmileCurve className={cn("mt-3 h-3 w-14 text-primary", centered && "mx-auto")} />
      <Heading
        id={id}
        className={cn(
          "mt-4 font-bold",
          Heading === "h1" ? "text-[2.125rem] sm:text-5xl lg:text-[3.5rem]" : "text-[1.75rem] sm:text-4xl lg:text-[2.5rem]",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted lg:text-[1.1875rem]">{description}</p>
      )}
    </div>
  );
}
