"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const EnhancedAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-LJY4CJP8R9", {
        page_path: pathname,
        page_title: document.title,
      });
    }

    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100
      );

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;

        // Track at 25%, 50%, 75%, 100%
        if (maxScroll >= 25 && maxScroll < 50) {
          trackEvent("scroll_depth", "25%", pathname);
        } else if (maxScroll >= 50 && maxScroll < 75) {
          trackEvent("scroll_depth", "50%", pathname);
        } else if (maxScroll >= 75 && maxScroll < 100) {
          trackEvent("scroll_depth", "75%", pathname);
        } else if (maxScroll >= 100) {
          trackEvent("scroll_depth", "100%", pathname);
        }
      }
    };

    // Track time on page
    let startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEvent("time_on_page", `${timeSpent}s`, pathname);
    };

    // Track form interactions
    const trackFormInteractions = () => {
      const forms = document.querySelectorAll("form");
      forms.forEach((form) => {
        // Track form start
        form.addEventListener("focusin", () => {
          trackEvent("form_interaction", "form_start", pathname);
        });

        // Track form submission
        form.addEventListener("submit", () => {
          trackEvent("form_interaction", "form_submit", pathname);
        });
      });
    };

    // Track button clicks
    const trackButtonClicks = () => {
      const buttons = document.querySelectorAll("button, a[href], .cta-button");
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const buttonText = button.textContent?.trim() || "Unknown Button";
          const buttonHref = button.href || button.getAttribute("href") || "";
          trackEvent("button_click", buttonText, pathname, {
            href: buttonHref,
            element: button.tagName,
          });
        });
      });
    };

    // Track phone number clicks
    const trackPhoneClicks = () => {
      const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
      phoneLinks.forEach((link) => {
        link.addEventListener("click", () => {
          trackEvent("phone_click", link.href, pathname);
        });
      });
    };

    // Track email clicks
    const trackEmailClicks = () => {
      const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
      emailLinks.forEach((link) => {
        link.addEventListener("click", () => {
          trackEvent("email_click", link.href, pathname);
        });
      });
    };

    // Track social media clicks
    const trackSocialClicks = () => {
      const socialLinks = document.querySelectorAll(
        'a[href*="facebook"], a[href*="linkedin"], a[href*="twitter"], a[href*="zalo"]'
      );
      socialLinks.forEach((link) => {
        link.addEventListener("click", () => {
          const platform = link.href.includes("facebook")
            ? "facebook"
            : link.href.includes("linkedin")
            ? "linkedin"
            : link.href.includes("twitter")
            ? "twitter"
            : link.href.includes("zalo")
            ? "zalo"
            : "other";
          trackEvent("social_click", platform, pathname);
        });
      });
    };

    // Track external links
    const trackExternalLinks = () => {
      const externalLinks = document.querySelectorAll(
        'a[href^="http"]:not([href*="smartcodesolutions.vn"])'
      );
      externalLinks.forEach((link) => {
        link.addEventListener("click", () => {
          trackEvent("external_link_click", link.href, pathname);
        });
      });
    };

    // Track file downloads
    const trackFileDownloads = () => {
      const downloadLinks = document.querySelectorAll(
        'a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"], a[download]'
      );
      downloadLinks.forEach((link) => {
        link.addEventListener("click", () => {
          const fileName = link.href.split("/").pop() || "unknown";
          trackEvent("file_download", fileName, pathname);
        });
      });
    };

    // Track video interactions (if any)
    const trackVideoInteractions = () => {
      const videos = document.querySelectorAll(
        'video, iframe[src*="youtube"], iframe[src*="vimeo"]'
      );
      videos.forEach((video) => {
        video.addEventListener("play", () => {
          trackEvent("video_play", "video_started", pathname);
        });
        video.addEventListener("ended", () => {
          trackEvent("video_complete", "video_ended", pathname);
        });
      });
    };

    // Helper function to track events
    const trackEvent = (action, label, page, additionalParams = {}) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", action, {
          event_category: "engagement",
          event_label: label,
          page_path: page,
          ...additionalParams,
        });
      }
    };

    // Initialize all tracking
    trackFormInteractions();
    trackButtonClicks();
    trackPhoneClicks();
    trackEmailClicks();
    trackSocialClicks();
    trackExternalLinks();
    trackFileDownloads();
    trackVideoInteractions();

    // Add scroll listener
    window.addEventListener("scroll", trackScrollDepth);

    // Track time on page when user leaves
    window.addEventListener("beforeunload", trackTimeOnPage);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", trackScrollDepth);
      window.removeEventListener("beforeunload", trackTimeOnPage);
    };
  }, [pathname]);

  return null;
};

export default EnhancedAnalytics;
