import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'glass-strong shadow-lg shadow-purple-glow/5'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="text-2xl font-bold font-[family-name:var(--font-display)]">
                    <span className="gradient-text-animated">JJ</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm text-gray-400 hover:text-white transition-colors duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-glow to-cyan-glow group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-white text-2xl"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-strong border-t border-white/5"
                    >
                        <div className="flex flex-col items-center gap-4 py-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-gray-300 hover:text-white transition-colors text-lg"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
