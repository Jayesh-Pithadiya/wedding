import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
            caption: "The First Look",
            rotation: -3,
            size: "col-span-12 md:col-span-6 lg:col-span-7"
        },
        {
            url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
            caption: "Eternal Vows",
            rotation: 2,
            size: "col-span-12 md:col-span-6 lg:col-span-5"
        },
        {
            url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
            caption: "Our Joyful Dance",
            rotation: -2,
            size: "col-span-12 md:col-span-6 lg:col-span-4"
        },
        {
            url: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=2070&auto=format&fit=crop",
            caption: "Sacred Fire",
            rotation: 4,
            size: "col-span-12 md:col-span-6 lg:col-span-4"
        },
        {
            url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
            caption: "Traditional Colors",
            rotation: -1,
            size: "col-span-12 md:col-span-6 lg:col-span-4"
        },
        {
            url: "https://images.unsplash.com/photo-1519225495810-649728647577?q=80&w=2070&auto=format&fit=crop",
            caption: "Always Together",
            rotation: 0,
            size: "col-span-12"
        }
    ];

    return (
        <section id="gallery" className="py-20 md:py-32 px-6 bg-transparent overflow-hidden paper-texture">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-20 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-wedding-gold tracking-[0.4em] md:tracking-[0.6em] uppercase text-[9px] md:text-[10px] mb-4 block font-sanskrit font-bold">Captured Memories</span>
                        <h2 className="text-5xl md:text-7xl font-cursive text-wedding-maroon py-2">The Love Album</h2>
                        <div className="flex items-center space-x-4 md:space-x-8 mt-6">
                            <div className="w-12 md:w-20 h-px bg-wedding-gold/20" />
                            <p className="font-traditional text-wedding-gold/60 italic text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase">Moments woven into eternity</p>
                            <div className="w-12 md:w-20 h-px bg-wedding-gold/20" />
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-12 gap-6 md:gap-16 items-center">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, rotate: 0 }}
                            whileInView={{
                                opacity: 1,
                                rotate: window.innerWidth < 768 ? 0 : img.rotation // No rotation on mobile for stability
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover={{ scale: 1.02, rotate: 0, zIndex: 50 }}
                            className={`${img.size} relative group cursor-pointer transition-all duration-700`}
                        >
                            {/* Paper Print Effect */}
                            <div className="relative p-3 md:p-6 bg-white/95 gold-border shadow-[0_15px_30px_rgba(0,0,0,0.05)] group-hover:shadow-[0_45px_100px_rgba(0,0,0,0.1)] transition-shadow duration-700 overflow-hidden">
                                <div className="absolute inset-0 paper-texture opacity-20 pointer-events-none" />

                                <div className="overflow-hidden relative aspect-[4/5] md:aspect-auto">
                                    <img
                                        src={img.url}
                                        alt={img.caption}
                                        className="w-full h-64 sm:h-80 md:h-[500px] object-cover transition-all duration-1000 group-hover:scale-105 opacity-95 group-hover:opacity-100"
                                    />

                                    {/* Romantic Caption Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-wedding-cream/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-end p-6 md:p-12">
                                        <span className="text-wedding-gold/30 text-xl mb-2">❦</span>
                                        <span className="text-2xl md:text-5xl font-cursive text-wedding-maroon mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 text-center">
                                            {img.caption}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity">
                                <div className="w-6 h-6 rounded-full bg-wedding-gold/10 border border-wedding-gold/20 flex items-center justify-center shadow-sm">
                                    <div className="w-1 h-1 bg-wedding-gold/40 rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 md:mt-40 text-center px-4"
                >
                    <div className="w-20 md:w-24 h-[1px] bg-wedding-gold/20 mx-auto mb-10 md:mb-12" />
                    <p className="font-cursive text-2xl md:text-4xl text-wedding-maroon/20 leading-relaxed italic max-w-2xl mx-auto">
                        "Wait for the moments that take your breath away, for they are the heartbeat of love."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
