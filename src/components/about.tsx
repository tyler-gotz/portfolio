import { Heart, Leaf, Mountain, Zap } from 'lucide-react';
import { useInView, motion } from 'motion/react';
import React, { useRef } from 'react'

const About: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const traits = [
        {
            icon: Mountain,
            title: "Climb High",
            description: "Like a mountain goat, I tackle the steepest challenges with confidence and agility.",
        },
        {
            icon: Leaf,
            title: "Natural Grace",
            description: "Elegant solutions that feel organic and flow naturally, just like nature intended.",
        },
        {
            icon: Heart,
            title: "Stubborn (in a good way)",
            description: "Once I commit to a project, I won't stop until it's perfect. Goat-level determination.",
        },
        {
            icon: Zap,
            title: "Sure-Footed",
            description: "Navigate complex codebases with the precision of a goat on a cliff edge.",
        },
    ];

    const achievements = [
        { number: "15+", label: "Mountains Climbed (Projects)" },
        { number: "10", label: "Years Being Stubborn" },
        { number: "5+", label: "Happy Herds (Clients)" },
    ];

    return (
        <section
            ref={ref}
            className='min-h-screen bg-gradient-to-b from-teal-50 to-green-50 py-32 px-4 relative overflow-hidden'
        >
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-200/50 to-transparent" />
            <div
                className='container mx-auto max-w-7xl relative z-10'
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className='text-center mb-20'
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        className="text-8xl mb-6"
                    >
                        🐐
                    </motion.div>
                    <h2 className="text-6xl md:text-7xl text-green-900 mb-6">
                        About This{" "}
                        <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            Legendary Goat
                        </span>
                    </h2>
                    <p className="text-xl text-green-800 max-w-3xl mx-auto">
                        I'm not your average developer. Like a mountain goat, I thrive in challenging terrain
                        where others fear to tread. I bring creativity, determination, and a unique perspective
                        to every project.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {traits.map((trait, index) => (
                        <motion.div
                            key={trait.title}
                            initial={{ opacity: 0, y: 50, rotate: -10 }}
                            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 50, rotate: -10 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100,
                            }}
                            whileHover={{ y: -10, rotate: 2 }}
                            className="bg-white p-8 rounded-3xl shadow-lg border-4 border-green-200"
                        >
                            <motion.div
                                className="text-5xl mb-4"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <trait.icon className="w-12 h-12 text-green-600" />
                            </motion.div>
                            <h3 className="text-2xl text-green-900 mb-3">{trait.title}</h3>
                            <p className="text-green-700">{trait.description}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.label}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.5 + index * 0.1,
                                type: "spring",
                                stiffness: 200,
                            }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-2xl text-center text-white shadow-xl"
                        >
                            <div className="text-5xl mb-3">{achievement.number}</div>
                            <div className="text-sm opacity-90">{achievement.label}</div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="bg-white p-12 rounded-3xl shadow-xl border-4 border-green-300 relative overflow-hidden"
                >
                    <motion.div
                        className="absolute -right-20 -top-20 text-[200px] opacity-10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        🐐
                    </motion.div>
                    <div className="relative z-10">
                        <h3 className="text-3xl text-green-900 mb-6">My Philosophy</h3>
                        <p className="text-xl text-green-800 italic leading-relaxed">
                            "Why follow the beaten path when you can climb your own mountain? I believe in
                            finding creative solutions, taking risks, and never backing down from a challenge.
                            Like a goat grazing on impossible cliffs, I make the impossible look easy."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About