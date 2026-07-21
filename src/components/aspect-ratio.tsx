"use client";

import { AspectRatio as AspectRatioPrimitive } from "radix-ui";

/**
 * Holds a fixed ratio while content loads.
 *
 * Its value is reserving the space before the image arrives, so the page does
 * not reflow. Without that, it is a wrapper around a CSS property that already
 * works on its own.
 */

export interface AspectRatioProps
  extends React.ComponentProps<typeof AspectRatioPrimitive.Root> {
  /** Width divided by height. 16 / 9 for video, 1 for a square. */
  ratio?: number;
}

export function AspectRatio({ ratio = 16 / 9, ...props }: AspectRatioProps) {
  return <AspectRatioPrimitive.Root ratio={ratio} {...props} />;
}
