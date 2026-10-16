import React, { useState, useEffect, useRef } from 'react';
import CountUpRaw from 'react-countup';

// In Vite/ESM bundling environments, react-countup's default export can be either
// the component itself or an object with `{ default: Component, useCountUp: fn }`.
// Resolve the component safely to prevent React invalid element type error.
const ResolvedCountUp: React.ComponentType<any> | null = (() => {
  if (typeof CountUpRaw === 'function') {
    return CountUpRaw;
  }
  if (CountUpRaw && typeof (CountUpRaw as any).default === 'function') {
    return (CountUpRaw as any).default;
  }
  return null;
})();

interface AnimatedCounterProps {
  end: number;
  duration?: number; // supports either seconds (e.g. 2.0) or milliseconds (e.g. 1800)
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label?: string;
  sublabel?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2.0,
  prefix = '',
  suffix = '',
  decimals = 0,
  label,
  sublabel,
  className = ''
}) => {
  // Normalize duration if provided in milliseconds (e.g. 1800 -> 1.8)
  const durationInSeconds = duration > 50 ? duration / 1000 : duration;

  // Fallback animation in case react-countup component resolution fails
  const [fallbackCount, setFallbackCount] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (ResolvedCountUp) return; // react-countup component will handle animation

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasStarted) {
          setHasStarted(true);
          let startTime: number | null = null;
          const animDuration = durationInSeconds * 1000;

          const step = (now: number) => {
            if (!startTime) startTime = now;
            const progress = Math.min((now - startTime) / animDuration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setFallbackCount(easeOut * end);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setFallbackCount(end);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [end, durationInSeconds, hasStarted]);

  return (
    <div
      ref={containerRef}
      className={`group transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
    >
      <div className="text-2xl sm:text-3xl font-extrabold text-[#E8B13C] tracking-tight flex items-baseline">
        {ResolvedCountUp ? (
          <ResolvedCountUp
            start={0}
            end={end}
            duration={durationInSeconds}
            decimals={decimals}
            prefix={prefix}
            suffix={suffix}
            enableScrollSpy
            scrollSpyOnce
          />
        ) : (
          <span>
            {prefix}
            {decimals > 0
              ? fallbackCount.toFixed(decimals)
              : Math.floor(fallbackCount).toLocaleString()}
            {suffix}
          </span>
        )}
      </div>
      {label && (
        <div className="text-xs sm:text-sm font-semibold text-white mt-1">
          {label}
        </div>
      )}
      {sublabel && (
        <div className="text-[11px] text-slate-300 font-medium">
          {sublabel}
        </div>
      )}
    </div>
  );
};
