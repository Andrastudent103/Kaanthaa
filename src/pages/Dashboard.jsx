import { motion } from 'framer-motion';
import GlowOrb from '../components/dashboard/GlowOrb';
import EngineCards from '../components/dashboard/EngineCards';
import CodeTransformationBox from '../components/dashboard/CodeTransformationBox';
import Navbar from '../components/layout/Navbar';
import useUserStore from '../store/userStore';

const Dashboard = () => {
    const { user } = useUserStore();

    return (
        <div className="flex flex-col h-full">
            <Navbar />

            <div className="flex-1 overflow-y-auto px-4 sm:px-6 pb-24 sm:pb-20 pt-6 sm:pt-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center max-w-5xl mx-auto"
                >
                    <GlowOrb />

                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-[40px] font-medium tracking-tight mb-2 text-[#e2e8f0]">
                            <b>Good Morning , </b><span className="text-white font-semibold"> Kaanthaa...</span>
                        </h1>
                        <p className="text-[#94a3b8] text-[17px]">
                            How can the engine assist you today?
                        </p>
                    </div>

                    <EngineCards />

                    <CodeTransformationBox />
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
