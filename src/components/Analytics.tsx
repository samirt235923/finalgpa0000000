'use client';

import { useEffect } from 'react';

const GA_ID = 'G-0068LKZ62B';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Analytics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    let cancelled = false;
    let idleHandle: number | null = null;
    let timeoutHandle: number | null = null;

    const loadAnalytics = () => {
      if (cancelled || document.querySelector(`script[data-ga-id="${GA_ID}"]`)) {
        return;
      }

      window.dataLayer = window.dataLayer || [];
      window.gtag =
        window.gtag ||
        function gtag(...args: unknown[]) {
          window.dataLayer.push(args);
        };

      window.gtag('js', new Date());
      window.gtag('config', GA_ID);

      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      script.dataset.gaId = GA_ID;
      document.head.appendChild(script);
    };

    const scheduleLoad = () => {
      if (typeof window.requestIdleCallback === 'function') {
        idleHandle = window.requestIdleCallback(loadAnalytics, { timeout: 5000 });
        return;
      }

      timeoutHandle = window.setTimeout(loadAnalytics, 5000);
    };

    const onLoad = () => scheduleLoad();

    if (document.readyState === 'complete') {
      scheduleLoad();
    } else {
      window.addEventListener('load', onLoad, { once: true });
    }

    return () => {
      cancelled = true;
      if (idleHandle !== null && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== null) {
        window.clearTimeout(timeoutHandle);
      }
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return null;
}
