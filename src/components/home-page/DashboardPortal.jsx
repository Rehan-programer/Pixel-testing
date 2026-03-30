"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const AUTO_PLAY_DELAY = 4000;

const styles = `
  @keyframes dotFill {
    from { width: 0%; }
    to   { width: 100%; }
  }
  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeSlideOut {
    from { opacity: 1; transform: translateY(0); }
    to   { opacity: 0; transform: translateY(-16px); }
  }
  @keyframes imgFadeIn {
    from { opacity: 0; transform: scale(0.96); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes imgFadeOut {
    from { opacity: 1; transform: scale(1); }
    to   { opacity: 0; transform: scale(1.03); }
  }
  .content-enter { animation: fadeSlideIn  0.42s cubic-bezier(0.22,1,0.36,1) forwards; }
  .content-exit  { animation: fadeSlideOut 0.28s cubic-bezier(0.4,0,1,1)     forwards; }
  .img-enter     { animation: imgFadeIn    0.46s cubic-bezier(0.22,1,0.36,1) forwards; }
  .img-exit      { animation: imgFadeOut   0.28s cubic-bezier(0.4,0,1,1)     forwards; }
`;

const DashBoardPortal = ({ data }) => {
  const [activeStep, setActiveStep]   = useState(0);
  const [displayStep, setDisplayStep] = useState(0);
  const [animKey, setAnimKey]         = useState(0);
  const [phase, setPhase]             = useState("idle"); // "idle" | "exit" | "enter"

  const timerRef      = useRef(null);
  const activeStepRef = useRef(0);
  const pendingRef    = useRef(null);
  const phaseRef      = useRef("idle");

  const setPhaseSync = (p) => { phaseRef.current = p; setPhase(p); };

  /* ── core switcher ── */
  const switchStep = useCallback((next) => {
    if (next === activeStepRef.current) return;
    if (phaseRef.current === "exit") { pendingRef.current = next; return; }

    pendingRef.current = next;
    setPhaseSync("exit");

    setTimeout(() => {
      const target = pendingRef.current;
      activeStepRef.current = target;
      setActiveStep(target);
      setDisplayStep(target);
      setAnimKey((k) => k + 1);
      setPhaseSync("enter");
      setTimeout(() => setPhaseSync("idle"), 460);
    }, 290);
  }, []);

  /* ── auto-play ── */
  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const next = (activeStepRef.current + 1) % data.length;
      switchStep(next);
    }, AUTO_PLAY_DELAY);
  }, [data?.length, switchStep]);

  useEffect(() => {
    if (!data?.length) return;
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  /* ── manual click ── */
  const handleManualStep = (index) => {
    if (index === activeStepRef.current) return;
    clearInterval(timerRef.current);
    switchStep(index);
    setTimeout(startTimer, 800);
  };

  if (!data?.length) return null;
  const current = data[displayStep];

  const contentClass = phase === "exit" ? "content-exit" : phase === "enter" ? "content-enter" : "";
  const imgClass     = phase === "exit" ? "img-exit"     : phase === "enter" ? "img-enter"     : "";

  return (
    <>
      <style>{styles}</style>

      <section className="relative bg-[#f0f8f8] overflow-hidden py-10">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-[#00cfaa]/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-[-4rem] left-[-4rem] w-[20rem] h-[20rem] rounded-full bg-[#00cfaa]/5 pointer-events-none" />

        <div className="container-global xl:w-[60%] relative z-10">

          {/* ── Tabs ── */}
          <div className="items-center justify-between lg:justify-center gap-3 hidden md:flex mb-8">
            {data.map((item, index) => {
              const isCompleted = index < activeStep;
              const isCurrent   = index === activeStep;
              return (
                <React.Fragment key={index}>
                  <button
                    onClick={() => handleManualStep(index)}
                    className={`flex items-center gap-2.5 px-2 py-2.5 rounded-full border-2 font-semibold text-sm transition-all duration-500 cursor-pointer
                      ${isCurrent
                        ? "bg-[#00cfaa] border-[#00cfaa] text-white shadow-lg shadow-[#00cfaa]/30 scale-105"
                        : isCompleted
                          ? "bg-[#00cfaa]/15 border-[#00cfaa] text-[#00aa8a]"
                          : "bg-white border-[#d3d3d3] text-[#999] hover:border-[#00cfaa]/50 hover:text-[#00cfaa]"
                      }`}
                  >
                    <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold transition-all duration-500
                      ${isCurrent ? "bg-white text-[#00cfaa]" : isCompleted ? "bg-[#00cfaa] text-white" : "bg-[#e8e8e8] text-[#999]"}`}>
                      {isCompleted ? (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M1.5 5L3.8 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : index + 1}
                    </span>
                    <span className="hidden sm:inline">{item.title}</span>
                    <span className="sm:hidden">Step 0{index + 1}</span>
                  </button>

                  {index !== data.length - 1 && (
                    <div className="hidden sm:block w-8 h-[2px] bg-gradient-to-r from-[#00cfaa]/40 to-[#d3d3d3]/40 rounded-full" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* ── Card ── */}
          <div className="bg-white rounded-3xl shadow-xl border border-[#00cfaa]/10 overflow-hidden flex flex-col lg:flex-row items-stretch">

            {/* Left — text */}
            <div
              key={`content-${animKey}`}
              className={`flex flex-col justify-center p-8 md:p-12 lg:w-[45%] ${contentClass}`}
            >
<<<<<<< HEAD
              <span className="inline-flex items-center gap-2 self-start mb-5 px-3 py-1 rounded-full bg-[#00cfaa]/10 border border-[#00cfaa]/20">
                <span className="w-2 h-2 rounded-full bg-[#00cfaa] animate-pulse" />
                <span className="text-[#00cfaa] font-bold text-xs tracking-widest uppercase">
                  Step 0{displayStep + 1}
                </span>
              </span>

              <h2 className="text-gray-900 mb-4">{current.title}</h2>
              <p className="text-gray-500 leading-relaxed mb-8">{current.description}</p>

              {/* Dot indicators */}
              <div className="flex gap-2 mb-8">
                {data.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => handleManualStep(i)}
                    className="relative h-1.5 rounded-full overflow-hidden cursor-pointer"
                    style={{
                      width:      i === activeStep ? "2rem" : "1rem",
                      background: i < activeStep   ? "rgba(0,207,170,0.45)" : "#e0e0e0",
                      transition: "width 0.5s cubic-bezier(0.22,1,0.36,1), background 0.4s ease",
                    }}
                  >
                    {i === activeStep && (
                      <div
                        key={`dot-${activeStep}-${animKey}`}
                        className="absolute top-0 left-0 h-full bg-[#00cfaa] rounded-full"
                        style={{ animation: `dotFill ${AUTO_PLAY_DELAY}ms linear forwards` }}
                      />
                    )}
                  </div>
                ))}
              </div>

              <Link
                className="inline-flex items-center gap-2 w-fit active:scale-95 shadow-md shadow-[#00cfaa]/30 transition-all duration-200 btn-slider"
                title="Order Now"
                href="https://portal.pxlperfects.com/dashboard/services"
                target="_blank"
              >
                Order Now
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
=======
              <Image
  key={current.image}
  alt={current.title}
  src={current.image}
  width={800}
  height={500}
  priority={displayStep === 0}
  quality={60}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 617px"
  placeholder="empty"
  onLoad={() => setImageLoaded(true)}
  className="w-full h-full object-contain rounded-2xl drop-shadow-xl"
/>
>>>>>>> 37f735f9ab245aa32b3b0c499046f26f7b59e06d
            </div>

            {/* Right — image */}
            <div className="relative lg:w-[55%] bg-gradient-to-br from-[#f0f8f8] to-[#e8f7f5] flex items-center justify-center p-2 md:p-8 min-h-[250px] overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-[#00cfaa]/20" />
              <div className="absolute bottom-6 left-4 w-8  h-8  rounded-full border-2 border-[#00cfaa]/15" />

              <div
                key={`img-${animKey}`}
                className={`relative w-full h-full ${imgClass}`}
                style={{ minHeight: "200px" }}
              >
                <Image
                  alt={current.title}
                  src={current.image}
                  width={800}
                  height={500}
                  priority={displayStep === 0}
                  quality={60}
                  placeholder="empty"
                  className="w-full h-full object-contain rounded-2xl drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* ── Mobile nav ── */}
          <div className="flex justify-between items-center mt-6 sm:hidden">
            <button
              onClick={() => handleManualStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="flex items-center gap-1.5 text-sm font-semibold text-[#00cfaa] disabled:text-[#ccc] disabled:cursor-not-allowed transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Previous
            </button>
            <span className="text-xs text-gray-400">{activeStep + 1} / {data.length}</span>
            <button
              onClick={() => handleManualStep(Math.min(data.length - 1, activeStep + 1))}
              disabled={activeStep === data.length - 1}
              className="flex items-center gap-1.5 text-sm font-semibold text-[#00cfaa] disabled:text-[#ccc] disabled:cursor-not-allowed transition-colors"
            >
              Next
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default DashBoardPortal;