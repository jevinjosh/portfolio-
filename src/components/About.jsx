import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import TechCube from '../three/TechCube'
import Lights from '../three/Lights'

const skills = [
    { name: 'Java', color: '#f89820' },
    { name: 'JavaScript', color: '#f7df1e' },
    { name: 'React', color: '#61dafb' },
    { name: 'MongoDB', color: '#4db33d' },
    { name: 'HTML', color: '#e34f26' },
    { name: 'CSS', color: '#264de4' },
    { name: 'DSA', color: '#7c3aed' },
]

function SkillBadge({ name, color, index }) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{
                scale: 1.1,
                boxShadow: `0 0 25px ${color}40, 0 0 50px ${color}20`,
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium cursor-default transition-all duration-300"
            style={{ borderColor: `${color}30` }}
        >
            <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
            />
            {name}
        </motion.span>
    )
}

export default function About() {
    return (
        <section id="about" className="section-padding relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm tracking-[0.3em] text-purple-glow uppercase mb-3 font-[family-name:var(--font-display)]">
                        Get to know me
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
                        <span className="gradient-text">About Me</span>
                    </h2>
                </motion.div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* 3D Cube */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8 }}
                        className="h-[350px] md:h-[450px] w-full"
                    >
                        <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }} dpr={[1, 2]}>
                            <Suspense fallback={null}>
                                <Lights />
                                <TechCube />
                            </Suspense>
                        </Canvas>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Hi, I'm{' '}
                            <span className="text-white font-semibold">Jevin Josh</span>, a
                            Computer Science student at{' '}
                            <span className="text-cyan-glow font-medium">Kalvium</span> who
                            enjoys building modern web applications, solving coding problems,
                            and exploring new technologies.
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                            I'm passionate about creating intuitive user experiences and
                            writing clean, efficient code. I love turning ideas into reality
                            through software and am always eager to learn new frameworks and
                            tools.
                        </p>

                        {/* Skills */}
                        <div className="pt-4">
                            <h3 className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4 font-[family-name:var(--font-display)]">
                                Technologies & Skills
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, i) => (
                                    <SkillBadge key={skill.name} {...skill} index={i} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
