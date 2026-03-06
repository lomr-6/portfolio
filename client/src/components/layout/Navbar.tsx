import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "@/hooks/useTranslation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const NAV_SECTIONS = [
  "about",
  "skills",
  "projects",
  "services",
  "contact",
] as const;

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLang } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f1210]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-accent transition-colors"
        >
          LM
        </button>

        <div className="hidden md:flex items-center gap-6">
          {NAV_SECTIONS.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"
            >
              {t(`nav.${key}`)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={t("nav.toggleTheme")}
            className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleLang}
            className="px-2 py-1 text-sm font-medium rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {t("nav.toggleLang")}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f1210] px-4 py-3 flex flex-col gap-2">
          {NAV_SECTIONS.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="text-left text-sm text-gray-600 dark:text-gray-400 hover:text-accent py-1"
            >
              {t(`nav.${key}`)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
