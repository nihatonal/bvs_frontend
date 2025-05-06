// components/ServicesSection.tsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // veya next/link
import { useInView } from "react-intersection-observer";

import { IconLayout, IconCode, IconLanguage, IconSettings } from "@tabler/icons-react";

import '../styles/gridBackground.css'
const services = [
    {
        titleKey: "services.web_design.title",
        descKey: "services.web_design.short_desc",
        icon: <IconLayout size={40} stroke={1.5} />,
        link: "/services/web-design",
    },
    {
        titleKey: "services.frontend_dev.title",
        descKey: "services.frontend_dev.short_desc",
        icon: <IconCode size={40} stroke={1.5} />,
        link: "/services/front-end-development",
    },
    {
        titleKey: "services.multilang.title",
        descKey: "services.multilang.short_desc",
        icon: <IconLanguage size={40} stroke={1.5} />,
        link: "/services/multi-language-sites",
    },
    {
        titleKey: "services.admin_cms.title",
        descKey: "services.admin_cms.short_desc",
        icon: <IconSettings size={40} stroke={1.5} />,
        link: "/services/admin-cms-panels",
    },
];

export default function ServicesSection() {
    const { t } = useTranslation();
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

    return (
        <section
            id="services"
            className="relative bg-grid py-24 px-6 md:px-12 lg:px-20 overflow-hidden"

        >
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <p className="text-rose-600 uppercase tracking-widest font-semibold mb-2">
                    {t("services.section_reflect")}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide dark:text-white text-gray-900">
                    {t("services.section_title")}
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-white dark:bg-neutral-900 p-6 rounded-3xl shadow-xl relative overflow-hidden group hover:shadow-2xl hover:transition-all"
                    >
                        <div className="mb-4 text-sky-600 dark:text-sky-400">{service.icon}</div>
                        <h3 className="text-xl font-semibold uppercase tracking-wide dark:text-white text-gray-900 mb-2">
                            {t(service.titleKey)}
                        </h3>
                        <p className="text-gray-600 dark:text-neutral-400 mb-4">
                            {t(service.descKey)}
                        </p>
                        <Link
                            to={service.link}
                            className="inline-block text-sky-600 dark:text-sky-400 hover:underline font-medium tracking-wide transition"
                        >
                            {t("services.read_more")} →
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
