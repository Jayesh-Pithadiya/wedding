import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Petal = ({ delay }) => {
    const randomX = useMemo(() => Math.random() * 100, []);
    const randomRotate = useMemo(() => Math.random() * 360, []);
    const randomDuration = useMemo(() => 15 + Math.random() * 25, []);
    const isHeart = useMemo(() => Math.random() > 0.8, []); // 20% hearts
    const symbol = useMemo(() => isHeart ? '❤️' : '🌸', []);

    return (
        <motion.div
            initial={{
                y: -100,
                x: `${randomX}vw`,
                rotate: 0,
                opacity: 0,
                scale: isHeart ? 0.4 : 0.8
            }}
            animate={{
                y: '110vh',
                rotate: randomRotate + 720,
                opacity: isHeart ? [0, 0.15, 0.15, 0] : [0, 0.5, 0.5, 0],
                x: [`${randomX}vw`, `${randomX + 5}vw`, `${randomX - 5}vw`, `${randomX}vw`]
            }}
            transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: delay,
                ease: 'linear',
            }}
            className="fixed pointer-events-none z-0"
            style={{
                fontSize: isHeart ? '14px' : '22px',
                filter: isHeart ? 'blur(1px)' : 'none',
                color: isHeart ? 'var(--color-love-ruby)' : 'var(--color-wedding-gold)'
            }}
        >
            {symbol}
        </motion.div>
    );
};

const Sparkle = ({ delay }) => {
    const randomX = useMemo(() => Math.random() * 100, []);
    const randomY = useMemo(() => Math.random() * 100, []);
    const randomDuration = useMemo(() => 2 + Math.random() * 3, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
            }}
            transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: delay,
                ease: 'easeInOut',
            }}
            className="fixed w-1 h-1 bg-wedding-gold rounded-full pointer-events-none z-0 blur-[0.5px]"
            style={{ left: `${randomX}vw`, top: `${randomY}vh` }}
        />
    );
};

const BackgroundAnimation = () => {
    const petals = useMemo(() => Array.from({ length: 25 }), []);
    const sparkles = useMemo(() => Array.from({ length: 30 }), []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 paper-texture">
            {/* Soft Romantic Gradient Base */}
            <div className="absolute inset-0 bg-wedding-cream" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--color-love-blush)_0%,transparent_70%)] opacity-40 -z-20" />

            {/* Ambient Mandalas */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] opacity-[0.03] rotate-12 -z-10">
                <div className="w-full h-full mandala-pattern bg-repeat opacity-40 animate-[spin_120s_linear_infinite]" />
            </div>

            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] opacity-[0.03] -rotate-12 -z-10">
                <div className="w-full h-full mandala-pattern bg-repeat opacity-40 animate-[spin_120s_linear_infinite_reverse]" />
            </div>

            {/* Falling Romance Elements */}
            {petals.map((_, i) => <Petal key={`petal-${i}`} delay={i * 1.2} />)}
            {sparkles.map((_, i) => <Sparkle key={`sparkle-${i}`} delay={i * 0.3} />)}
        </div>
    );
};

export default BackgroundAnimation;
