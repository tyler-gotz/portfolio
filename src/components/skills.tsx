import { useInView, motion } from 'motion/react'
import React, { useRef } from 'react'

const Skills: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const skills = [
        { name: "React (Angular experience)" },
        { name: "TypeScript" },
        { name: "Backend APIs (Node.js)" },
        { name: "Relational Databases (MySQL, PostgreSQL)" },
        { name: "NoSQL Databases (MongoDB, DynamoDB)" },
        { name: "Architecture & Delivery" },
    ]

    const traits = [
        "Mountain Climber Mentality",
        "Stubborn Problem Solver",
        "Natural Code Writer",
        "Lightning Fast Learner",
        "Focused & Determined",
        "Always Growing",
    ];

    return (
        <section
            ref={ref}
            className='min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50 py-32 px-4 relative overflow-hidden'
        >
            <div
                className='container mx-auto max-w-6xl relative z-10'
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className='text-center mb-20'
                >
                    <div className='text-7xl mb-6'>🎯</div>
                    <h2 className='text-6xl md:text-7xl text-green-900 mb-6'>
                        Goat{" "}
                        <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            Skills
                        </span>
                    </h2>
                    <p className='text-xl text-green-800 max-w-3xl mx-auto'>
                        These aren't just skills - they're survivial tools for climbing the steepest mountains in tech. Each one earned through stubborn practice and determination. 🐐
                    </p>
                </motion.div>
                <div className='grid md:grid-cols-2 gap-12 mb-10'>
                    <div>
                        <h3 className='text-3xl text-green-900 mb-8 flex items-center gap-3'>
                            <span>⚡</span> Technical Arsenal
                        </h3>
                        <div className='space-y-4'>
                            {
                                skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0, rotate: -10 }}
                                        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -10 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                            type: "spring",
                                            stiffness: 150,
                                        }}
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                        className="bg-gradient-to-r from-green-500 to-emerald-600 p-5 rounded-2xl shadow-lg text-white text-lg cursor-default"
                                    >
                                        {skill.name}
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl text-green-900 mb-8 flex items-center gap-3'>
                            <span>🐐</span> Goat Traits
                        </h3>
                        <div className='space-y-4'>
                            {
                                traits.map((trait, index) => (
                                    <motion.div
                                        key={trait}
                                        initial={{ opacity: 0, scale: 0, rotate: -10 }}
                                        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -10 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.5 + index * 0.1,
                                            type: "spring",
                                            stiffness: 150,
                                        }}
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                        className="bg-gradient-to-r from-green-500 to-emerald-600 p-5 rounded-2xl shadow-lg text-white text-lg cursor-default"
                                    >
                                        {trait}
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mt-8 bg-white p-8 rounded-3xl shadow-xl border-4 border-green-300 relative overflow-hidden"
                >
                    <motion.div
                        className="absolute -right-10 -bottom-10 text-[150px] opacity-10"
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        🐐
                    </motion.div>
                    <h4 className="text-2xl text-green-900 mb-4 relative z-10">
                        Always Learning
                    </h4>
                    <p className="text-green-700 relative z-10">
                        Like a goat finding new paths up the mountain, I'm constantly exploring new
                        technologies, frameworks, and approaches. Currently mastering React Native/Expo and AI
                        while keeping my hooves sharp on the classics!
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills