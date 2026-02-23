import React from 'react';
import { motion } from 'framer-motion';

const MarigoldPetal = ({ index }) => {
    const randomX = Math.random() * 100;
    const randomDelay = Math.random() * 5;
    const randomDuration = 10 + Math.random() * 10;
    const randomRotate = Math.random() * 360;

    return (
        <motion.div
            initial={{ y: -20, x: `${randomX}%`, opacity: 0, rotate: 0 }}
            animate={{
                y: "110vh",
                x: `${randomX + (Math.random() * 20 - 10)}%`,
                opacity: [0, 0.6, 0.6, 0],
                rotate: randomRotate + 360
            }}
            transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "linear"
            }}
            className="absolute pointer-events-none z-0"
        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0C12 5 18 8 18 10C18 12 15 18 10 18C5 18 2 12 2 10C2 8 8 5 10 0Z" fill="#FFD700" opacity="0.4" />
                <path d="M10 2C11.5 6 16 8 16 10C16 11.5 14 16 10 16C6 16 4 11.5 4 10C4 8 8.5 6 10 2Z" fill="#FFA500" opacity="0.6" />
            </svg>
        </motion.div>
    );
};

const ArchedFiligree = ({ className }) => (
    <svg className={`absolute w-full h-full text-wedding-gold/20 pointer-events-none ${className}`} viewBox="0 0 400 600" fill="none">
        <path d="M20 200 Q20 20 200 20 Q380 20 380 200" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M30 200 Q30 35 200 35 Q370 35 370 200" stroke="currentColor" strokeWidth="0.5" fill="none" />
        {/* Filigree Details */}
        <circle cx="200" cy="20" r="3" fill="currentColor" opacity="0.5" />
        <path d="M180 20 Q200 5 220 20" stroke="currentColor" strokeWidth="1" />
        <path d="M20 180 Q10 200 20 220" stroke="currentColor" strokeWidth="1" />
        <path d="M380 180 Q390 200 380 220" stroke="currentColor" strokeWidth="1" />
    </svg>
);

const FamilySection = () => {
    const familyData = [
        {
            title: "The Pillars of Our Lineage",
            category: "Great Grandparents",
            members: ["Late Shrimati Kamlaben & Late Shri Popatbhai Pithadiya"],
            blessing: "Forever in our hearts, guiding us with your eternal love."
        },
        {
            title: "Wisdom of Generations",
            category: "Grandparents",
            members: ["Late Shrimati Shantaben & Shri Dayabhai Pithadiya"],
            blessing: "Your wisdom is our greatest inheritance, your love our foundation."
        },
        {
            title: "The Heart of Our Home",
            category: "Parents",
            members: ["Shrimati Daxaben & Shri Kishorbhai Pithadiya"],
            blessing: "The pillars of our strength and the source of our deepest joy."
        },
        {
            title: "Roots and Branches",
            category: "Family",
            members: ["Priyank Pithadiya", "Dhara & Pritesh Pithadiya"],
            blessing: "Growing together in love, bound by the strings of family."
        }
    ];

    return (
        <section id="family" className="py-24 md:py-40 px-6 relative overflow-hidden paper-texture bg-wedding-cream/50">
            {/* Animated Petals Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                {[...Array(12)].map((_, i) => (
                    <MarigoldPetal key={i} index={i} />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="mb-16 md:mb-28 flex flex-col items-center"
                >
                    <span className="text-wedding-gold tracking-[0.6em] md:tracking-[0.8em] uppercase text-[10px] md:text-xs mb-6 block font-sanskrit font-black drop-shadow-sm">
                        Honoring Our Roots
                    </span>
                    <h2 className="text-6xl md:text-8xl font-cursive text-wedding-maroon py-2 drop-shadow-md">
                        Ancestral Blessings
                    </h2>

                    <div className="flex items-center space-x-6 md:space-x-12 mt-10">
                        <div className="w-16 md:w-32 h-px bg-gradient-to-r from-transparent via-wedding-gold/40 to-transparent" />
                        <div className="text-love-ruby text-2xl md:text-4xl italic">❦</div>
                        <div className="w-16 md:w-32 h-px bg-gradient-to-l from-transparent via-wedding-gold/40 to-transparent" />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 px-4 md:px-0">
                    {familyData.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.2, duration: 1.2, ease: "easeOut" }}
                            className="relative flex flex-col items-center group w-full"
                        >
                            {/* Card Aura Glow */}
                            <div className="absolute inset-0 bg-wedding-gold/5 blur-[80px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000" />

                            <div className="w-full max-w-xl glass-card p-10 md:p-14 pt-20 md:pt-28 rounded-t-[8rem] md:rounded-t-[12rem] gold-border bg-white/95 shadow-[0_30px_80px_rgba(74,4,4,0.08)] relative overflow-hidden transition-all duration-700 hover:shadow-[0_50px_100px_rgba(74,4,4,0.15)] hover:-translate-y-3">
                                {/* Paper Texture */}
                                <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none" />

                                {/* Arched Filigree */}
                                <ArchedFiligree className="top-0 left-0 w-full h-full opacity-40 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative z-10 flex flex-col items-center">
                                    <span className="text-wedding-gold text-[10px] md:text-xs uppercase tracking-[0.4em] font-sanskrit mb-6 font-black opacity-80 block">
                                        {group.title}
                                    </span>

                                    <div className="w-12 h-12 md:w-16 md:h-16 border border-wedding-gold/20 rounded-full flex items-center justify-center mb-8 md:mb-10 bg-white/50 backdrop-blur-sm group-hover:border-wedding-gold/60 transition-colors duration-500">
                                        <span className="text-xl md:text-2xl text-love-ruby drop-shadow-sm">❦</span>
                                    </div>

                                    <h4 className="text-wedding-maroon/40 text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-4 font-sanskrit font-bold">
                                        {group.category}
                                    </h4>

                                    <div className="space-y-4 md:space-y-6 mb-10 md:mb-12">
                                        {group.members.map((member, idx) => (
                                            <p key={idx} className="text-2xl md:text-4xl font-traditional text-wedding-maroon group-hover:text-love-ruby transition-colors duration-500 drop-shadow-sm leading-tight">
                                                {member}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-wedding-gold/30 to-transparent mb-8 md:mb-10" />

                                    <div className="relative px-6 py-4">
                                        <div className="absolute inset-0 bg-wedding-maroon/[0.02] rounded-lg -rotate-1" />
                                        <p className="relative text-wedding-maroon/70 font-traditional italic text-base md:text-xl px-2 md:px-4 leading-relaxed max-w-sm font-medium">
                                            "{group.blessing}"
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Corner Accents */}
                                <div className="absolute bottom-4 left-4 text-[10px] text-wedding-gold/20 font-sanskrit">PITHADIYA</div>
                                <div className="absolute bottom-4 right-4 text-[10px] text-wedding-gold/20 font-sanskrit">PARIVAR</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Legacy Text Decor */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-28 md:mt-48 flex flex-col items-center space-y-6 opacity-30 select-none pointer-events-none"
                >
                    <div className="text-love-ruby text-4xl">❦</div>
                    <div className="text-6xl md:text-[12rem] font-cursive text-wedding-gold leading-none">
                        Legacy of Love
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FamilySection;
