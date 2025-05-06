import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
    {
        year: '2020',
        title: 'Web Tasarımına Giriş',
        description: 'HTML ve CSS ile temel web sayfaları oluşturmaya başladım.',
    },
    {
        year: '2021',
        title: 'React Öğrenmeye Başladım',
        description: 'İlk interaktif projelerimi React kullanarak geliştirdim.',
    },
    {
        year: '2023',
        title: 'Freelance Çalışmalar',
        description: 'Gerçek müşteriler için web siteleri tasarlayıp yayına aldım.',
    },
    {
        year: '2025',
        title: 'BraveVision Solutions',
        description: 'Kendi markamla projeler üretmeye başladım.',
    },
];

const Timeline = () => {
    return (
        <section id="timeline" className="py-20 px-6 max-w-6xl mx-auto">
            {/* <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">
                Benim Yolculuğum
            </h2> */}
            <div className="hidden md:grid grid-cols-4 relative md:gap-4">
                {timelineData.map((item, index) => (
                    <div key={index} className="relative">
                        {/* Pulse animasyonlu Dot */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true, amount: 0.6 }}
                            className="absolute -left-2 md:-left-4 md:-top-2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white dark:border-gray-900 z-10 animate-ping-slow" />
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true, amount: 0.6 }}
                            className="absolute -left-2 md:-left-4 md:-top-2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white dark:border-gray-900 z-10" />

                        {/* Animasyonlu içerik */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true, amount: 0.6 }}
                            className="relative space-y-1  dark:border-gray-700"
                        >
                            <motion.div
                                initial={{ width: '0%' }}
                                whileInView={{ width: `100%` }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true, amount: 0.6 }}
                                className="hidden md:block absolute left-0 top-0 h-[1px] bg-gray-300/50 origin-left">
                            </motion.div>

                            <time className="text-sm text-gray-500 dark:text-gray-400">
                                {item.year}
                            </time>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                {item.description}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
            <div className="md:hidden grid relative ">
                {timelineData.map((item, index) => (
                    <div key={index} className="relative">
                        {/* Pulse animasyonlu Dot */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true, amount: 0.6 }}
                            className="absolute -left-2 top-1 w-4 h-4 bg-blue-600 rounded-full border-2 border-white dark:border-gray-900 z-10 animate-ping-slow" />
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true, amount: 0.6 }}
                            className="absolute -left-2 top-1 w-4 h-4 bg-blue-600 rounded-full border-2 border-white dark:border-gray-900 z-10" />

                        {/* Animasyonlu içerik */}
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true, amount: 0.6 }}
                            className="pl-4 pb-6 relative space-y-1  dark:border-gray-700"
                        >
                            <motion.div
                                initial={{ height: '0%' }}
                                whileInView={{ height: `100%` }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true, amount: 0.6 }}
                                className="absolute left-0 top-0 w-[1px] bg-gray-300/50 origin-left">
                            </motion.div>

                            <time className="text-sm text-gray-500 dark:text-gray-400">
                                {item.year}
                            </time>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                {item.description}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
