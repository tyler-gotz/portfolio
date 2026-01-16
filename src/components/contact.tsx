import { Leaf, Mail, MapPin, Mountain, Trophy, Zap } from "lucide-react";
import { useInView, motion } from "motion/react";
import React, { useRef } from "react";

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    { icon: Mail, label: "Email", value: "tyler.k.gotz@gmail.com" },
    { icon: MapPin, label: "Location", value: "Grafton, WI" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-teal-50 to-green-100 py-32 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="text-8xl mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🐐
          </motion.div>
          <h2 className="text-6xl md:text-7xl text-green-900 mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl text-green-900 mb-8">📬 Contact Info</h3>
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="bg-white p-6 rounded-2xl shadow-lg border-4 border-green-200 flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <motion.div
                    className="text-4xl"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <info.icon className="w-6 h-6 text-green-600" />
                  </motion.div>
                  <div>
                    <div className="text-green-600 text-sm mb-1">
                      {info.label}
                    </div>
                    <div className="text-green-900 text-lg">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-3xl shadow-xl text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="text-2xl mb-4">🌟 Why Work With This Goat?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span>
                    <Trophy />
                  </span>
                  <span>Stubborn dedication to your project's success</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>
                    <Mountain />
                  </span>
                  <span>Climb any technical mountain, no matter how steep</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>
                    <Leaf />
                  </span>
                  <span>Natural, elegant solutions that just work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>
                    <Zap />
                  </span>
                  <span>Lightning-fast turnaround times</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
