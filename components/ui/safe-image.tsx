"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { formatImageUrl } from "@/lib/utils/format-image-url";

export interface SafeImageProps extends Omit<ImageProps, "src"> {
  src?: string | null;
  fallbackClassName?: string;
}

export function SafeImage({
  src,
  alt,
  className,
  fallbackClassName,
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = formatImageUrl(src);

  if (!resolvedSrc || hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-muted text-muted-foreground",
          className,
          fallbackClassName
        )}
      >
        <span className="text-xs font-medium">{alt?.charAt(0)?.toUpperCase() ?? "?"}</span>
      </div>
    );
  }

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
