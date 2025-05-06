import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './UI/ThemeToggle';
import logo from '../assets/images/logo_bvs.png'
import HamburgerToggle from './UI/HamburgerToggle';
const Header = () => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setMenuOpen(false); // dil değişince menü kapansın
    };

    const menuItems = [
        { id: '', label: t('menu.home') },
        { id: 'about', label: t('menu.about') },
        { id: 'services', label: t('menu.services') },
        { id: 'portfolio', label: t('menu.portfolio') },
        { id: 'contact', label: t('menu.contact') },
    ];

    return (
        <header className="w-full px-6 py-2 flex justify-between items-center bg-white shadow-md fixed top-0 z-50">
            <div className="">
                <img className='w-12' src={logo} alt="logo-bvs-design " />

            </div>

            {/* Desktop menu */}
            <nav className="hidden md:flex space-x-6">
                {menuItems.map((item) => (
                    <a
                        key={item.id}
                        href={`/${item.id}`}
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>

            {/* Language switcher (desktop) */}
            <div className="hidden md:flex space-x-2">
                <button onClick={() => changeLanguage('tr')} className="text-sm">TR</button>
                <button onClick={() => changeLanguage('en')} className="text-sm">EN</button>
                <button onClick={() => changeLanguage('ru')} className="text-sm">RU</button>
                <ThemeToggle />
            </div>

            {/* Hamburger button */}
            {/* Hamburger button */}
            <div className="md:hidden">
                <HamburgerToggle toggle={() => setMenuOpen(!menuOpen)} isOpen={menuOpen} />
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden"
                    >
                        {menuItems.map((item) => (
                            <a
                                key={item.id}
                                href={`/${item.id}`}
                                className="text-gray-700 text-lg hover:text-blue-600"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}

                        <div className="flex space-x-4 mt-2">
                            <button onClick={() => changeLanguage('tr')} className="text-sm">TR</button>
                            <button onClick={() => changeLanguage('en')} className="text-sm">EN</button>
                            <button onClick={() => changeLanguage('ru')} className="text-sm">RU</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
