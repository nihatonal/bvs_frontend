import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaFigma, FaRegLightbulb } from 'react-icons/fa';
import phone from '../assets/images/2phonesmockup.png';
const cards = [
    {
        icon: <FaLaptopCode size={30} />,
        titleKey: 'services.webdesign.cards.uiux.title',
        descKey: 'services.webdesign.cards.uiux.desc',
    },
    {
        icon: <FaMobileAlt size={30} />,
        titleKey: 'services.webdesign.cards.responsive.title',
        descKey: 'services.webdesign.cards.responsive.desc',
    },
    {
        icon: <FaFigma size={30} />,
        titleKey: 'services.webdesign.cards.prototype.title',
        descKey: 'services.webdesign.cards.prototype.desc',
    },
    {
        icon: <FaRegLightbulb size={30} />,
        titleKey: 'services.webdesign.cards.unique.title',
        descKey: 'services.webdesign.cards.unique.desc',
    },
];

const WhatIOffer = () => {
    const { t } = useTranslation();
    const offers = [
        {
            titleKey: 'services.webdesign.offers.modern.title',
            descKey: 'services.webdesign.cards.uiux.desc',
        },
        {
            titleKey: 'services.webdesign.offers.usercentered.title',
            descKey: 'services.webdesign.cards.responsive.desc',
        },
        {
            titleKey: 'services.webdesign.offers.responsive.title',
            descKey: 'services.webdesign.cards.prototype.desc',
        },
        {
            titleKey: 'services.webdesign.offers.prototype.title',
            descKey: 'services.webdesign.cards.unique.desc',
        },
        {
            titleKey: 'services.webdesign.offers.theming.title',
            descKey: 'services.webdesign.cards.unique.desc',
        },
        {
            titleKey: 'services.webdesign.offers.typography.title',
            descKey: 'services.webdesign.cards.unique.desc',
        },
    ];
    return (
        <section className='dark:bg-dark-theme'>
            <div className='max-w-6xl mx-auto flex items-center justify-between py-24'>
                <div >
                    <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className='text-2xl md:text-4xl font-bold text-orange-400 mb-1'>{t('services.webdesign.offer_title')}</motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className='text-md text-gray-400 mb-4'>{t('services.webdesign.offer_subtitle')}</motion.p>
                    <ul className='text-stone-700 dark:text-white'>
                        {offers.map((item, i) =>
                            <motion.li
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                                key={item.titleKey} className='py-1'>{t(item.titleKey)}</motion.li>
                        )}
                    </ul>
                </div>
                <motion.div className='h-[380px] w-[586px] rounded-2xl shadow-lg shadow-gray-400 bg-cover bg-center bg-no-repeat'
                    style={{ backgroundImage: `url(${phone})`, }}
                    initial={{ opacity: 0, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                />
            </div>
        </section>
        // <section className="py-20 bg-gray-50 dark:bg-[#0D0D0D] px-6 md:px-16">
        //     <div className="max-w-6xl mx-auto text-center">
        //         <motion.h2
        //             initial={{ opacity: 0, y: 30 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             transition={{ duration: 0.8 }}
        //             className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10"
        //         >
        //             {t('services.webdesign.offer_title')}
        //         </motion.h2>

        //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        //             {cards.map((card, index) => (
        //                 <motion.div
        //                     key={index}
        //                     initial={{ opacity: 0, y: 20 }}
        //                     whileInView={{ opacity: 1, y: 0 }}
        //                     transition={{ duration: 0.6, delay: index * 0.2 }}
        //                     className="bg-white dark:bg-[#181818] p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300 text-left"
        //                 >
        //                     <div className="text-sky-600 dark:text-sky-400 mb-4">
        //                         {card.icon}
        //                     </div>
        //                     <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        //                         {t(card.titleKey)}
        //                     </h3>
        //                     <p className="text-sm text-gray-600 dark:text-neutral-400">
        //                         {t(card.descKey)}
        //                     </p>
        //                 </motion.div>
        //             ))}
        //         </div>
        //     </div>
        // </section>
    );
};

export default WhatIOffer;
