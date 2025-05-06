import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaReact, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaKey, FaFigma } from 'react-icons/fa';
import { SiAdobeacrobatreader } from "react-icons/si";
const ToolsSection = () => {
    const { t } = useTranslation();
    const devTools = [
        { title: 'Figma', icon: <FaFigma className="text-pink-500 text-3xl" /> },
        { title: 'Illustrator', icon: <SiAdobeacrobatreader className="text-orange-500 text-3xl" /> },
        { title: 'React', icon: <FaReact className="text-cyan-400 text-3xl" /> },
        { title: 'Tailwind CSS', icon: <FaCss3Alt className="text-sky-500 text-3xl" /> },
        { title: 'JavaScript', icon: <FaJs className="text-yellow-400 text-3xl" /> },
        { title: 'Node.js', icon: <FaNodeJs className="text-green-500 text-3xl" /> },
        { title: 'Express.js', icon: <FaNodeJs className="text-gray-600 text-3xl" /> },
        { title: 'MongoDB', icon: <FaDatabase className="text-green-700 text-3xl" /> },
        { title: 'JWT', icon: <FaKey className="text-orange-500 text-3xl" /> },
    ];

    return (
        <section className="bg-[#1F1F1F] py-12 relative z-10" >
            <div className="container mx-auto px-4 max-w-6xl text-white">
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    {t('services.webdesign.tools_title')}
                </motion.h2>

                <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
                    {devTools.map((tool, index) => (
                        <motion.div
                            key={tool.title}
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}

                        >
                            {tool.icon}
                            <p className="mt-2 text-gray-300 font-medium">{tool.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
