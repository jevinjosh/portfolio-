import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'

const educationData = [
    {
        institution: 'Kalvium',
        degree: 'B.Tech Computer Science Engineering',
        description:
            'Pursuing a B.Tech in CSE with a focus on software development, data structures, algorithms, and modern web technologies.',
        color: '#7c3aed',
    },
]

export default function Education() {
    return (
        <section id="education" className="section-padding relative">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm tracking-[0.3em] text-purple-glow uppercase mb-3 font-[family-name:var(--font-display)]">
                        Education
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
                        <span className="gradient-text">My Journey</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-glow/50 via-cyan-glow/30 to-transparent" />

                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative flex items-start gap-8 mb-12"
                        >
                            {/* Timeline node */}
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                                <div className="timeline-node flex items-center justify-center w-12 h-12 rounded-full">
                                    <HiAcademicCap className="text-white text-lg" />
                                </div>
                            </div>

                            {/* Content card — positioned to the right on mobile, alternating on desktop */}
                            <div
                                className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                                    }`}
                            >
                                <div className="glass rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-400">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div
                                            className="w-3 h-3 rounded-full"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
                                            {item.institution}
                                        </h3>
                                    </div>
                                    <p className="text-cyan-glow font-medium mb-3 text-sm">
                                        {item.degree}
                                    </p>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
