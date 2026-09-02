import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function Logo({
  className,
  imageClassName,
  priority = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500",
        className,
      )}
      aria-label={`${SITE.name} home`}
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={640}
        height={433}
        className={cn("h-10 w-auto sm:h-11", imageClassName)}
        priority={priority}
      />
    </Link>
  );
}
