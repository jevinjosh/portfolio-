import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ isLoading }) {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
                    style={{
                        background: 'linear-gradient(135deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%)',
                    }}
                >
                    {/* Rotating sphere */}
                    <div className="relative w-24 h-24 mb-8">
                        <div
                            className="absolute inset-0 rounded-full animate-spin-slow"
                            style={{
                                border: '2px solid transparent',
                                borderTopColor: '#7c3aed',
                                borderRightColor: '#06b6d4',
                            }}
                        />
                        <div
                            className="absolute inset-2 rounded-full animate-spin-slow"
                            style={{
                                border: '2px solid transparent',
                                borderBottomColor: '#ec4899',
                                borderLeftColor: '#7c3aed',
                                animationDirection: 'reverse',
                                animationDuration: '2s',
                            }}
                        />
                        <div
                            className="absolute inset-4 rounded-full animate-spin-slow"
                            style={{
                                border: '2px solid transparent',
                                borderTopColor: '#06b6d4',
                                animationDuration: '1.5s',
                            }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-glow to-cyan-glow" />
                        </div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-gray-400 text-sm tracking-[0.3em] uppercase font-[family-name:var(--font-display)]"
                    >
                        Loading Portfolio...
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
