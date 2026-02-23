import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const MapSection = () => {
    return (
        <section id="venue" className="py-20 md:py-32 px-6 relative overflow-hidden paper-texture">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">

                {/* Left: Direction Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full lg:w-[45%] z-20 lg:mr-[-100px] flex flex-col justify-center"
                >
                    <div className="glass-card p-8 md:p-14 gold-border bg-white shadow-2xl relative overflow-hidden">
                        {/* Paper Texture Overlay */}
                        <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none" />

                        {/* Internal Filigree */}
                        <div className="absolute top-4 right-4 text-wedding-gold/30 opacity-60 text-2xl">❦</div>

                        <div className="relative z-10 text-center lg:text-left">
                            <span className="text-wedding-gold tracking-[0.4em] md:tracking-[0.6em] uppercase text-[9px] md:text-[10px] mb-4 block font-sanskrit font-bold">The Location</span>
                            <h2 className="text-5xl md:text-6xl font-cursive text-wedding-maroon mb-8 md:mb-10">Direction Card</h2>

                            <div className="space-y-6 md:space-y-8 font-traditional">
                                <div className="space-y-1">
                                    <h4 className="text-wedding-gold text-[10px] uppercase tracking-[0.3em] font-sanskrit font-bold">The Grand Venue</h4>
                                    <p className="text-xl md:text-2xl text-wedding-maroon font-semibold transition-colors">Laxmi Villa Garden</p>
                                </div>

                                <div className="space-y-1">
                                    <h4 className="text-wedding-gold text-[10px] uppercase tracking-[0.3em] font-sanskrit font-bold">The Address</h4>
                                    <p className="text-base md:text-lg text-wedding-maroon/70 italic leading-relaxed">
                                        Opp. Big Bazaar, University Road,<br />
                                        Vesu, Surat, Gujarat - 395007
                                    </p>
                                </div>

                                <div className="pt-8 md:pt-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 justify-center lg:justify-start">
                                    <a
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative px-8 py-3 overflow-hidden bg-wedding-maroon w-full sm:w-auto text-center"
                                    >
                                        <div className="absolute inset-0 w-0 bg-wedding-gold transition-all duration-500 ease-out group-hover:w-full opacity-20" />
                                        <div className="relative flex items-center justify-center space-x-3">
                                            <Navigation className="text-wedding-gold" size={16} />
                                            <span className="text-wedding-cream text-[10px] uppercase tracking-[0.2em] font-sanskrit">Open Navigator</span>
                                        </div>
                                    </a>

                                    <div className="flex items-center space-x-3 opacity-40">
                                        <MapPin className="text-wedding-gold" size={14} />
                                        <span className="text-[9px] uppercase tracking-widest text-wedding-maroon">Vesu, Surat</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Wax Seal Decoration */}
                        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-14 h-14 md:w-16 md:h-16 opacity-90 group-hover:scale-110 transition-transform duration-700 select-none">
                            <div className="w-full h-full rounded-full bg-wedding-maroon shadow-lg flex flex-col items-center justify-center border-2 md:border-4 border-wedding-gold/20">
                                <span className="text-wedding-gold font-cursive text-sm md:text-xl">B&P</span>
                                <span className="text-[6px] md:text-[8px] text-wedding-gold/40">❦</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Map Frame */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-[65%] h-[400px] md:h-[500px] lg:h-[700px] relative rounded-sm overflow-hidden gold-border bg-wedding-cream shadow-2xl"
                >
                    <div className="absolute inset-0 bg-wedding-maroon/5 z-10 pointer-events-none" />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.419409825313!2d72.77583767597148!3d21.135706983086918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051d9f8e4e9b7%3A0x6a0c0e7d5a5e3e2c!2sLaxmi%20Villa%20Garden!5e0!3m2!1sen!2sin!4v1709500000000!5m2!1sen!2sin"
                        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 opacity-60 hover:opacity-100"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    />

                    {/* Map Edge Ornaments */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-wedding-gold/20 z-20 pointer-events-none" />
                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-wedding-gold/20 z-20 pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
};

export default MapSection;
