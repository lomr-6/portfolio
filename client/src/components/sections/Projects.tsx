import { useTranslation } from "@/hooks/useTranslation";
import type { Project } from "@/types";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const { t } = useTranslation();
  const items = t("projects.items", { returnObjects: true }) as Project[];
  const hasItems = items.length > 0;

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("projects.heading")}
        </motion.h2>

        {!hasItems ? (
          <motion.p
            className="text-center text-gray-500 dark:text-gray-400 py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t("projects.emptyState")}
          </motion.p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((project, i) => (
              <motion.div
                key={project.title}
                className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1f1c] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="aspect-video bg-gray-100 dark:bg-[#151a17] flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 dark:text-gray-600 text-sm">
                      Image
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                      {t(`projects.statusLabels.${project.status}`)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-[#0f1210] text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.links && (
                    <div className="flex gap-3">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent-dark transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent-dark transition-colors"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
