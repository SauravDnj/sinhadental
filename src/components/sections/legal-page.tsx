import { FileClock } from "lucide-react";
import { clinic } from "@/data/clinic";
import { DEMO_MODE } from "@/data/demo";
import type { LegalSection } from "@/data/legal";
import { PageHero } from "./page-hero";

type LegalPageProps = {
  title: string;
  path: string;
  sections: LegalSection[];
};

const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/**
 * Legal page layout with a table of contents. In DEMO_MODE it shows sample text;
 * otherwise each section shows a pending notice until lawyer-reviewed text is added.
 */
export function LegalPage({ title, path, sections }: LegalPageProps) {
  return (
    <>
      <PageHero
        breadcrumbs={[{ name: title, path }]}
        eyebrow="Legal"
        title={title}
        description={<p>{DEMO_MODE ? "Sample version for the website preview." : "Last updated: pending clinic and legal review."}</p>}
      />

      <div className="container-site grid gap-12 py-12 lg:grid-cols-[16rem_1fr] lg:gap-16 lg:py-20">
        <nav aria-label="Contents" className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">Contents</p>
          <ol className="mt-4 space-y-1">
            {sections.map((section, index) => (
              <li key={section.title}>
                <a
                  href={`#${slug(section.title)}`}
                  className="flex min-h-10 items-center gap-2 rounded-lg px-2 text-[0.9375rem] text-ink hover:bg-mint"
                >
                  <span className="text-muted">{index + 1}.</span> {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-[70ch] min-w-0">
          <p className="flex gap-3 rounded-xl border border-warning/25 bg-warning-bg p-5 text-warning">
            <FileClock aria-hidden className="mt-0.5 size-5 shrink-0" />
            <span>
              {DEMO_MODE ? (
                <>
                  <strong className="font-semibold">Sample text.</strong> This version describes how the website works
                  today, but it has not been reviewed by a lawyer and will be replaced before launch.
                </>
              ) : (
                <>
                  <strong className="font-semibold">This page is awaiting clinic-approved text.</strong> The final
                  wording will be published after legal review. For any questions, please call {clinic.phone.display}.
                </>
              )}
            </span>
          </p>

          <div className="mt-12 space-y-12">
            {sections.map((section, index) => {
              const id = slug(section.title);
              return (
                <section key={section.title} id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
                  <h2 id={`${id}-title`} className="text-2xl font-bold">
                    {index + 1}. {section.title}
                  </h2>
                  {DEMO_MODE ? (
                    <div className="mt-4 space-y-4 leading-relaxed text-ink/90">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-3 italic text-muted">Text for this section will be added after review.</p>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
