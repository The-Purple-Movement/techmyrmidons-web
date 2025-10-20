import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const getPreferred = () =>
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const [theme, setTheme] = useState(getPreferred);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme(t => (t === "dark" ? "light" : "dark"));

  return (
    <button
      className="theme-toggle"
      aria-label="Toggle dark mode"
      role="switch"
      aria-checked={theme === "dark"}
      onClick={toggle}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Sun icon (light mode) */}
      <span className="icon sun" aria-hidden>
        <svg viewBox="0 0 24 24" width="16" height="16">
          <circle cx="12" cy="12" r="4" />
          <g>
            <line x1="12" y1="1.5" x2="12" y2="4.5" />
            <line x1="12" y1="19.5" x2="12" y2="22.5" />
            <line x1="1.5" y1="12" x2="4.5" y2="12" />
            <line x1="19.5" y1="12" x2="22.5" y2="12" />
            <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
            <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
          </g>
        </svg>
      </span>
      {/* Moon icon (dark mode) */}
      <span className="icon moon" aria-hidden>
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z" />
        </svg>
      </span>
    </button>
  );
}
