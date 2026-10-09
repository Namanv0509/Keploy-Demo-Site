"use client";

import { useTheme } from "./theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="theme-toggle">
      <span
        className={`theme-toggle__label ${!isDark ? "theme-toggle__label--active" : ""}`}
      >
        Light
      </span>
      <button
        type="button"
        className="theme-toggle__track"
        data-theme={theme}
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        aria-pressed={isDark}
      >
        <span className="theme-toggle__thumb" />
      </button>
      <span
        className={`theme-toggle__label ${isDark ? "theme-toggle__label--active" : ""}`}
      >
        Dark
      </span>
    </div>
  );
}
