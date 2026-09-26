"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX, X } from "lucide-react";
import { BUSINESS_INFO, REELS, type Reel } from "@/lib/constants";
import { InstagramIcon } from "@/components/Icons";

/* ------------------------------------------------------------------ */
/* Card: poster, hover preview on desktop, opens the viewer            */
/* ------------------------------------------------------------------ */

function ReelCard({
  reel,
  soundOn,
  onToggleSound,
  onOpen,
}: {
  reel: Reel;
  soundOn: boolean;
  onToggleSound: () => void;
  onOpen: (el: HTMLButtonElement) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [previewing, setPreviewing] = useState(false);
  const [progress, setProgress] = useState(0);

  // React doesn't keep the `muted` DOM property in sync, so drive it directly.
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = !soundOn;
  }, [soundOn]);

  const startPreview = () => {
    // Only preview on devices with a real hover (desktop); touch devices tap straight into the viewer.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const video = videoRef.current;
    if (!video || !video.paused) return;
    video.muted = !soundOn;
    video
      .play()
      .catch(() => {
        // Browsers can block sound until the visitor has interacted with the page; fall back to muted.
        video.muted = true;
        return video.play();
      })
      .then(() => setPreviewing(true))
      .catch(() => {});
  };

  const stopPreview = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setPreviewing(false);
    setProgress(0);
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (video) video.muted = soundOn; // flip immediately, inside the click gesture
    onToggleSound();
  };

  const muted = !soundOn;

  return (
    <div
      className="group relative aspect-[9/16] w-full overflow-hidden rounded-3xl bg-ink shadow-lg"
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
      onFocus={startPreview}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) stopPreview();
      }}
    >
      <button
        type="button"
        onClick={(e) => {
          stopPreview();
          onOpen(e.currentTarget);
        }}
        aria-label={`Play video: ${reel.title} (${reel.duration})`}
        className="absolute inset-0 block text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand rounded-3xl"
      >
        <Image
          src={reel.poster}
          alt=""
          fill
          sizes="(min-width: 1024px) 260px, (min-width: 640px) 240px, 62vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <video
          ref={videoRef}
          src={reel.src}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          tabIndex={-1}
          onTimeUpdate={(e) => {
            const v = e.currentTarget;
            if (v.duration) setProgress(v.currentTime / v.duration);
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            previewing ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />

        <span className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-xs font-bold text-white backdrop-blur">
          {reel.duration}
        </span>

        <span
          className={`absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white ring-1 ring-white/50 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:ring-brand ${
            previewing ? "scale-75 opacity-0" : "opacity-100"
          }`}
          aria-hidden
        >
          <Play className="ml-1 h-7 w-7 fill-current" />
        </span>

        <span className="absolute inset-x-4 bottom-5 text-white">
          <span className="block text-base font-bold leading-snug">{reel.title}</span>
          <span className="mt-1 flex items-center gap-1.5 text-xs text-white/75">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {previewing ? "Click to watch full video" : "Fixerland Kasaragod"}
          </span>
        </span>

        {/* Preview progress */}
        <span
          className={`absolute inset-x-0 bottom-0 h-1 bg-white/20 transition-opacity ${previewing ? "opacity-100" : "opacity-0"}`}
          aria-hidden
        >
          <span className="block h-full bg-brand" style={{ width: `${progress * 100}%` }} />
        </span>
      </button>

      {/* Instagram-style sound toggle, shown while the preview plays */}
      <button
        type="button"
        onClick={toggleSound}
        aria-label={muted ? "Unmute preview" : "Mute preview"}
        aria-pressed={!muted}
        title={muted ? "Unmute" : "Mute"}
        className={`absolute left-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition-all duration-200 hover:scale-110 hover:bg-black/75 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
          previewing ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {muted ? <VolumeX className="h-4.5 w-4.5" /> : <Volume2 className="h-4.5 w-4.5" />}
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Viewer: full-screen, reels-style player with next / previous        */
/* ------------------------------------------------------------------ */

function ReelViewer({
  index,
  onClose,
  onChange,
}: {
  index: number;
  onClose: () => void;
  onChange: (next: number) => void;
}) {
  const reel = REELS[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const total = REELS.length;

  const go = useCallback((step: number) => onChange((index + step + total) % total), [index, onChange, total]);

  // Lock page scroll and move focus into the dialog while it's open.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const dx = e.changedTouches[0].clientX - start.x;
    const dy = e.changedTouches[0].clientY - start.y;
    const horizontal = Math.abs(dx) > Math.abs(dy);
    const distance = horizontal ? dx : dy;
    if (Math.abs(distance) < 60) return;
    go(distance < 0 ? 1 : -1);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Video ${index + 1} of ${total}: ${reel.title}`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-up"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4 text-white sm:p-6">
        <span className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-bold">
          {index + 1} / {total}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Previous / next (desktop) */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous video"
        className="absolute left-4 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand md:flex lg:left-10"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next video"
        className="absolute right-4 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand md:flex lg:right-10"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      {/* Player */}
      <figure
        className="relative flex h-full w-full flex-col items-center justify-center sm:h-auto sm:w-auto"
        onTouchStart={(e) => {
          touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }}
        onTouchEnd={onTouchEnd}
      >
        <video
          key={reel.id}
          src={reel.src}
          poster={reel.poster}
          controls
          autoPlay
          playsInline
          preload="auto"
          onEnded={() => go(1)}
          className="h-full w-full bg-black object-contain sm:h-[82vh] sm:w-auto sm:max-w-[calc(82vh*9/16)] sm:rounded-3xl"
        />
        <figcaption className="absolute inset-x-0 bottom-20 px-6 text-center text-white sm:static sm:mt-4 sm:px-0">
          <span className="block text-lg font-bold">{reel.title}</span>
          <span className="text-sm text-white/70 md:hidden">Swipe for the next video</span>
        </figcaption>
      </figure>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                            */
/* ------------------------------------------------------------------ */

export function Reels() {
  const [active, setActive] = useState<number | null>(null);
  // Shared across cards: once a visitor unmutes one preview, the next previews play with sound too.
  const [soundOn, setSoundOn] = useState(false);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const scroll = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const close = useCallback(() => {
    setActive(null);
    openerRef.current?.focus();
  }, []);

  return (
    <section id="reels" className="overflow-hidden bg-ink py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Watch Us Work</span>
            <h2 className="mt-3 text-[clamp(1.9rem,4vw,2.75rem)] font-normal leading-tight">
              Real repairs, <strong className="font-bold">real results</strong>
            </h2>
            <p className="mt-3 max-w-xl text-[17px] text-white/70">
              Short videos from our Kasaragod workbench — see how we diagnose and fix phones every day.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light !px-4 !py-2.5 text-sm"
            >
              <InstagramIcon className="h-4 w-4" /> Follow {BUSINESS_INFO.instagramHandle}
            </a>
            <div className="hidden gap-2 md:flex">
              <button
                type="button"
                onClick={() => scroll(-1)}
                aria-label="Scroll videos left"
                className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/30 transition-colors hover:bg-brand hover:ring-brand"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                aria-label="Scroll videos right"
                className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/30 transition-colors hover:bg-brand hover:ring-brand"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel — aligned with the page content on the left, bleeding off the right edge */}
      <ul
        ref={scrollerRef}
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] sm:gap-5 [&::-webkit-scrollbar]:hidden px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] scroll-px-4 sm:scroll-px-6 lg:scroll-px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
      >
        {REELS.map((reel, i) => (
          <li key={reel.id} className="w-[62vw] shrink-0 snap-start sm:w-60 lg:w-[260px]">
            <ReelCard
              reel={reel}
              soundOn={soundOn}
              onToggleSound={() => setSoundOn((v) => !v)}
              onOpen={(el) => {
                openerRef.current = el;
                setActive(i);
              }}
            />
          </li>
        ))}
      </ul>

      {active !== null && <ReelViewer index={active} onClose={close} onChange={setActive} />}
    </section>
  );
}
