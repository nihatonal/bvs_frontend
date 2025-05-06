import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import hero_bg from '../assets/images/hero_bg_code.jpg';
import hero_bg_1 from '../assets/images/hero_bg.jpeg';
import hero_bg_2 from '../assets/images/hero_bg_code.jpg';
import hero_bg_3 from '../assets/images/hero_bg_1.png';

const Hero = () => {
    const { t } = useTranslation();
    const { scrollY } = useScroll();

    // Parallax için önce transform, sonra spring ile yumuşatma
    const rawY = useTransform(scrollY, [0, 500], [0, -100]);
    const smoothY = useSpring(rawY, { stiffness: 80, damping: 20 });

    const images = [hero_bg_1, hero_bg_2, hero_bg_3]; // Resimlerin sıralaması
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // 5 saniyede bir yeni resme geçiş yapacak

        return () => clearInterval(interval);
    }, []);
    return (
        <section
            id="home"
            className="relative h-screen overflow-hidden flex items-center justify-center text-center px-6"
        >
            {/* Parallax Arka Plan */}
            <motion.div
                style={{
                    backgroundImage: `url(${hero_bg})`,
                    y: smoothY,
                }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
            />

            {/* Overlay */}
            <motion.div style={{ y: smoothY }} className="absolute inset-0 bg-black/60 dark:bg-black/70 z-0" />

        
            {/* İçerik */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                className="relative z-10 text-white space-y-6"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    {t('hero.title')}
                </h1>
                <p className="text-lg md:text-2xl text-white/90">
                    {t('hero.subtitle')}
                </p>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-md transition-all duration-300"
                >
                    {t('hero.cta')}
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Hero;
