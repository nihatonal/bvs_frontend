import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ServicesSection from '../components/ServicesSection';

const HomePage = () => {

    return (
        <main className='dark:bg-[#1d1d1d] h-[4048px]'>
            <Hero />
            <About />
            <ServicesSection />
        </main>
    );
};

export default HomePage;
