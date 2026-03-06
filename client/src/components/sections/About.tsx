import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";

export function About() {
  const { t } = useTranslation();
  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("about.heading")}
        </motion.h2>
        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
