import { useTranslation } from "@/hooks/useTranslation";
import type { SkillCategory } from "@/types";
import { motion } from "framer-motion";

export function Skills() {
  const { t } = useTranslation();
  const categories = t("skills.categories", {
    returnObjects: true,
  }) as SkillCategory[];

  return (
    <section id="skills" className="py-24 px-4 bg-gray-50 dark:bg-[#121815]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("skills.heading")}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded-full bg-white dark:bg-[#1a1f1c] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
