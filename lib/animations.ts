import gsap from "gsap";

export type RGB = { r: number; g: number; b: number };

export type ColorState = {
  primary: RGB;
  secondary: RGB;
  accent: RGB;
};

export function hexToRGB(hex: string): RGB {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

export function colorsFromTheme(theme: {
  primary: string;
  secondary: string;
  accent: string;
}): ColorState {
  return {
    primary: hexToRGB(theme.primary),
    secondary: hexToRGB(theme.secondary),
    accent: hexToRGB(theme.accent),
  };
}

export function rgbCss({ r, g, b }: RGB): string {
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

export function rgbaCss(color: RGB, alpha: number): string {
  return `rgba(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)}, ${alpha})`;
}

export function staggerSectionContent(
  container: HTMLElement | null,
  reducedMotion: boolean
): gsap.core.Tween | null {
  if (!container || reducedMotion) return null;

  const items = container.querySelectorAll("[data-animate]");
  if (!items.length) return null;

  return gsap.from(items, {
    y: 24,
    opacity: 0,
    duration: 0.55,
    stagger: 0.07,
    ease: "power2.out",
    clearProps: "opacity,transform",
  });
}
