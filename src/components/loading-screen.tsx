"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const pageReady = useRef(false);
  const progressRef = useRef(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const phase1Target = 75;
    const phase1Duration = 1000;
    const phase1Interval = 20;
    const phase1Increment = phase1Target / (phase1Duration / phase1Interval);

    let done = false;
    let phase2Timer: ReturnType<typeof setInterval> | null = null;

    const finish = () => {
      if (done) return;
      done = true;

      if (phase2Timer) clearInterval(phase2Timer);

      setProgress(100);
      progressRef.current = 100;

      setTimeout(() => {
        setVisible(false);
        setTimeout(() => onCompleteRef.current(), 250);
      }, 200);
    };

    const phase1Timer = setInterval(() => {
      progressRef.current = Math.min(progressRef.current + phase1Increment, phase1Target);
      setProgress(progressRef.current);

      if (progressRef.current >= phase1Target) {
        clearInterval(phase1Timer);

        if (pageReady.current) {
          finish();
          return;
        }

        phase2Timer = setInterval(() => {
          progressRef.current = Math.min(progressRef.current + 0.3, 90);
          setProgress(progressRef.current);

          if (progressRef.current >= 90 && phase2Timer) {
            clearInterval(phase2Timer);
            phase2Timer = null;
          }
        }, 100);
      }
    }, phase1Interval);

    const onReady = () => {
      pageReady.current = true;
      if (progressRef.current >= phase1Target) {
        finish();
      }
    };

    if (document.readyState === "complete") {
      onReady();
    } else {
      window.addEventListener("load", onReady, { once: true });
    }

    return () => {
      clearInterval(phase1Timer);
      if (phase2Timer) clearInterval(phase2Timer);
      window.removeEventListener("load", onReady);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260217-WA0019-5QkKPDwjEXwxZErsLSvxQ5HTEym3ro.jpg"
              alt="ISOLELE background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            <div
              className="relative h-[260px] w-[260px] overflow-hidden rounded-full"
              style={{
                border: "4px solid #F6B800",
                boxShadow: "0 0 40px rgba(246,184,0,0.5), 0 0 80px rgba(246,184,0,0.2)",
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CERCLE-ISOLELE%202026%20copie.png-46W5InEwqtpwlTrRObuQMzt4LY3TPH.jpeg"
                alt="CERCLE-ISOLELE 2026"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ei_1774029892268-removebg-preview-OGLwAWrJqgxIOFX6ES21zzBCcRpiHa.png"
                  alt="ISOLELE - The Chosen Ones"
                  width={260}
                  height={70}
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-300">
                House of African Comic Royalty...
              </p>
            </div>

            <div className="w-64 md:w-80">
              <div className="mb-3 h-[3px] overflow-hidden rounded-full bg-[#F6B80026]">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #F6B800 0%, #FFD000 60%, #F6B800 100%)",
                    boxShadow: "0 0 16px rgba(246, 184, 0, 0.9)",
                  }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.05 }}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F6B800]">
                  Loading
                </span>
                <span className="text-xs font-bold text-[#F6B800]">{Math.round(progress)}%</span>
              </div>
            </div>

            <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-300">
              Awakening the Chosen Ones...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
