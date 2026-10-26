"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { Faq } from "@/data/treatments";
import { cn } from "@/lib/utils";

/** Accessible accordion: real buttons with aria-expanded; several items can be open at once. */
export function FAQAccordion({ items, className }: { items: Faq[]; className?: string }) {
  const baseId = useId();
  const [open, setOpen] = useState<Set<number>>(() => new Set());

  const toggle = (index: number) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <div className={cn("divide-y divide-border rounded-(--radius-card) border border-border bg-surface", className)}>
      {items.map((item, index) => {
        const expanded = open.has(index);
        const buttonId = `${baseId}-q-${index}`;
        const panelId = `${baseId}-a-${index}`;
        return (
          <div key={item.question}>
            <h3 className="font-sans text-base">
              <button
                id={buttonId}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 rounded-(--radius-card) px-5 py-5 text-left text-[1.0625rem] font-semibold text-ink transition-colors hover:text-primary-deep sm:px-7"
              >
                {item.question}
                <span
                  aria-hidden
                  className={cn(
                    "grid size-8 shrink-0 place-items-center rounded-full border border-border text-primary-deep transition-[transform,background-color] duration-250",
                    expanded && "rotate-45 bg-mint",
                  )}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!expanded}
              className="px-5 pb-6 text-muted motion-safe:animate-fade-in sm:px-7"
            >
              <p className="max-w-2xl leading-relaxed">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
