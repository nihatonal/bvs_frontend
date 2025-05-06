import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';



const TestimonialsSection = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            quote: t('services.webdesign.testimonials.items.1.quote'),
            author: t('services.webdesign.testimonials.items.1.author'),
            role: t('services.webdesign.testimonials.items.1.role'),
        },
        {
            quote: t('services.webdesign.testimonials.items.2.quote'),
            author: t('services.webdesign.testimonials.items.2.author'),
            role: t('services.webdesign.testimonials.items.2.role'),
        },
        {
            quote: t('services.webdesign.testimonials.items.3.quote'),
            author: t('services.webdesign.testimonials.items.3.author'),
            role: t('services.webdesign.testimonials.items.3.role'),
        },
    ];
    const next = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 bg-white dark:bg-[#0f0f0f] relative">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
                    {t('services.webdesign.testimonials_title')}
                </h2>

                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-700 dark:text-gray-300"
                >
                    <p className="text-xl italic">“{testimonials[activeIndex].quote}”</p>
                    <p className="mt-4 font-semibold">{testimonials[activeIndex].name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[activeIndex].role}</p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-8">
                    <button onClick={prev} className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                        ‹
                    </button>
                    <button onClick={next} className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
