import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const PricingSection = () => {
    const { t } = useTranslation();

    const packages = [
        {
            type: 'basic',
            bg: 'bg-white dark:bg-neutral-900',
            border: 'border border-gray-200 dark:border-neutral-700',
        },
        {
            type: 'pro',
            bg: 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white',
            border: '',
        },
    ];

    return (
        <section className="relative z-10 lg:py-10 pb-20 px-4 dark:bg-neutral-950">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-12"
                >
                    {t('services.webdesign.pricing_title', 'Paketlerimiz')}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.type}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`rounded-2xl p-8 shadow-md ${pkg.bg} ${pkg.border}`}
                        >
                            <h3 className="text-2xl font-semibold mb-2">
                                {t(`services.webdesign.pricing.${pkg.type}.title`)}
                            </h3>
                            <p className="text-xl font-bold mb-4">
                                {t(`services.webdesign.pricing.${pkg.type}.price`)}
                            </p>
                            <ul className="space-y-2 text-sm md:text-base">
                                <li>✔ {t(`services.webdesign.pricing.${pkg.type}.feature1`)}</li>
                                <li>✔ {t(`services.webdesign.pricing.${pkg.type}.feature2`)}</li>
                                <li>✔ {t(`services.webdesign.pricing.${pkg.type}.feature3`)}</li>
                            </ul>
                            {pkg.type === 'pro' && (
                                <p className="text-xs text-gray-100 mt-4 italic">
                                    {t('services.webdesign.pricing.pro.note')}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-sm text-gray-600 dark:text-gray-400 mt-10 max-w-2xl mx-auto"
                >
                    {t('services.webdesign.pricing.disclaimer')}
                </motion.p>
            </div>
        </section>
    );
};

export default PricingSection;
