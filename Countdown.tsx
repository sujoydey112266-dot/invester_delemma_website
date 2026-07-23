"use client";

import { useEffect, useState } from "react";

// Event start: 21 August 2026, 09:00 IST
export const EVENT_START = new Date("2026-08-21T09:00:00+05:30").getTime();

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const;

function remaining() {
  const t = Math.max(0, EVENT_START - Date.now());
  return {
    days: Math.floor(t / 86_400_000),
    hours: Math.floor(t / 3_600_000) % 24,
    minutes: Math.floor(t / 60_000) % 60,
    seconds: Math.floor(t / 1000) % 60,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown() {
  const [time, setTime] = useState(remaining);

  useEffect(() => {
    const id = setInterval(() => setTime(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="grid grid-cols-4 gap-3 sm:gap-4"
      aria-label="Time remaining until the event"
    >
      {UNITS.map(({ key, label }) => (
        <div
          key={key}
          className="glass relative overflow-hidden rounded-2xl px-2 py-4 text-center sm:px-4 sm:py-5"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent"></div>
          <div
            className="font-mono text-3xl font-bold tabular-nums text-white sm:text-5xl"
            suppressHydrationWarning
          >
            {pad(time[key])}
          </div>
          <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.06em] text-white/50 sm:text-[11px] sm:tracking-[0.14em]">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
