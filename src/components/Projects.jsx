import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const projects = [
    {
        title: 'Word Race',
        subtitle: 'Multiplayer Typing Game',
        description:
            'A real-time multiplayer typing game built with React. Compete with friends in fast-paced word races and improve your typing speed.',
        tags: ['React', 'Real-time', 'Multiplayer'],
        gradient: 'from-purple-500/20 to-indigo-500/20',
        borderColor: 'rgba(124, 58, 237, 0.3)',
        github: '#',
        demo: '#',
    },
    {
        title: 'Pocket Chess',
        subtitle: 'Puzzle Game',
        description:
            'A chess puzzle game built with HTML, CSS, and JavaScript. Solve strategic puzzles to sharpen your chess skills.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        gradient: 'from-cyan-500/20 to-teal-500/20',
        borderColor: 'rgba(6, 182, 212, 0.3)',
        github: '#',
        demo: '#',
    },
    {
        title: 'Sliding Puzzle',
        subtitle: 'Puzzle Game',
        description:
            'A 3×3 and 4×4 sliding puzzle game with smooth animations. Challenge yourself to solve the puzzle in the fewest moves.',
        tags: ['JavaScript', 'CSS Animations', 'Logic'],
        gradient: 'from-pink-500/20 to-rose-500/20',
        borderColor: 'rgba(236, 72, 153, 0.3)',
        github: '#',
        demo: '#',
    },
]

function ProjectCard({ project, index }) {
    const cardRef = useRef(null)
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)
    const [glarePos, setGlarePos] = useState({ x: 50, y: 50 })

    const handleMouseMove = (e) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotX = ((y - centerY) / centerY) * -8
        const rotY = ((x - centerX) / centerX) * 8
        setRotateX(rotX)
        setRotateY(rotY)
        setGlarePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 })
    }

    const handleMouseLeave = () => {
        setRotateX(0)
        setRotateY(0)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="tilt-card group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    border: `1px solid ${project.borderColor}`,
                }}
            >
                {/* Card background */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`}
                />
                <div className="absolute inset-0 glass" />

                {/* Glare effect */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
                    }}
                />

                <div className="relative z-10 p-8">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-1 font-[family-name:var(--font-display)]">
                        {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">{project.subtitle}</p>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                        <a
                            href={project.github}
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            <FaGithub /> GitHub
                        </a>
                        <a
                            href={project.demo}
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-glow transition-colors"
                        >
                            <HiExternalLink /> Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function Projects() {
    return (
        <section id="projects" className="section-padding relative">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900 pointer-events-none" />

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
                        My Work
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
                        <span className="gradient-text">Featured Projects</span>
                    </h2>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
