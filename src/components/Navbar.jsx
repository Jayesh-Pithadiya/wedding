import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Ceremonies', href: '#ceremonies' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Family', href: '#family' },
        { name: 'Venue', href: '#venue' }
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 lg:hidden ${isScrolled
                    ? 'py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-wedding-gold/10'
                    : 'py-6 bg-transparent'
                    }`}
            >
                {/* Top Gold Line Accent */}
                <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-wedding-gold/30 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />

                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Brand Logo */}
                    <motion.a
                        href="#hero"
                        className="flex flex-col items-center group relative cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setIsMenuOpen(false);
                        }}
                    >
                        <span className={`font-cursive text-2xl md:text-3xl text-wedding-maroon transition-colors duration-500`}>
                            Bhavik & Pooja
                        </span>
                        <span className={`text-[8px] uppercase tracking-[0.4em] font-sanskrit transition-opacity duration-500 font-bold ${isScrolled ? 'opacity-70' : 'opacity-40'
                            }`}>
                            The Invitation
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-[10px] uppercase tracking-[0.3em] font-sanskrit text-wedding-maroon/60 hover:text-wedding-maroon transition-colors group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-wedding-gold transition-all duration-300 group-hover:w-full opacity-60" />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button - Styled as a gold icon */}
                    <button
                        className="md:hidden text-wedding-gold p-2 transition-transform active:scale-90"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Overlay - Improved centering and depth */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-wedding-cream/98 backdrop-blur-xl z-[150] md:hidden flex flex-col items-center justify-center p-8"
                    >
                        {/* Static Paper Texture Background */}
                        <div className="absolute inset-0 paper-texture opacity-20 pointer-events-none" />

                        {/* Close Button at top-right */}
                        <button
                            className="absolute top-8 right-8 text-wedding-maroon/40 hover:text-wedding-maroon p-2 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <X size={28} />
                        </button>

                        {/* Top Logo in Menu */}
                        <div className="mb-16 flex flex-col items-center">
                            <span className="font-cursive text-4xl text-wedding-maroon">B & P</span>
                            <div className="w-8 h-px bg-wedding-gold/30 mt-2" />
                        </div>

                        {/* Navigation Links - Clean Centering */}
                        <div className="flex flex-col items-center space-y-8 mb-12">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-4xl font-cursive text-wedding-maroon hover:text-love-ruby transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-16 opacity-30 flex flex-col items-center">
                            <p className="font-sanskrit text-[8px] tracking-[0.6em] text-wedding-maroon uppercase">
                                Bhavik & Pooja • 2026
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
