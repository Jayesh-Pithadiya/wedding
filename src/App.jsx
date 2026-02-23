import React from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Ceremonies from './components/Ceremonies'
import Gallery from './components/Gallery'
import FamilySection from './components/FamilySection'
import MapSection from './components/MapSection'
import BackgroundAnimation from './components/BackgroundAnimation'
import { motion, useScroll, useSpring } from 'framer-motion'

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <HelmetProvider>
      <div className="relative min-h-screen">
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-wedding-gold via-wedding-gold/50 to-wedding-gold z-[200] origin-left shadow-[0_0_10px_rgba(212,175,55,0.5)]"
          style={{ scaleX }}
        />
        <Helmet>
          <title>Bhavik ❤️ Pooja | 04-03-2026</title>
          <meta name="description" content="Wedding invitation for Bhavik and Pooja - March 4th, 2026." />
        </Helmet>

        <BackgroundAnimation />
        <Navbar />

        <main>
          <HeroSection />
          <Ceremonies />
          <Gallery />
          <FamilySection />
          <MapSection />
        </main>

        <footer className="py-12 md:py-20 relative overflow-hidden paper-texture border-t border-wedding-gold/10">
          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

            {/* The Infinite Seal - Final Blessing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative mb-8 md:mb-12"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 md:w-32 md:h-32 border border-wedding-gold/15 rounded-full flex items-center justify-center p-2"
              >
                <div className="w-full h-full border border-wedding-gold/20 rounded-full border-dashed flex items-center justify-center p-2">
                  <div className="w-full h-full border border-wedding-gold/30 rounded-full flex flex-col items-center justify-center">
                    <span className="text-[10px] text-wedding-maroon/20">❦</span>
                  </div>
                </div>
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-wedding-maroon text-2xl md:text-3xl font-cursive filter drop-shadow-sm">B&P</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center space-x-6 md:space-x-12 mb-6 md:mb-8">
                <div className="w-8 md:w-16 h-px bg-wedding-gold/20" />
                <p className="font-sanskrit tracking-[0.3em] md:tracking-[0.5em] text-wedding-gold text-[8px] md:text-xs uppercase font-bold">September • 13 • 2026</p>
                <div className="w-8 md:w-16 h-px bg-wedding-gold/20" />
              </div>

              <p className="font-traditional text-base md:text-xl text-wedding-maroon/60 italic max-w-2xl mb-8 md:mb-12 leading-relaxed px-4 md:px-6 text-center">
                "We thank you for being a part of our eternal story. Your love is our greatest blessing."
              </p>

              <div className="flex flex-col items-center space-y-3 md:space-y-4">
                <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-wedding-gold/30 to-transparent" />
                <p className="font-sanskrit text-wedding-maroon/20 text-[7px] md:text-[8px] tracking-[0.4em] md:tracking-[0.6em] uppercase">
                  The Legacy of Love • MMXXVI
                </p>
              </div>
            </motion.div>

            {/* Perfected Developer Credit - Bottom Right */}
            <div className="w-full mt-12 md:mt-16 flex justify-end items-center border-t border-wedding-gold/5 pt-6">
              <div className="flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity duration-500">
                <span className="text-wedding-gold text-[10px]">✨</span>
                <p className="font-sanskrit text-[9px] md:text-[11px] tracking-widest text-wedding-maroon uppercase font-medium">
                  Design & Developed by : <span className="text-wedding-gold font-bold">Jayesh Pithadiya</span>
                </p>
                <span className="text-wedding-gold text-[8px]">❦</span>
              </div>
            </div>

            {/* Decorative Corner Ornaments */}
            <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 border-t border-l border-wedding-gold/10 pointer-events-none opacity-20" />
            <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 border-b border-r border-wedding-gold/10 pointer-events-none opacity-20" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-[0.01] select-none">
            <span className="text-[10rem] md:text-[15rem] font-cursive text-wedding-gold">Blessings</span>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  )
}

export default App;
