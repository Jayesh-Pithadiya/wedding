import React from 'react';
import { motion } from 'framer-motion';

const DecorativeCorner = ({ className }) => (
    <svg className={`absolute w-12 h-12 md:w-16 md:h-16 text-wedding-gold/30 ${className}`} viewBox="0 0 100 100">
        <path d="M0 0 L100 0 L100 2 L2 2 L2 100 L0 100 Z" fill="currentColor" />
        <circle cx="10" cy="10" r="4" fill="currentColor" />
        <path d="M20 5 L95 5" stroke="currentColor" strokeWidth="0.5" />
        <path d="M5 20 L5 95" stroke="currentColor" strokeWidth="0.5" />
    </svg>
);

const CeremonyCard = ({ title, date, time, venue, icon, animation, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`relative w-full flex ${isEven ? 'justify-start lg:justify-end' : 'justify-start'} mb-16 lg:mb-24 px-4 lg:px-0`}
        >
            {/* Timeline Dot (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="w-4 h-4 rounded-full bg-wedding-gold border-4 border-wedding-cream shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                />
            </div>

            <div className={`w-full lg:w-[45%] group`}>
                <div className="glass-card p-6 md:p-10 gold-border bg-white/95 shadow-2xl relative overflow-hidden flex flex-col items-center text-center transition-all duration-700 hover:-translate-y-2">
                    {/* Paper Texture Overlay */}
                    <div className="absolute inset-0 paper-texture opacity-40 pointer-events-none" />

                    {/* Decorative Corners */}
                    <DecorativeCorner className="top-2 left-2" />
                    <DecorativeCorner className="bottom-2 right-2 rotate-180" />

                    {/* Content */}
                    <div className="relative z-10 w-full flex flex-col items-center">
                        <motion.span
                            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                            className="text-5xl md:text-6xl mb-6 block filter drop-shadow-md"
                        >
                            {icon}
                        </motion.span>

                        <h3 className="text-3xl md:text-5xl font-cursive text-wedding-maroon mb-4 tracking-wide">
                            {title}
                        </h3>

                        {/* Ornate Divider */}
                        <div className="flex items-center justify-center space-x-4 mb-6 w-full opacity-60">
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-wedding-gold to-transparent" />
                            <div className="text-love-ruby text-lg italic">❦</div>
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-wedding-gold to-transparent" />
                        </div>

                        <div className="space-y-6 font-traditional w-full">
                            <div className="space-y-3">
                                <span className="text-wedding-gold text-[10px] md:text-xs uppercase tracking-[0.5em] block font-sanskrit font-black opacity-80">
                                    The Celebration
                                </span>
                                <p className="text-xl md:text-2xl text-wedding-maroon/90 font-bold tracking-tight">
                                    {date}
                                </p>
                                <div className="inline-block px-4 py-1 border border-wedding-gold/20 rounded-full bg-wedding-gold/5">
                                    <p className="text-love-ruby italic text-sm md:text-lg font-medium">
                                        {time}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3 pt-4">
                                <span className="text-wedding-gold text-[10px] md:text-xs uppercase tracking-[0.5em] block font-sanskrit font-black opacity-80">
                                    The Sacred Venue
                                </span>
                                <div className="relative px-6 py-4">
                                    <div className="absolute inset-0 bg-wedding-maroon/[0.02] rounded-lg -rotate-1" />
                                    <p className="relative text-sm md:text-lg leading-relaxed text-wedding-maroon/80 max-w-xs mx-auto italic font-medium">
                                        {venue}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {animation && (
                            <div className="mt-8 opacity-40 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110">
                                {animation}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Ceremonies = () => {
    const events = [
        {
            title: "Haldi Ceremony",
            date: "September 12, 2026",
            time: "10:00 AM",
            venue: "Shree Swaminarayan Mandir, Wedding Hall, Surat",
            icon: "🌼",
            animation: (
                <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl"
                    />
                    <span className="relative z-10 text-3xl">☀️</span>
                </div>
            )
        },
        {
            title: "Jaan Prasthan",
            date: "September 13, 2026",
            time: "08:00 AM",
            venue: "Groom's Residence, Vesu, Surat",
            icon: "🚩",
            animation: (
                <div className="flex space-x-4 justify-center items-center">
                    <motion.span animate={{ rotate: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 1 }} className="text-3xl">🥁</motion.span>
                    <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-3xl">🎺</motion.span>
                </div>
            )
        },
        {
            title: "Mandap Muhurat",
            date: "September 13, 2026",
            time: "11:30 AM",
            venue: "Laxmi Villa Garden, Dumas Road, Surat",
            icon: "🔥",
            animation: (
                <div className="flex flex-col items-center">
                    <motion.div
                        animate={{ height: [12, 24, 12], opacity: [0.3, 0.8, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-4 bg-gradient-to-t from-orange-400/30 to-transparent rounded-t-full blur-sm"
                    />
                    <div className="w-8 h-1 bg-wedding-maroon/20 rounded-full mt-1" />
                </div>
            )
        },
        {
            title: "Wedding Lunch",
            date: "September 13, 2026",
            time: "01:00 PM",
            venue: "Heritage Banquet, Laxmi Villa, Surat",
            icon: "🍽️",
            animation: (
                <div className="relative flex justify-center">
                    <div className="w-12 h-12 border-2 border-wedding-gold/10 rounded-full flex items-center justify-center">
                        <motion.div
                            animate={{ scale: [0.8, 1, 0.8] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="w-8 h-8 border-2 border-wedding-gold/20 rounded-full"
                        />
                    </div>
                </div>
            )
        },
        {
            title: "Sanje Dandiya Raas",
            date: "September 13, 2026",
            time: "07:00 PM onwards",
            venue: "The Great Lawn, Laxmi Villa, Surat",
            icon: "💃",
            animation: (
                <div className="flex space-x-6 justify-center">
                    <motion.div animate={{ rotate: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-12 bg-gradient-to-b from-wedding-gold/40 to-transparent rounded-full" />
                    <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-12 bg-gradient-to-b from-wedding-gold/40 to-transparent rounded-full" />
                </div>
            )
        }
    ];

    return (
        <section id="ceremonies" className="py-24 md:py-40 px-4 max-w-7xl mx-auto relative overflow-hidden paper-texture">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] flex justify-center items-center overflow-hidden">
                <div className="text-[40rem] font-cursive text-wedding-gold -rotate-12 select-none">Ceremony</div>
            </div>

            <div className="text-center mb-24 md:mb-32 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="flex flex-col items-center"
                >
                    <span className="text-wedding-gold tracking-[0.5em] md:tracking-[0.8em] uppercase text-[10px] md:text-xs mb-6 font-sanskrit font-black drop-shadow-sm">
                        Eternal Unions & Sacred Vows
                    </span>
                    <h2 className="text-6xl md:text-8xl font-cursive text-wedding-maroon py-2 drop-shadow-md">
                        Sacred Ceremonies
                    </h2>

                    <div className="flex items-center space-x-6 md:space-x-12 mt-10">
                        <div className="w-16 md:w-32 h-px bg-gradient-to-r from-transparent via-wedding-gold/40 to-transparent" />
                        <div className="text-love-ruby text-2xl md:text-4xl">❦</div>
                        <div className="w-16 md:w-32 h-px bg-gradient-to-l from-transparent via-wedding-gold/40 to-transparent" />
                    </div>
                </motion.div>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Central Timeline Line (Desktop) */}
                <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-wedding-gold/20 to-transparent transform -translate-x-1/2" />

                {/* Timeline Line (Mobile) */}
                <div className="lg:hidden absolute left-4 top-10 bottom-10 w-px bg-wedding-gold/20" />

                <div className="flex flex-col relative z-10">
                    {events.map((event, index) => (
                        <CeremonyCard key={index} {...event} index={index} />
                    ))}
                </div>
            </div>

            {/* Bottom Decoration */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-20 md:mt-40 flex flex-col items-center justify-center space-y-6 opacity-30 select-none pointer-events-none"
            >
                <div className="text-love-ruby text-4xl">❦</div>
                <div className="text-5xl md:text-9xl font-cursive text-wedding-gold text-center leading-none">
                    Together Forever
                </div>
                <div className="flex items-center space-x-4">
                    <div className="w-8 md:w-16 h-px bg-wedding-gold/40" />
                    <span className="font-sanskrit text-xs tracking-widest text-wedding-gold">MANDAP MUHURAT</span>
                    <div className="w-8 md:w-16 h-px bg-wedding-gold/40" />
                </div>
            </motion.div>
        </section>
    );
};

export default Ceremonies;
