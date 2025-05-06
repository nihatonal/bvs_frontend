import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const FAQSection = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: t('services.webdesign.faq.questions.q1.question'),
            answer: t('services.webdesign.faq.questions.q1.answer'),
        },
        {
            question: t('services.webdesign.faq.questions.q2.question'),
            answer: t('services.webdesign.faq.questions.q2.answer'),
        },
        {
            question: t('services.webdesign.faq.questions.q3.question'),
            answer: t('services.webdesign.faq.questions.q3.answer'),
        },
        {
            question: t('services.webdesign.faq.questions.q4.question'),
            answer: t('services.webdesign.faq.questions.q4.answer'),
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white dark:bg-[#0f0f0f] py-20">
            <div className="container max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    {t('services.webdesign.faq.title')}
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * index, duration: 0.6 }}
                            key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                            <button

                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                    {faq.question}
                                </span>
                                <FaChevronDown
                                    className={`transition-transform duration-300 text-gray-500 ${activeIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
