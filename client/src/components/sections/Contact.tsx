import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("contact.heading")}
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-400 mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {t("contact.text")}
        </motion.p>
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <a
            href={`mailto:${t("contact.email")}`}
            className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors"
          >
            <Mail size={18} />
            <span className="text-sm">{t("contact.email")}</span>
          </a>
        </motion.div>
        <motion.div
          className="flex items-center justify-center gap-4 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md text-gray-500 hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={t("contact.links.linkedin")}
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md text-gray-500 hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={t("contact.links.github")}
          >
            <Github size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
