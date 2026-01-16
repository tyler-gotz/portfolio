import React from 'react'
import { motion } from 'motion/react'
import { Mountain } from 'lucide-react'

const Hero: React.FC = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        projectsSection?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToConact = () => {
        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section className='min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden'>
            <div className="absolute bottom-0 left-0 right-0 h-2/3">
                <svg
                    viewBox="0 0 1200 600"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M0,600 L0,300 L200,200 L400,350 L600,100 L800,250 L1000,180 L1200,300 L1200,600 Z"
                        fill="rgba(34, 197, 94, 0.2)"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.path
                        d="M0,600 L0,400 L300,250 L600,200 L900,300 L1200,250 L1200,600 Z"
                        fill="rgba(16, 185, 129, 0.3)"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    />
                    <motion.path
                        d="M0,600 L0,500 L400,450 L800,480 L1200,450 L1200,600 Z"
                        fill="rgba(5, 150, 105, 0.4)"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    />
                </svg>
            </div>

            {[...Array(5)].map((_, index) => (
                <motion.div
                    key={`cloud-${index}`}
                    className="absolute text-4xl opacity-60"
                    style={{
                        top: `${15 + index * 12}%`,
                        left: `${10 + index * 20}%`,
                    }}
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 8 + index * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    ☁️
                </motion.div>
            ))}
            <div className='container mx-auto px-4 text-center z-10 relative'>
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="text-9xl mb-6"
                >
                    🐐
                </motion.div>
                <motion.h1
                    className="text-7xl md:text-9xl mb-6 text-green-900"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        Tyler Gotz
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mb-8"
                >
                    <p className="text-2xl md:text-3xl text-green-800 mb-2">
                        Developer Who Refuses To Follow The Herd
                    </p>
                    <div className="flex items-center justify-center gap-2 text-green-700">
                        <Mountain className="w-5 h-5" />
                        <span>Climbing to new heights, one line of code at a time</span>
                        <Mountain className="w-5 h-5" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="flex gap-6 justify-center flex-wrap"
                >
                    <motion.button
                        className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-lg"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToProjects}
                    >
                        See My Climbs
                    </motion.button>

                    <motion.button
                        className="px-8 py-4 border-2 border-green-700 text-green-700 rounded-full"
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "#15803d",
                            color: "#ffffff",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToConact}
                    >
                        Let's Graze Together
                    </motion.button>
                </motion.div>
            </div>
            <motion.div
                className="absolute bottom-20 left-10 text-3xl"
                animate={{
                    rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                🐐
            </motion.div>
            <motion.div
                className="absolute bottom-24 right-20 text-2xl"
                animate={{
                    rotate: [0, -10, 0, 10, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                🐐
            </motion.div>
        </section>
    )
}

export default Hero