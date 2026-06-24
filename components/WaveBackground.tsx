"use client";

import { useEffect, useRef } from "react";
import {
  colorsFromTheme,
  rgbaCss,
  rgbCss,
  type ColorState,
  type RGB,
} from "@/lib/animations";
import { sections } from "@/lib/sectionThemes";

type WaveBackgroundProps = {
  sectionIndex: number;
};

const TRANSITION_MS = 1200;

function cloneColorState(state: ColorState): ColorState {
  return {
    primary: { ...state.primary },
    secondary: { ...state.secondary },
    accent: { ...state.accent },
  };
}

function lerpRGB(a: RGB, b: RGB, t: number): RGB {
  return {
    r: a.r + (b.r - a.r) * t,
    g: a.g + (b.g - a.g) * t,
    b: a.b + (b.b - a.b) * t,
  };
}

function lerpColorState(from: ColorState, to: ColorState, t: number): ColorState {
  return {
    primary: lerpRGB(from.primary, to.primary, t),
    secondary: lerpRGB(from.secondary, to.secondary, t),
    accent: lerpRGB(from.accent, to.accent, t),
  };
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export default function WaveBackground({ sectionIndex }: WaveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorsRef = useRef<ColorState>(colorsFromTheme(sections[0].colors));
  const fromColorsRef = useRef<ColorState>(colorsFromTheme(sections[0].colors));
  const toColorsRef = useRef<ColorState>(colorsFromTheme(sections[0].colors));
  const transitionStartRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const frameRef = useRef(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const target = colorsFromTheme(sections[sectionIndex].colors);

    if (reducedMotionRef.current) {
      colorsRef.current = cloneColorState(target);
      fromColorsRef.current = cloneColorState(target);
      toColorsRef.current = cloneColorState(target);
      transitionStartRef.current = null;
      return;
    }

    fromColorsRef.current = cloneColorState(colorsRef.current);
    toColorsRef.current = target;
    transitionStartRef.current = performance.now();
  }, [sectionIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);

    const draw = (time: number) => {
      if (transitionStartRef.current !== null) {
        const elapsed = time - transitionStartRef.current;
        const progress = Math.min(elapsed / TRANSITION_MS, 1);
        colorsRef.current = lerpColorState(
          fromColorsRef.current,
          toColorsRef.current,
          easeInOut(progress)
        );
        if (progress >= 1) {
          transitionStartRef.current = null;
          colorsRef.current = cloneColorState(toColorsRef.current);
        }
      }

      const w = window.innerWidth;
      const h = window.innerHeight;
      const { primary, secondary, accent } = colorsRef.current;
      const { x: mx, y: my } = mouseRef.current;

      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, rgbCss(primary));
      gradient.addColorStop(0.5, rgbCss(secondary));
      gradient.addColorStop(1, rgbCss(accent));
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      if (!reducedMotionRef.current) {
        const mouseInfluence = (mx - 0.5) * 40;
        const ampBoost = 1 + my * 0.3;

        for (let layer = 0; layer < 3; layer++) {
          ctx.beginPath();
          const baseY = h * (0.55 + layer * 0.12);
          const amplitude = (18 + layer * 10) * ampBoost;
          const frequency = 0.004 + layer * 0.001;
          const speed = time * 0.0004 * (layer + 1);
          const alpha = 0.12 - layer * 0.025;

          for (let x = 0; x <= w; x += 4) {
            const y =
              baseY +
              Math.sin(x * frequency + speed) * amplitude +
              Math.sin(x * frequency * 2 + speed * 1.5) * (amplitude * 0.3) +
              mouseInfluence * (layer + 1) * 0.15;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }

          ctx.lineTo(w, h);
          ctx.lineTo(0, h);
          ctx.closePath();

          const waveColor =
            layer === 0 ? accent : layer === 1 ? secondary : primary;
          ctx.fillStyle = rgbaCss(waveColor, alpha);
          ctx.fill();
        }
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden
    />
  );
}
