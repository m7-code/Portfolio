import { useEffect, useMemo, useState } from "react";
import "../preloader.css";

/**
 * Two shapes (deer + "M7") are each built from a grid of triangular
 * shards. Every shard starts scattered at a random position/rotation,
 * then flies into place to reconstruct its shape. Thin seam lines
 * stay visible on the shards even after assembly (like the reference
 * video), then the whole overlay fades to reveal the site.
 *
 * Put these in public/:
 *   deer-mask.png
 *   m7-mask.png
 */

const DEER_ASPECT = 481 / 641; // width / height
const M7_ASPECT = 465 / 249;

const SHAPE_HEIGHT = 170; // px — both shapes share this height so they read as "same size"
const GAP = 36; // px between deer and M7

const COLS_DEER = 10;
const ROWS_DEER = 13;
const COLS_M7 = 12;
const ROWS_M7 = 7;

const ASSEMBLE_DURATION = 1.6;
const MAX_STAGGER = 0.9;
const HOLD_MS = 3000; // generous hold so you have time to screenshot the assembled state
const FADE_MS = 550;

function randBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function buildShards(cols, rows, maskUrl) {
  const cellW = 100 / cols;
  const cellH = 100 / rows;
  const list = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = col / (cols - 1) - 0.5;
      const cy = row / (rows - 1) - 0.5;
      const distFromCenter = Math.sqrt(cx * cx + cy * cy);

      ["tl", "br"].forEach((half) => {
        const scatterX = randBetween(-1, 1) * (window.innerWidth * 0.5);
        const scatterY = randBetween(-1, 1) * (window.innerHeight * 0.35);
        const scatterRot = randBetween(-220, 220);
        const delay = distFromCenter * 0.25 + randBetween(0, MAX_STAGGER);

        list.push({
          key: `${row}-${col}-${half}`,
          left: col * cellW,
          top: row * cellH,
          width: cellW,
          height: cellH,
          maskUrl,
          maskSize: `${cols * 100}% ${rows * 100}%`,
          maskPosition: `${(col / (cols - 1)) * 100}% ${(row / (rows - 1)) * 100}%`,
          clipPath:
            half === "tl"
              ? "polygon(0 0, 100% 0, 0 100%)"
              : "polygon(100% 0, 100% 100%, 0 100%)",
          scatterX,
          scatterY,
          scatterRot,
          delay,
        });
      });
    }
  }
  return list;
}

function ShardShape({ shards, assembled, widthPx, heightPx }) {
  return (
    <div style={{ position: "relative", width: widthPx, height: heightPx }}>
      {shards.map((s) => (
        <div
          key={s.key}
          style={{
            position: "absolute",
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.width}%`,
            height: `${s.height}%`,
            clipPath: s.clipPath,
            backgroundColor: "#ffffff",
            WebkitMaskImage: `url('${s.maskUrl}')`,
            maskImage: `url('${s.maskUrl}')`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: s.maskSize,
            maskSize: s.maskSize,
            WebkitMaskPosition: s.maskPosition,
            maskPosition: s.maskPosition,
            // thin dark seam line so the triangle cuts stay visible
            // even once the shape is fully assembled
            boxShadow: "inset 0 0 0 0.6px rgba(0,0,0,0.6)",
            transform: assembled
              ? "translate(0, 0) rotate(0deg)"
              : `translate(${s.scatterX}px, ${s.scatterY}px) rotate(${s.scatterRot}deg)`,
            opacity: assembled ? 1 : 0,
            transition: `transform ${ASSEMBLE_DURATION}s cubic-bezier(.17,.84,.44,1) ${s.delay}s, opacity 0.4s ease ${s.delay}s`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}

export default function ShatterPreloader({ onFinish }) {
  const [assembled, setAssembled] = useState(false);
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(true);
  const [viewportW, setViewportW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const onResize = () => setViewportW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const deerShards = useMemo(
    () => buildShards(COLS_DEER, ROWS_DEER, "/deer-mask.png"),
    []
  );
  const m7Shards = useMemo(() => buildShards(COLS_M7, ROWS_M7, "/m7-mask.png"), []);

  const isNarrow = viewportW < 700;
  const gapPx = isNarrow ? 16 : GAP;

  // Always row layout (deer left, M7 right) — on mobile we just solve
  // for the shared height that makes (deer + gap + M7) fit the screen.
  const availableWidth = isNarrow ? viewportW * 0.88 : Infinity;
  const combinedRatio = DEER_ASPECT + M7_ASPECT; // widths per 1 unit of height
  const fittedHeight = (availableWidth - gapPx) / combinedRatio;

  const shapeHeight = isNarrow
    ? Math.max(70, Math.min(fittedHeight, SHAPE_HEIGHT))
    : SHAPE_HEIGHT;

  const deerWidth = Math.round(shapeHeight * DEER_ASPECT);
  const deerHeight = Math.round(shapeHeight);
  const m7Width = Math.round(shapeHeight * M7_ASPECT);
  const m7Height = Math.round(shapeHeight);

  useEffect(() => {
    const startTimer = setTimeout(() => setAssembled(true), 60);

    const allDelays = [...deerShards, ...m7Shards].map((s) => s.delay);
    const maxDelay = Math.max(...allDelays);
    const totalAssembleMs = (maxDelay + ASSEMBLE_DURATION) * 1000;

    const fadeTimer = setTimeout(() => setFading(true), totalAssembleMs + HOLD_MS);
    const doneTimer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, totalAssembleMs + HOLD_MS + FADE_MS);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [deerShards, m7Shards, onFinish]);

  if (!visible) return null;

  return (
    <div className={`preloader-overlay ${fading ? "preloader-fade" : ""}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: gapPx,
          maxWidth: "92vw",
          maxHeight: "85vh",
        }}
      >
        <ShardShape
          shards={deerShards}
          assembled={assembled}
          widthPx={deerWidth}
          heightPx={deerHeight}
        />
        <ShardShape
          shards={m7Shards}
          assembled={assembled}
          widthPx={m7Width}
          heightPx={m7Height}
        />
      </div>
    </div>
  );
}