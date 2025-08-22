"use client";

import { useEffect } from "react";

const WebVitalsMonitor = () => {
  useEffect(() => {
    // Track Largest Contentful Paint (LCP)
    const trackLCP = () => {
      if ("PerformanceObserver" in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];

          if (lastEntry) {
            const lcp = lastEntry.startTime;
            trackWebVital("LCP", lcp);

            // Send to Google Analytics
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "web_vitals", {
                event_category: "Web Vitals",
                event_label: "LCP",
                value: Math.round(lcp),
                non_interaction: true,
              });
            }
          }
        });

        observer.observe({ entryTypes: ["largest-contentful-paint"] });
      }
    };

    // Track First Input Delay (FID)
    const trackFID = () => {
      if ("PerformanceObserver" in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fid = entry.processingStart - entry.startTime;
            trackWebVital("FID", fid);

            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "web_vitals", {
                event_category: "Web Vitals",
                event_label: "FID",
                value: Math.round(fid),
                non_interaction: true,
              });
            }
          });
        });

        observer.observe({ entryTypes: ["first-input"] });
      }
    };

    // Track Cumulative Layout Shift (CLS)
    const trackCLS = () => {
      if ("PerformanceObserver" in window) {
        let clsValue = 0;
        let clsEntries = [];

        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              clsEntries.push(entry);
            }
          });
        });

        observer.observe({ entryTypes: ["layout-shift"] });

        // Report CLS when page is hidden
        const reportCLS = () => {
          if (clsValue > 0) {
            trackWebVital("CLS", clsValue);

            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "web_vitals", {
                event_category: "Web Vitals",
                event_label: "CLS",
                value: Math.round(clsValue * 1000) / 1000,
                non_interaction: true,
              });
            }
          }
        };

        document.addEventListener("visibilitychange", reportCLS);
        window.addEventListener("beforeunload", reportCLS);
      }
    };

    // Track First Contentful Paint (FCP)
    const trackFCP = () => {
      if ("PerformanceObserver" in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const firstEntry = entries[0];

          if (firstEntry) {
            const fcp = firstEntry.startTime;
            trackWebVital("FCP", fcp);

            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "web_vitals", {
                event_category: "Web Vitals",
                event_label: "FCP",
                value: Math.round(fcp),
                non_interaction: true,
              });
            }
          }
        });

        observer.observe({ entryTypes: ["first-contentful-paint"] });
      }
    };

    // Track Time to Interactive (TTI)
    const trackTTI = () => {
      if ("PerformanceObserver" in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];

          if (lastEntry) {
            const tti = lastEntry.startTime;
            trackWebVital("TTI", tti);

            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "web_vitals", {
                event_category: "Web Vitals",
                event_label: "TTI",
                value: Math.round(tti),
                non_interaction: true,
              });
            }
          }
        });

        observer.observe({ entryTypes: ["measure"] });
      }
    };

    // Helper function to track web vitals
    const trackWebVital = (metric, value) => {
      // Log to console in development
      if (process.env.NODE_ENV === "development") {
        console.log(`Web Vital - ${metric}:`, value);
      }

      // Store in localStorage for debugging
      const webVitals = JSON.parse(localStorage.getItem("webVitals") || "{}");
      webVitals[metric] = {
        value,
        timestamp: Date.now(),
        url: window.location.href,
      };
      localStorage.setItem("webVitals", JSON.stringify(webVitals));
    };

    // Track page load time
    const trackPageLoad = () => {
      window.addEventListener("load", () => {
        const navigation = performance.getEntriesByType("navigation")[0];
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          trackWebVital("PageLoad", loadTime);

          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "timing_complete", {
              name: "load",
              value: Math.round(loadTime),
            });
          }
        }
      });
    };

    // Initialize all tracking
    trackLCP();
    trackFID();
    trackCLS();
    trackFCP();
    trackTTI();
    trackPageLoad();

    // Track DOM Content Loaded
    const trackDOMContentLoaded = () => {
      const navigation = performance.getEntriesByType("navigation")[0];
      if (navigation) {
        const domContentLoaded =
          navigation.domContentLoadedEventEnd -
          navigation.domContentLoadedEventStart;
        trackWebVital("DOMContentLoaded", domContentLoaded);
      }
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", trackDOMContentLoaded);
    } else {
      trackDOMContentLoaded();
    }
  }, []);

  return null;
};

export default WebVitalsMonitor;
