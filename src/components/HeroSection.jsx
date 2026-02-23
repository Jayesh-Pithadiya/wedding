import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden paper-texture py-20 px-4">
            {/* Top Ornate Filigree */}
            <div className="absolute top-0 left-0 w-full h-32 md:h-48 opacity-20 pointer-events-none select-none">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 md:w-48 h-px bg-gradient-to-r from-transparent via-wedding-gold to-transparent" />
                <div className="absolute top-12 left-1/2 -translate-x-1/2 text-wedding-gold text-2xl md:text-3xl flex items-center justify-center">
                    <span className="mx-2">⚜️</span>
                    <span className="mx-2 text-wedding-gold/40 text-sm md:text-lg">❦</span>
                    <span className="mx-2">⚜️</span>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-center z-10 w-full max-w-5xl"
            >
                <div className="flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-wedding-gold tracking-[0.3em] md:tracking-[0.6em] uppercase text-[9px] md:text-xs mb-4 md:mb-6 font-sanskrit font-bold"
                    >
                        ।। श्री गणेशाय नमः ।।
                    </motion.span>

                    {/* Redesigned Staggered Names */}
                    <div className="relative mb-2 md:mb-4 w-full flex flex-col items-center">
                        <div className="relative py-12 md:py-24">
                            {/* Groom's Name */}
                            <motion.h1
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                                className="text-6xl sm:text-8xl md:text-[13rem] font-cursive text-wedding-maroon leading-none select-none filter drop-shadow-sm transform -translate-x-12 md:-translate-x-32"
                            >
                                Bhavik
                            </motion.h1>

                            {/* Connecting Icon / Ampersand */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ delay: 1, duration: 1.2, ease: "backOut" }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-wedding-gold text-4xl md:text-8xl z-20"
                            >
                                <span className="opacity-40">❦</span>
                            </motion.div>

                            {/* Bride's Name */}
                            <motion.h1
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                                className="text-6xl sm:text-8xl md:text-[13rem] font-cursive text-wedding-maroon leading-none select-none filter drop-shadow-sm transform translate-x-12 md:translate-x-32 mt-2 md:mt-4"
                            >
                                Pooja
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "100%" }}
                            transition={{ delay: 1.5, duration: 2 }}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 md:w-96 h-px bg-gradient-to-r from-transparent via-wedding-gold/40 to-transparent max-w-[80vw]"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="font-traditional text-sm md:text-2xl text-wedding-maroon/60 italic tracking-[0.2em] md:tracking-[0.4em] uppercase mb-8"
                    >
                        An Eternal Union of Love
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.3, duration: 1 }}
                        className="flex flex-col items-center mb-32 md:mb-48"
                    >
                        <span className="font-traditional text-lg md:text-3xl text-wedding-gold/80 italic tracking-widest uppercase mb-6">
                            Save The Date
                        </span>
                        <span className="font-sanskrit text-3xl md:text-6xl text-wedding-maroon tracking-[0.2em] font-bold">
                            04 • 03 • 2026
                        </span>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom Section: Scroll Accent */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-4 left-0 w-full bg-gradient-to-t from-wedding-cream to-transparent pt-12 pb-8 md:pb-12 px-4 md:px-12 flex flex-col items-center justify-center"
            >
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center group cursor-pointer"
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-wedding-gold mb-2 md:mb-3 font-semibold">
                        Explore Our Story
                    </span>
                    <div className="w-px h-8 md:h-12 bg-gradient-to-b from-wedding-gold/60 to-transparent" />
                </motion.div>
            </motion.div>

            {/* Mobile Corner Decorative Elements */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 w-12 h-12 md:w-24 md:h-24 border-t border-l border-wedding-gold/20 pointer-events-none" />
            <div className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-24 md:h-24 border-t border-r border-wedding-gold/20 pointer-events-none" />
        </section>
    );
};

export default HeroSection;
