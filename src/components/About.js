import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

import about_us from "../assets/images/about_us_2.png";
import about_us_2 from '../assets/images/about_us.png';
import skills_bg from '../assets/images/about_us_skills.jpg';
import AboutAdv from './UI/AboutAdv';
import Timeline from './UI/Timeline';

function About() {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const progressRef = useRef(null);

    const isProgressInView = useInView(progressRef, { amount: 0.3, once: true });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });

    const yVineyard = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const yMonihomes = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const yDesigner = useTransform(scrollYProgress, [0, 1], [0, -30]);

    const skills = [
        { name: "JavaScript", value: 85 },
        { name: "HTML5", value: 100 },
        { name: "CSS3", value: 95 },
        { name: "React", value: 90 }
    ];

    const SkillBar = ({ name, value }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, {
            amount: 0.5,
            once: false, // her görünümde tetiklensin
        });

        return (
            <div ref={ref} className="relative ">
                <div className="w-full flex items-center mb-1">
                    <h3 className="text-white tracking-widest">{name}</h3>
                    <span className="ml-auto text-white">
                        {isInView && <CountUp end={value} duration={1.5} />}%
                    </span>
                </div>
                <div className="relative bg-sky-400/20 h-1 rounded-xl overflow-hidden">
                    <motion.div
                        className="bg-sky-500 h-1 rounded-xl"
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? `${value}%` : 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        key={isInView ? 'in' : 'out'} // yeniden render için önemli
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="pt-20 lg:pt-20 dark:bg-[#1d1d1d]" id="about" ref={sectionRef}>
            <div className="max-w-6xl px-4 mx-auto md:grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Left */}
                <div className="md:pt-8">
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-md text-rose-600 tracking-widest uppercase mb-1"
                    >
                        {t('about.section_reflect')}
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="mt-2 mb-6 uppercase font-gilroy font-bold text-3xl md:text-4xl tracking-[5px] text-[#10111A] dark:text-white"
                    >
                        {t('about.section_title')}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="leading-[170%] text-[#97918B] dark:text-neutral-400 mb-10"
                    >
                        {t('about.desc')}
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg hover:transition shadow-lg shadow-stone-400 dark:shadow-stone-600"
                    >
                        {t('about.cta')}
                    </motion.button>
                </div>
                <div className="md:hidden overflow-hidden shadow-lg shadow-gray-600 dark:shadow-gray-500 mt-16 relative w-full h-72 rounded-3xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${skills_bg})` }}>
                    <div className="absolute inset-0 w-full h-72 bg-black bg-opacity-50 rounded-3xl"></div>
                    <div ref={progressRef} className="relative z-10 p-6 flex flex-col justify-center gap-4">
                        <h3 className="text-lg text-white mb-2">
                            {t('about.skills')}
                        </h3>
                        {skills.map((skill) => (
                            <SkillBar key={skill.name} name={skill.name} value={skill.value} />
                        ))}
                    </div>
                </div>

                {/* Right Images */}
                <div className="hidden relative md:flex flex-col justify-center gap-8">
                    {/* <motion.img
                        initial={{ opacity: 0, filter: 'blur(8px)' }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className=" w-full h-44 object-cover rounded-3xl"
                        src={about_us}
                        alt="about 1"
                    /> */}
                    <AboutAdv className="h-48 w-full" />
                    <motion.img
                        initial={{ opacity: 0, filter: 'blur(8px)' }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.2, delay: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-full h-72 object-cover rounded-t-3xl"
                        src={about_us_2}
                        alt="about 2"
                    />

                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(8px)' }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.2, delay: 1.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="absolute z-30 bottom-[-25%] left-[-25%] p-4 rounded-3xl bg-white dark:bg-[#1d1d1d]"
                    >
                        <div
                            className="
                            shadow-lg shadow-stone-400 dark:shadow-stone-600
                            relative w-72 h-72 rounded-3xl bg-cover bg-center"
                            style={{ backgroundImage: `url(${skills_bg})` }}
                        >
                            <div className="absolute inset-0 w-72 h-72 bg-black bg-opacity-50 rounded-3xl"></div>
                            <div ref={progressRef} className="relative z-10 p-6 flex flex-col justify-center gap-4">
                                <h3 className="text-lg text-white mb-2">
                                    {t('about.skills')}
                                </h3>
                                {skills.map((skill) => (
                                    <SkillBar key={skill.name} name={skill.name} value={skill.value} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Timeline */}
                <div className="mt-6 md:mt-20 col-span-2">
                    <Timeline />
                </div>
            </div>
        </div>
    );
}

export default About;
