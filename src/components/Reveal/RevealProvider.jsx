// src/components/Reveal/RevealProvider.jsx
import React, { useEffect } from "react";

/**
 * RevealProvider
 * Observes elements with these selectors:
 *  - .reveal, .reveal-left, .reveal-right, .reveal-child, .stagger > *
 * Adds .is-visible when element enters viewport.
 * Respects prefers-reduced-motion (makes everything visible if reduced-motion is set).
 * Mount once (App.js).
 */
export default function RevealProvider() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const selectors = [
      ".reveal",
      ".reveal-left",
      ".reveal-right",
      ".reveal-child",
      ".stagger > *",
    ].join(",");

    // get existing nodes
    const initial = Array.from(document.querySelectorAll(selectors));

    if (reduceMotion) {
      // Immediately reveal everything (no motion)
      initial.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12,
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target); // reveal once
        }
      });
    }, observerOptions);

    initial.forEach((el) => {
      if (!el.classList.contains("is-visible")) io.observe(el);
    });

    // Watch for dynamically added nodes (route changes / async content)
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof Element)) return;
          const matches = Array.from(n.querySelectorAll(selectors));
          if (n.matches && n.matches(selectors)) matches.unshift(n);
          matches.forEach((el) => {
            if (!el.classList.contains("is-visible")) io.observe(el);
          });
        });
      });
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      try {
        io.disconnect();
        mo.disconnect();
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, []);

  return null;
}
