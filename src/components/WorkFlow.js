import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { FaPenNib, FaRegEye, FaLaptopCode, FaClipboardCheck } from 'react-icons/fa';
import workflow from '../assets/images/workflow3.png';
const steps = [
    {
        icon: <FaPenNib size={24} />,
        titleKey: 'services.webdesign.workflow.step1.title',
        descKey: 'services.webdesign.workflow.step1.desc',
    },
    {
        icon: <FaRegEye size={24} />,
        titleKey: 'services.webdesign.workflow.step2.title',
        descKey: 'services.webdesign.workflow.step2.desc',
    },
    {
        icon: <FaLaptopCode size={24} />,
        titleKey: 'services.webdesign.workflow.step3.title',
        descKey: 'services.webdesign.workflow.step3.desc',
    },
    {
        icon: <FaClipboardCheck size={24} />,
        titleKey: 'services.webdesign.workflow.step4.title',
        descKey: 'services.webdesign.workflow.step4.desc',
    },
];

const Workflow = () => {
    const { t } = useTranslation();

    return (
        <section className=''>
            <div className='max-w-6xl mx-auto px-4 lg:px-0 flex flex-col lg:flex-row lg:gap-10 items-center justify-between py-24'>
                <motion.div className='w-full h-[320px] lg:h-[480px] lg:w-[586px] rounded-2xl bg-cover bg-center bg-no-repeat'
                    style={{ backgroundImage: `url(${workflow})`, }}
                    initial={{ opacity: 0, filter: 'blur(8px)' }}
                    // animate={{ opacity: 1, filter: 'blur(0px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                />

                <div className='text-right ' >
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='dark:text-white text-3xl md:text-4xl font-semibold leading-tight'>{t('services.webdesign.workflow_title')}</motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='text-md text-gray-400 mb-10'>{t('services.webdesign.offer_subtitle')}</motion.p>
                    <div className="relative border-r-2 border-sky-500 dark:border-sky-400 pl-6 space-y-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}


                                className="relative"
                            >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="absolute -right-[8px] top-1.5 text-sky-400 bg-sky-50 dark:text-sky-50 dark:bg-sky-400 w-4 h-4 rounded-full flex items-center justify-center text-sky-600 text-xs z-10">
                                    {step.icon}
                                </motion.div>
                                <motion.h3 className="pr-4 text-lg font-semibold text-[#10111A] dark:text-white"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    {t(step.titleKey)}
                                </motion.h3>
                                <motion.p className="pr-4 text-sm text-neutral-600 dark:text-neutral-400 mt-2"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    {t(step.descKey)}
                                </motion.p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
        // <section className="py-20 px-6 md:px-16 bg-white dark:bg-[#0D0D0D] relative overflow-hidden">
        //     {/* Grid arkaplan görseli */}
        //     <img
        //         src="/assets/grid-light.svg"
        //         alt="grid"
        //         className="absolute top-0 left-0 w-full h-full object-cover opacity-10 dark:hidden"
        //     />
        //     <img
        //         src="/assets/grid-dark.svg"
        //         alt="grid"
        //         className="absolute top-0 left-0 w-full h-full object-cover opacity-10 hidden dark:block"
        //     />

        //     <div className="relative z-10 max-w-6xl mx-auto">
        //         <motion.h2
        //             initial={{ opacity: 0, y: 40 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             transition={{ duration: 0.8 }}
        //             viewport={{ once: false }}
        //             className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#10111A] dark:text-white tracking-wide"
        //         >
        //             {t('services.webdesign.workflow.title')}
        //         </motion.h2>

        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        //             {steps.map((step, index) => (
        //                 <Parallax key={index} speed={index % 1 === 0 ? -3 : 3}>
        //                     <motion.div
        //                         initial={{ opacity: 0, y: 40 }}
        //                         whileInView={{ opacity: 1, y: 0 }}
        //                         transition={{ duration: 0.8, delay: index * 0.2 }}
        //                         viewport={{ once: false, amount: 0.4 }}
        //                         className="p-6 rounded-2xl bg-white dark:bg-[#1C1C1C] shadow-lg border border-neutral-100 dark:border-neutral-800"
        //                     >
        //                         <div className="text-sky-600 dark:text-sky-400 mb-4">
        //                             {step.icon}
        //                         </div>
        //                         <h3 className="text-xl font-semibold text-[#10111A] dark:text-white mb-2">
        //                             {t(step.titleKey)}
        //                         </h3>
        //                         <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
        //                             {t(step.descKey)}
        //                         </p>
        //                     </motion.div>
        //                 </Parallax>
        //             ))}
        //         </div>
        //     </div>
        // </section>
    );
};

export default Workflow;
