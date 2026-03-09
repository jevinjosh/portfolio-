import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { HiArrowDown, HiCode } from 'react-icons/hi'
import Scene from '../three/Scene'

export default function Hero3D() {
    return (
        <section id="home" className="relative w-full h-screen overflow-hidden">
            {/* 3D Canvas */}
            <div className="absolute inset-0">
                <Canvas
                    camera={{ position: [0, 0, 6], fov: 60 }}
                    dpr={[1, 2]}
                    gl={{ antialias: true, alpha: true }}
                >
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                </Canvas>
            </div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-transparent to-dark-900" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-900/60 via-transparent to-dark-900/60" />

            {/* Text Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <p className="text-sm md:text-base tracking-[0.3em] text-gray-400 uppercase mb-4 font-[family-name:var(--font-display)]">
                        Welcome to my portfolio
                    </p>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 font-[family-name:var(--font-display)]"
                >
                    <span className="gradient-text-animated">Jevin Josh</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="space-y-2 mb-10"
                >
                    <p className="text-lg md:text-xl text-gray-300 font-light">
                        B.Tech CSE Student @ <span className="text-cyan-glow font-medium">Kalvium</span>
                    </p>
                    <p className="text-base md:text-lg text-gray-400 font-light">
                        Aspiring Software Developer
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a href="#projects" className="btn-primary">
                        <HiCode className="text-lg" />
                        View Projects
                    </a>
                    <a href="#contact" className="btn-secondary">
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-gray-500"
                >
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <HiArrowDown className="text-lg" />
                </motion.div>
            </motion.div>
        </section>
    )
}
