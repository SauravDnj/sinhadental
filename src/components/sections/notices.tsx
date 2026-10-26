import Link from "next/link";
import { Info, Siren } from "lucide-react";
import { clinic } from "@/data/clinic";
import { cn } from "@/lib/utils";

/** Standard educational disclaimer (docs/13-content-rules.md). */
export function Disclaimer({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <aside aria-label="Important information" className={cn("flex gap-4 rounded-(--radius-card) bg-accent-blue p-5 sm:p-6", className)}>
      <Info aria-hidden className="mt-0.5 size-5 shrink-0 text-primary-deep" />
      <p className="text-[0.9375rem] leading-relaxed text-ink">
        {children ?? (
          <>
            This information is general and educational. It isn&apos;t a diagnosis or personal medical advice. Please
            speak with the dentist about your situation.
          </>
        )}
      </p>
    </aside>
  );
}

/** Urgent-care guidance, including when to call emergency services. */
export function EmergencyNotice({ className, compact }: { className?: string; compact?: boolean }) {
  return (
    <aside
      aria-label="Emergency guidance"
      className={cn("flex gap-4 rounded-(--radius-card) border border-warning/25 bg-warning-bg p-5 sm:p-6", className)}
    >
      <Siren aria-hidden className="mt-0.5 size-5 shrink-0 text-warning" />
      <div className="space-y-2 text-[0.9375rem] leading-relaxed text-ink">
        <p>
          <strong className="font-semibold">
            If you have difficulty breathing or swallowing, call{" "}
            <a href={`tel:${clinic.emergencyNumber}`} className="underline underline-offset-4">
              {clinic.emergencyNumber}
            </a>{" "}
            immediately.
          </strong>
        </p>
        {!compact && (
          <p>Facial swelling, a dental injury, uncontrolled bleeding or fever need urgent professional care.</p>
        )}
        {compact && (
          <p>
            For other urgent dental problems, call us on{" "}
            <a href={clinic.phone.href} className="font-semibold underline underline-offset-4">
              {clinic.phone.display}
            </a>{" "}
            or read our{" "}
            <Link href="/treatments/dental-emergency" className="font-semibold underline underline-offset-4">
              dental emergency guidance
            </Link>
            .
          </p>
        )}
      </div>
    </aside>
  );
}
