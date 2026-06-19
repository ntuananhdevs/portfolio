"use client";

import { useEffect } from "react";

export default function DisableDevTools() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
        return;
      }

      // Ctrl+Shift+I (Chrome DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
        return;
      }

      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
        return;
      }

      // Ctrl+Shift+C (Inspector)
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
        return;
      }

      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        return;
      }

      // Ctrl+S (Save page)
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        return;
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
