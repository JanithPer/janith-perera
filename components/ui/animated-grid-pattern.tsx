'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
  colors?: string[];
}

export default function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  colors = ['#fff'],
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState<
    Array<{ id: number; pos: [number, number]; colorIndex: number }>
  >([]);

  const getPos = useCallback(
    (currentDimensions: { width: number; height: number }) => {
      return [
        Math.floor((Math.random() * currentDimensions.width) / width),
        Math.floor((Math.random() * currentDimensions.height) / height),
      ] as [number, number];
    },
    [width, height],
  );

  const generateSquares = useCallback(
    (count: number, currentDimensions: { width: number; height: number }) => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        pos: getPos(currentDimensions),
        colorIndex: Math.floor(Math.random() * colors.length),
      }));
    },
    [getPos, colors.length],
  );

  const updateSquarePosition = useCallback(
    (id: number) => {
      setSquares((currentSquares) =>
        currentSquares.map((sq) =>
          sq.id === id
            ? {
                ...sq,
                pos: getPos(dimensions),
                colorIndex: (sq.colorIndex + 1) % colors.length,
              }
            : sq,
        ),
      );
    },
    [getPos, dimensions, colors.length],
  );

  useEffect(() => {
    const container = containerRef.current;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newDimensions = {
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        };
        setDimensions(newDimensions);
        if (newDimensions.width && newDimensions.height) {
          setSquares(generateSquares(numSquares, newDimensions));
        }
      }
    });

    if (container) {
      resizeObserver.observe(container);
    }

    return () => {
      if (container) {
        resizeObserver.unobserve(container);
      }
    };
  }, [numSquares, generateSquares]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-white-400/30',
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [x, y], id, colorIndex }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: 'reverse',
            }}
            onAnimationComplete={() => updateSquarePosition(id)}
            key={`${x}-${y}-${index}`}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill={colors[colorIndex]}
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}
