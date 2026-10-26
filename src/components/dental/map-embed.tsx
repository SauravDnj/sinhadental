"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { clinic } from "@/data/clinic";
import { cn } from "@/lib/utils";

const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(`${clinic.name}, ${clinic.address.full}`)}&output=embed`;

/**
 * Click-to-load Google Map. Nothing is fetched from Google until the visitor asks,
 * which keeps pages fast. The text address and directions link stay available elsewhere.
 */
export function MapEmbed({ className }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative min-h-80 overflow-hidden rounded-(--radius-card) border border-border bg-mint",
        className,
      )}
    >
      {loaded ? (
        <iframe
          src={embedSrc}
          title={`Map showing the location of ${clinic.name}`}
          className="absolute inset-0 size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <>
          <MapPattern />
          <div className="relative flex h-full min-h-80 flex-col items-center justify-center gap-4 p-6 text-center">
            <span className="grid size-14 place-items-center rounded-full bg-primary text-white shadow-lift motion-safe:animate-float">
              <MapPin aria-hidden className="size-6" />
            </span>
            <p className="max-w-xs font-medium text-ink">
              {clinic.address.line2}, {clinic.address.locality}
            </p>
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="inline-flex min-h-11 items-center rounded-(--radius-button) border border-primary/40 bg-surface px-5 font-semibold text-primary-deep transition-colors hover:bg-mint-strong"
            >
              Show map
            </button>
            <p className="text-xs text-muted">Loads Google Maps</p>
          </div>
        </>
      )}
    </div>
  );
}

function MapPattern() {
  return (
    <svg aria-hidden className="absolute inset-0 size-full text-primary/15" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 300">
      <g fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round">
        <path d="M-20 210C80 190 140 120 230 130S360 200 430 170" />
        <path d="M120 -20C130 80 110 160 160 320" />
        <path d="M300 -20C280 60 330 140 290 320" strokeWidth="6" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M-20 80H430M-20 260H430M60 -20V320M220 -20V320M360 -20V320" />
      </g>
    </svg>
  );
}
