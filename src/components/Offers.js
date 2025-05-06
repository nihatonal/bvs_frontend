import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { FaLaptopCode, FaMobileAlt, FaFigma, FaRegLightbulb } from 'react-icons/fa';

export default function Offers(props) {
    const { t } = useTranslation();
    const offers = [
        {
            icon: <FaLaptopCode size={40} />,
            titleKey: 'services.webdesign.offers.modern.title',
            descKey: 'services.webdesign.offers.modern.desc',
            color: "bg-zinc-600/50",
            text_color: "white"
        },
        {
            icon: <FaMobileAlt size={40} />,
            titleKey: 'services.webdesign.offers.usercentered.title',
            descKey: 'services.webdesign.offers.usercentered.desc',
            color: "bg-green-900/70",
            text_color: "white"
        },
        {
            icon: <FaFigma size={40} />,
            titleKey: 'services.webdesign.offers.responsive.title',
            descKey: 'services.webdesign.cards.responsive.desc',
            color: "bg-cyan-600/50",
            text_color: "white"
        },
        {
            icon: <FaRegLightbulb size={40} />,
            titleKey: 'services.webdesign.offers.prototype.title',
            descKey: 'services.webdesign.offers.prototype.desc',
            color: "bg-slate-600/80",
            text_color: "white"
        },
        {
            icon: <FaRegLightbulb size={40} />,
            titleKey: 'services.webdesign.offers.typography.title',
            descKey: 'services.webdesign.offers.typography.desc',
            color: "bg-teal-700/70",
            text_color: "white"
        },
    ];
    return (
        <section className="bg-[#1F1F1F] text-white py-12 px-3 rounded-[4rem]">
            <div className="max-w-6xl mx-auto text-center mb-10">
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-semibold leading-tight">
                    {t('services.webdesign.offer_title')}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-sm">{t('services.webdesign.offer_subtitle')}</motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {/* Card 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`${offers[0].color} row-span-4 rounded-2xl p-4 lg:p-6 flex flex-col justify-between`}>
                    <div className='grid grid-cols-[55px_1fr] items-center'>
                        <div className="text-white mb-4 row-span-2">
                            {offers[0].icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            {t(offers[0].titleKey)}
                        </h3>
                        <p className="text-sm text-gray-300 mb-4">
                            {t(offers[0].descKey)}
                        </p>

                    </div>
                    <img
                        src={props.photo}
                        alt="International Talent"
                        className="rounded-xl mt-6"
                    />
                </motion.div>
                {offers.slice(1).map((card, index) =>
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`${card.color} text-${card.text_color} rounded-2xl p-6 flex flex-col justify-between`}>
                        <div className='grid grid-cols-[55px_1fr] items-center'>
                            <div className={`text-${card.text_color} mb-4 row-span-2`}>
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                {t(card.titleKey)}
                            </h3>
                            <p className={`text-sm text-${card.text_color} opacity-[50%] mb-4`}>
                                {t(card.descKey)}
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>


        </section >
    );
}
