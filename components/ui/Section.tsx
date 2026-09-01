import { cn } from "@/lib/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
};

export function Section({
  children,
  className,
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={cn("py-12 md:py-20", className)}>
      <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </Tag>
  );
}
