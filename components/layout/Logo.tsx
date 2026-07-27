import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoVariant = "full" | "compact" | "wordmark" | "icon";
type LogoTheme = "light" | "dark";

const sources: Record<LogoVariant, { src: string; darkSrc?: string; ratio: number }> = {
  full: { src: "/logo/assigners-logo-full.png", darkSrc: "/logo/assigners-logo-full-dark.png", ratio: 5939 / 1770 },
  compact: { src: "/logo/assigners-logo-compact.png", darkSrc: "/logo/assigners-logo-compact-dark.png", ratio: 5939 / 1343 },
  wordmark: { src: "/logo/assigners-wordmark.png", darkSrc: "/logo/assigners-wordmark-dark.png", ratio: 4786 / 1770 },
  icon: { src: "/logo/assigners-icon.png", ratio: 1 },
};

export function Logo({
  variant = "full",
  theme = "light",
  height = 40,
  width,
  className,
  href = "/",
  priority = false,
}: {
  variant?: LogoVariant;
  theme?: LogoTheme;
  height?: number;
  width?: number;
  className?: string;
  href?: string | null;
  priority?: boolean;
}) {
  const { src, darkSrc, ratio } = sources[variant];
  const resolvedWidth = width ?? Math.round(height * ratio);
  const resolvedSrc = theme === "dark" && darkSrc ? darkSrc : src;

  const img = (
    <Image
      src={resolvedSrc}
      alt="Assigners — Powered by Quality Score LLC"
      width={resolvedWidth}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto", className)}
      style={{ height, width: resolvedWidth }}
    />
  );

  if (!href) return img;

  return (
    <Link href={href} aria-label="Assigners home" className="inline-flex shrink-0 items-center">
      {img}
    </Link>
  );
}
