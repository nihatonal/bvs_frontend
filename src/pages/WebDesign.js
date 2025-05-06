import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaPaintBrush } from 'react-icons/fa';

import hero from '../assets/images/webdesign.jpg';
import image_offer from '../assets/images/workflow.png'
import Workflow from '../components/WorkFlow';
import ToolsSection from '../components/ToolsSection';
import PricingSection from '../components/PricingSection';
import Offers from '../components/Offers';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
const WebDesign = () => {
    const { t } = useTranslation();

    return (
        <main className='pb-[200px] bg-neutral-100 dark:bg-neutral-700'>

            <section className="relative h-screen overflow-hidden bg-[radial-gradient(at_25%_15%,white,theme(colors.sky.300)_55%)] 
            dark:bg-[radial-gradient(at_25%_25%,black,theme(colors.sky.800)_85%)] rounded-b-[4rem] 
            ">
                <div className='max-w-6xl mx-auto pt-24 py-0 px-8 md:px-18 lg:px-0 h-screen md:py-44 md:grid grid-cols-2 md:items-center'>
                    <div className="relative z-10 max-w-5xl mx-auto text-left ">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center justify-center bg-sky-200 text-sky-600 dark:bg-sky-800 dark:text-white w-16 h-16 rounded-full mb-4 shadow-lg"
                        >
                            <FaPaintBrush size={28} />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight"
                        >
                            {t('services.webdesign.title')}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="mt-4 mb-8 md:pr-44 text-md md:text-lg text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto"
                        >
                            {t('services.webdesign.description')}
                        </motion.p>
                        <motion.button className="px-8 py-3 rounded-full font-semibold transition-colors duration-300
                        bg-[#10111A] text-white hover:bg-sky-800 border-none
                        dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {t('services.webdesign.cta')}
                        </motion.button>
                    </div>
                    <div className='mt-10 md:mt-0 relative w-full h-48 md:h-72 lg:h-full bg-cover bg-center bg-no-repeat rounded-tl-[3rem] rounded-br-[3rem]'
                        style={{ backgroundImage: `url(${hero})` }}
                    >
                        {/* <img className='rounded-tl-[3rem] rounded-br-[3rem] w-full h-full object-cover' src={hero} alt="" /> */}

                        <p className='absolute bottom-4 -left-6 md:bottom-10 md:-left-20 py-1 md:py-2 px-6 bg-emerald-500 text-white rounded-full
                        text-sm md:text-base
                        '>Corporate Website Design</p>
                        <p className='absolute top-10 -left-8 md:top-24 md:-left-20 py-1 md:py-2 px-6 bg-fuchsia-600 text-white rounded-full
                        text-sm md:text-base
                        '>E-commerce Website Design</p>
                        <p className='absolute bottom-14 -right-6 md:bottom-32 md:-right-28 py-1 md:py-2 px-6 bg-orange-500 text-white rounded-full
                        text-sm md:text-base
                        '>Personal Portfolio Design</p>
                        <p className='absolute top-1 -right-8 md:top-4 md:-right-20 py-1 md:py-2 px-6 bg-lime-500 text-white rounded-full
                        text-sm md:text-base
                        '>Landing Page Design</p>
                    </div>
                </div>
            </section>
            <div className='py-24 lg:py-32'>
                {/* Metrics Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-6 text-center text-white">
                    <div>
                        <h4 className="text-3xl text-stone-600 dark:text-stone-300 font-semibold">30+</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Başarılı Web Projesi</p>
                    </div>
                    <div>
                        <h4 className="text-3xl text-stone-600 dark:text-stone-300 font-semibold">5 Yıl</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Tasarım ve Geliştirme Deneyimi</p>
                    </div>
                    <div>
                        <h4 className="text-3xl text-stone-600 dark:text-stone-300 font-semibold">%100</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Mobil Uyumlu ve Performans Odaklı Tasarımlar</p>
                    </div>
                </div>
            </div>

            <Offers photo={image_offer} />
            <Workflow />
            <section className='py-10 lg:py-20'>
                <ToolsSection />
            </section>
            <PricingSection />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
        </main>
    );
};

export default WebDesign;
