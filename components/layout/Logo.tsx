import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  imageClassName?: string;
};

export function Logo({ className, imageClassName }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        className,
      )}
      aria-label={`${SITE.name} home`}
    >
      <Image
        src="/logo.png"
        alt={SITE.name}
        width={504}
        height={162}
        className={cn("h-12 w-auto sm:h-14", imageClassName)}
        priority
      />
    </Link>
  );
}
