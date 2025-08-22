"use client";

import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = ["/images/logo-name.png", "/images/hero.jpg"];

      criticalResources.forEach((resource) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = resource;
        document.head.appendChild(link);
      });
    };

    // Add intersection observer for lazy loading
    const setupLazyLoading = () => {
      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove("lazy");
              observer.unobserve(img);
            }
          });
        });

        const lazyImages = document.querySelectorAll("img[data-src]");
        lazyImages.forEach((img) => imageObserver.observe(img));
      }
    };

    // Optimize fonts loading
    const optimizeFonts = () => {
      const fontLink = document.createElement("link");
      fontLink.rel = "preconnect";
      fontLink.href = "https://fonts.googleapis.com";
      document.head.appendChild(fontLink);

      const fontLink2 = document.createElement("link");
      fontLink2.rel = "preconnect";
      fontLink2.href = "https://fonts.gstatic.com";
      fontLink2.crossOrigin = "anonymous";
      document.head.appendChild(fontLink2);
    };

    // Add service worker for caching
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        try {
          await navigator.serviceWorker.register("/sw.js");
        } catch (error) {
          console.log("Service worker registration failed:", error);
        }
      }
    };

    // Initialize all optimizations
    preloadCriticalResources();
    setupLazyLoading();
    optimizeFonts();
    registerServiceWorker();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
