import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace with your email API or Formspree/Resend endpoint
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white dark:from-neutral-950 dark:to-black">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h3
                    className="text-sm uppercase tracking-widest text-cyan-500 font-medium mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {t("contact.section_reflect")}
                </motion.h3>

                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {t("contact.section_title")}
                </motion.h2>

                <motion.p
                    className="text-gray-600 dark:text-gray-300 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {t("contact.subtitle")}
                </motion.p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("contact.name")}
                        className="col-span-1 md:col-span-2 px-4 py-3 rounded-md border border-gray-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("contact.email")}
                        className="col-span-1 md:col-span-2 px-4 py-3 rounded-md border border-gray-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder={t("contact.message")}
                        className="col-span-1 md:col-span-2 px-4 py-3 rounded-md border border-gray-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white resize-none"
                        required
                    />
                    <button
                        type="submit"
                        className="col-span-1 md:col-span-2 bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-md font-medium transition"
                    >
                        {t("contact.submit")}
                    </button>
                </form>

                {status === "success" && (
                    <p className="text-green-600 dark:text-green-400 mt-4">{t("contact.success")}</p>
                )}
                {status === "error" && (
                    <p className="text-red-500 dark:text-red-400 mt-4">{t("contact.error")}</p>
                )}

                <div className="mt-12">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">{t("contact.socials")}</p>
                    <div className="flex justify-center gap-6 text-xl text-gray-600 dark:text-gray-300">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/nihat-onal-82a4412a0" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/bvsdesign_" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
