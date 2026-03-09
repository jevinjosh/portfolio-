import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail, HiPaperAirplane } from 'react-icons/hi'

const socials = [
    { icon: FaGithub, href: 'https://github.com/jevinjosh', label: 'GitHub', color: '#e2e8f0' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/jevinjosh', label: 'LinkedIn', color: '#0a66c2' },
    { icon: HiMail, href: 'mailto:jevinjosh@email.com', label: 'Email', color: '#06b6d4' },
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
        setForm({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="section-padding relative">
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
                        Get In Touch
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
                        <span className="gradient-text">Contact Me</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.8 }}
                        onSubmit={handleSubmit}
                        className="lg:col-span-3 glass rounded-2xl p-8 space-y-6"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                placeholder="Your name"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-glow/50 focus:ring-1 focus:ring-purple-glow/30 transition-all duration-300"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                placeholder="you@example.com"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-glow/50 focus:ring-1 focus:ring-purple-glow/30 transition-all duration-300"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                placeholder="Write your message..."
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-glow/50 focus:ring-1 focus:ring-purple-glow/30 transition-all duration-300 resize-none"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                            style={{
                                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                                boxShadow: '0 0 30px rgba(124,58,237,0.3)',
                            }}
                        >
                            {submitted ? (
                                'Message Sent! ✓'
                            ) : (
                                <>
                                    <HiPaperAirplane className="text-lg rotate-90" />
                                    Send Message
                                </>
                            )}
                        </motion.button>
                    </motion.form>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 flex flex-col justify-center gap-6"
                    >
                        <h3 className="text-lg font-semibold text-white font-[family-name:var(--font-display)]">
                            Let's Connect
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or
                            opportunities to be part of your vision.
                        </p>

                        <div className="flex flex-col gap-4 mt-4">
                            {socials.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, x: 8 }}
                                    className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/[0.08] transition-all duration-300 group"
                                >
                                    <social.icon
                                        className="text-2xl transition-colors duration-300"
                                        style={{ color: social.color }}
                                    />
                                    <span className="text-gray-300 group-hover:text-white transition-colors">
                                        {social.label}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center mt-20 pt-8 border-t border-white/5"
                >
                    <p className="text-gray-500 text-sm">
                        © 2025 <span className="gradient-text">Jevin Josh</span>. Built with React, Three.js & ♥
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
