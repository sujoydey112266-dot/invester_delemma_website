"use client";

import { useEffect, useRef, useState } from "react";

const FAQS = [
  {
    q: "Is there any registration fee?",
    a: "None. Participation in Investor's Dilemma is completely free for all students.",
  },
  {
    q: "What is the team size?",
    a: "A team must have a minimum of 2 and a maximum of 5 members. Prefer to start alone? Register as an individual and we'll help you find a squad.",
  },
  {
    q: "Who is eligible to participate?",
    a: "Any college student — across branches, streams and years — is welcome.",
  },
  {
    q: "Where and when does it happen?",
    a: "August 21, 2026 at PW Institute of Innovation, Brigade Signature Tower, Bangalore.",
  },
];

export default function Faq() {
  // Original behaviour: first item open on load, only one open at a time.
  const [open, setOpen] = useState<number | null>(0);
  const answers = useRef<Array<HTMLDivElement | null>>([]);

  // Drive max-height off measured content so the 0.32s expand matches the original.
  useEffect(() => {
    answers.current.forEach((el, i) => {
      if (!el) return;
      el.style.maxHeight = open === i ? `${el.scrollHeight}px` : "0px";
    });
  }, [open]);

  return (
    <section id="faq" className="relative py-14 sm:py-20">
      <div className="section-pad grid gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16">
        <div>
          <span className="eyebrow">Questions</span>
          <h2 className="mt-5 font-display text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">
            Everything you need to know
          </h2>
          <p className="mt-4 text-white/60">
            Still curious? DM us on Instagram &#8212; we reply fast.
          </p>
          <a className="btn-neon mt-7 !py-3 text-sm" href="#top">
            Register &#8212; it&apos;s free
          </a>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen
                    ? "border-neon/30 bg-white/[0.05]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-display text-base font-semibold text-white sm:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-neon text-white"
                        : "bg-white/5 text-white/70"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-plus h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </span>
                </button>

                <div
                  ref={(el) => {
                    answers.current[i] = el;
                  }}
                  style={{
                    overflow: "hidden",
                    maxHeight: "0px",
                    transition: "max-height 0.32s",
                  }}
                >
                  <p
                    style={{
                      padding: "0px 20px 20px",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
