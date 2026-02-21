import { motion } from 'framer-motion';

const GlowOrb = () => {
    return (
        <div className="flex justify-center mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6b46c1] to-[#60a5fa] blur-[100px] opacity-30 rounded-full w-[200px] h-[200px] mx-auto z-0" />
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                        "0 0 40px 10px rgba(107, 70, 193, 0.4)",
                        "0 0 60px 20px rgba(96, 165, 250, 0.6)",
                        "0 0 40px 10px rgba(107, 70, 193, 0.4)"
                    ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#6b46c1] via-[#8b5cf6] to-[#93c5fd] relative z-10"
            />
        </div>
    );
};

export default GlowOrb;
