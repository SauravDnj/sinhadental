import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "light" | "outline-light";
type Size = "md" | "lg";

const base =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-(--radius-button) font-semibold whitespace-nowrap " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-200 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white shadow-soft hover:bg-primary-deep",
  secondary: "border border-primary/40 bg-surface text-primary-deep hover:border-primary-deep hover:bg-mint",
  light: "bg-white text-primary-deep hover:bg-mint",
  "outline-light": "border border-white/60 text-white hover:border-white hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.9375rem]",
  lg: "px-6 py-3.5 text-base",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  external?: boolean;
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "children">;

/** Link styled as a button. Uses next/link for internal routes, a plain anchor for tel: and external URLs. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  external,
  className,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {external && (
        <>
          <ArrowUpRight aria-hidden className="size-4" />
          <span className="sr-only">(opens in a new tab)</span>
        </>
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {content}
      </a>
    );
  }

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}

type TextLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

/** Inline link with a trailing arrow that nudges on hover. */
export function TextLink({ href, children, external, className }: TextLinkProps) {
  const classes = cn(
    "group inline-flex items-center gap-1.5 font-semibold text-primary-deep underline-offset-4 hover:underline",
    className,
  );
  const arrow = external ? (
    <ArrowUpRight aria-hidden className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  ) : (
    <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {arrow}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}
