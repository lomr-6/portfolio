import { useTranslation } from "@/hooks/useTranslation";
import type { Service } from "@/types";
import { motion } from "framer-motion";
import { Code, Server, Wrench, Zap } from "lucide-react";

const ICONS = [Code, Server, Wrench, Zap];

export function Services() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true }) as Service[];

  return (
    <section id="services" className="py-24 px-4 bg-gray-50 dark:bg-[#121815]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("services.heading")}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((service, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={service.title}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1f1c] shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
