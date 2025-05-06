import React from 'react';
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

import './AboutAdv.css'
function AboutAdv(props) {

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const scaleBox = useTransform(scrollYProgress, [0, 1], [1.05, 1]); // ufak yakınlaşma
    const blurBox = useTransform(scrollYProgress, [0, 1], ["8px", "0px"]); // blur'dan temiz görünüme
    const xParallaxLeft = useTransform(scrollYProgress, [0, 1], [0, 140]); // sola kayar
    const xParallaxRight = useTransform(scrollYProgress, [0, 1], [0, -140]);
    return (
        <div className={`portfolio_adv ${props.className}`}>
            <div ref={sectionRef} className="example relative">
                <motion.div
                    initial={{ opacity: 0, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`block absolute`}
                    style={{
                        x: xParallaxLeft,
                        scale: scaleBox,
                        filter: blurBox
                    }}
                >
                    <div className="side -main"></div>
                    <div className="side -left"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`block absolute`}
                    style={{
                        scale: scaleBox,
                        filter: blurBox
                    }}
                >
                    <div className="side -main"></div>
                    <div className="side -left"></div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`block absolute`}
                    style={{
                        x: xParallaxRight,
                        scale: scaleBox,
                        filter: blurBox
                    }}
                >
                    <div className="side -main"></div>
                    <div className="side -left"></div>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutAdv;