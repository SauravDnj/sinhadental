import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema, JsonLd } from "@/lib/json-ld";

export type Crumb = { name: string; path: string };

/** Breadcrumb trail with matching BreadcrumbList structured data. The last item is the current page. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-muted">
          {trail.map((item, index) => {
            const last = index === trail.length - 1;
            return (
              <li key={item.path} className="flex min-w-0 items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="truncate font-medium text-ink">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.path} className="rounded hover:text-primary-deep hover:underline underline-offset-4">
                      {item.name}
                    </Link>
                    <ChevronRight aria-hidden className="size-3.5 shrink-0" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}
