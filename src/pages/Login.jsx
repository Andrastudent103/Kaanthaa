import { motion } from 'framer-motion';
import { Hexagon, Mail, Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#6b46c1]/20 to-[#00e5ff]/20 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-[#0f0f13]/80 backdrop-blur-2xl border border-[#2a2a35] rounded-3xl p-8 shadow-2xl relative z-10"
            >
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6b46c1]/20 to-[#00e5ff]/20 border border-[#6b46c1]/50 shadow-glow mb-4 flex items-center justify-center">
                        <Hexagon className="w-8 h-8 text-[#00e5ff]" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-wide text-white mb-2">Initialize Session</h1>
                    <p className="text-[#94a3b8] text-sm text-center">Enter your developer credentials to mount the integration mapping engine.</p>
                </div>

                <form className="space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-4">
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                            <input
                                type="email"
                                placeholder="Engine Context Address"
                                defaultValue="judha@kaanthaa.io"
                                required
                                className="w-full bg-[#1a1a24] border border-[#2a2a35] text-white text-sm rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-[#00e5ff] transition-colors"
                            />
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                            <input
                                type="password"
                                placeholder="Secure Access Key"
                                defaultValue="password123"
                                required
                                className="w-full bg-[#1a1a24] border border-[#2a2a35] text-white text-sm rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-[#6b46c1] transition-colors"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded bg-[#1a1a24] border-[#2a2a35] text-[#00e5ff] focus:ring-[#00e5ff]/50" />
                            <span className="text-[#94a3b8] group-hover:text-white transition-colors tracking-wide">Maintain Link</span>
                        </label>
                        <a href="#" className="text-[#6b46c1] hover:text-[#00e5ff] transition-colors uppercase tracking-widest">Sys Override?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6b46c1] to-[#00e5ff] text-white font-bold tracking-widest uppercase shadow-glow hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                        Mount Process <ArrowRight className="w-5 h-5" />
                    </button>
                </form>

                <div className="mt-8 text-center text-xs text-[#94a3b8]">
                    Kaanthaa Architecture v2.5 | <a href="#" className="text-white hover:underline">Provision Identity</a>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
