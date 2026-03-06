import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-14"
    >
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent font-medium mb-2">{t("hero.greeting")}</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          {t("hero.name")}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-3">
          {t("hero.title")}
        </p>
        <p className="text-gray-500 dark:text-gray-500 mb-2">
          {t("hero.tagline")}
        </p>
        <div className="flex items-center justify-center gap-1 text-sm text-gray-400 dark:text-gray-500 mb-8">
          <MapPin size={14} />
          <span>{t("hero.location")}</span>
        </div>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-block px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg font-medium transition-colors"
        >
          {t("hero.cta")}
        </a>
      </motion.div>
    </section>
  );
}
