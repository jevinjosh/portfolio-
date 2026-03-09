import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(false)
    const [clicking, setClicking] = useState(false)

    useEffect(() => {
        // Hide custom cursor on touch devices
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
        if (isTouchDevice) return

        const handleMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY })
            if (!visible) setVisible(true)
        }

        const handleDown = () => setClicking(true)
        const handleUp = () => setClicking(false)
        const handleLeave = () => setVisible(false)
        const handleEnter = () => setVisible(true)

        window.addEventListener('mousemove', handleMove)
        window.addEventListener('mousedown', handleDown)
        window.addEventListener('mouseup', handleUp)
        document.addEventListener('mouseleave', handleLeave)
        document.addEventListener('mouseenter', handleEnter)

        return () => {
            window.removeEventListener('mousemove', handleMove)
            window.removeEventListener('mousedown', handleDown)
            window.removeEventListener('mouseup', handleUp)
            document.removeEventListener('mouseleave', handleLeave)
            document.removeEventListener('mouseenter', handleEnter)
        }
    }, [visible])

    if (!visible) return null

    return (
        <>
            {/* Outer glow */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] mix-blend-screen"
                animate={{
                    x: pos.x - 20,
                    y: pos.y - 20,
                    scale: clicking ? 0.8 : 1,
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
                style={{
                    background:
                        'radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(6,182,212,0.1) 50%, transparent 70%)',
                }}
            />
            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
                animate={{
                    x: pos.x - 4,
                    y: pos.y - 4,
                    scale: clicking ? 0.5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                style={{ backgroundColor: '#7c3aed' }}
            />
        </>
    )
}
