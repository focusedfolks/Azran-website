import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  heading: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  tone?: "default" | "onDark";
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  heading,
  align = "left",
  as: Tag = "h2",
  tone = "default",
  icon,
  className,
  children,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn(centered && "mx-auto text-center", className)}>
      <p className="font-body text-xs font-medium uppercase tracking-[0.22em] text-gold">
        {eyebrow}
      </p>
      <div
        className={cn(
          "mt-3 flex items-start gap-3",
          centered && "justify-center",
        )}
      >
        {icon ? (
          <span
            className={cn(
              "mt-1 shrink-0",
              tone === "onDark" ? "text-gold" : "text-navy",
            )}
            aria-hidden="true"
          >
            {icon}
          </span>
        ) : null}
        <Tag
          className={cn(
            "font-heading text-h2 font-extrabold tracking-tight",
            tone === "onDark" ? "text-offwhite" : "text-navy",
          )}
        >
          {heading}
        </Tag>
      </div>
      <span
        aria-hidden="true"
        className={cn("mt-4 block h-[3px] w-10 bg-gold", centered && "mx-auto")}
      />
      {children}
    </div>
  );
}
