'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode, type Ref } from 'react';
import { MOTION } from '../lib/motion';

type Props = {
  as?: 'div' | 'li' | 'article' | 'section';
  delay?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Soft reveal on scroll. Content is visible by default (server render, no JS, reduced motion);
 * only elements that start below the fold are hidden and then revealed once, when they enter view.
 */
export default function Reveal({ as = 'div', delay = 0, className, children }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !MOTION) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return; // already in view

    el.classList.add('reveal-hidden');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('reveal-hidden');
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = ['reveal', className].filter(Boolean).join(' ');
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;

  if (as === 'li') return <li ref={ref as Ref<HTMLLIElement>} className={cls} style={style}>{children}</li>;
  if (as === 'article') return <article ref={ref as Ref<HTMLElement>} className={cls} style={style}>{children}</article>;
  if (as === 'section') return <section ref={ref as Ref<HTMLElement>} className={cls} style={style}>{children}</section>;
  return <div ref={ref as Ref<HTMLDivElement>} className={cls} style={style}>{children}</div>;
}
