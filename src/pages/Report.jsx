import { BarChart, CheckCircle2, AlertTriangle, Info, Zap, Shield, FileCode2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useEngineStore from '../store/engineStore';

const Report = () => {
    const { report } = useEngineStore();

    if (!report) {
        return (
            <div className="p-8 max-w-5xl mx-auto h-full flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#6b46c1] to-[#00e5ff] flex items-center justify-center mb-6 shadow-glow">
                    <div className="w-16 h-16 rounded-full bg-[#0a0a0c] flex items-center justify-center">
                        <BarChart className="w-8 h-8 text-[#94a3b8]" />
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">No Report Available</h2>
                <p className="text-[#94a3b8] mb-8 max-w-md">Run a mapping transformation in the Translator engine first to generate a semantic audit report.</p>
                <Link to="/translate" className="px-6 py-3 rounded-full bg-[#1a1a24] border border-[#2a2a35] text-white hover:border-[#6b46c1] hover:shadow-glow-primary transition-all">
                    Go to Translator
                </Link>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-5xl mx-auto h-full flex flex-col">
            <header className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-3 text-white">
                        <BarChart className="w-6 h-6 text-[#6b46c1]" />
                        Engine Report & Audit
                    </h1>
                    <p className="text-[#94a3b8] text-sm mt-1">Detailed analysis of the mapping translation.</p>
                </div>
                <div className="flex items-center gap-2 bg-[#1a1a24] border border-[#2a2a35] px-4 py-2 rounded-full shadow-glow-primary">
                    <Zap className="w-4 h-4 text-[#00e5ff]" />
                    <span className="text-xs font-bold text-white tracking-widest uppercase">Score: {report.performanceScore}</span>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-[#0f0f13]/80 backdrop-blur-xl p-5 rounded-3xl border border-[#2a2a35] border-t-4 border-t-[#00e5ff] hover:shadow-glow transition-all duration-300"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[#94a3b8] text-xs uppercase font-bold tracking-widest">Optimization</h3>
                        <Zap className="w-4 h-4 text-[#00e5ff]" />
                    </div>
                    <p className="text-sm font-semibold text-white tracking-tight leading-relaxed">{report.optimization}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#0f0f13]/80 backdrop-blur-xl p-5 rounded-3xl border border-[#2a2a35] border-t-4 border-t-[#6b46c1] hover:shadow-glow-primary transition-all duration-300"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[#94a3b8] text-xs uppercase font-bold tracking-widest">Memory</h3>
                        <Shield className="w-4 h-4 text-[#6b46c1]" />
                    </div>
                    <p className="text-sm font-semibold text-white tracking-tight leading-relaxed">{report.memory}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-[#0f0f13]/80 backdrop-blur-xl p-5 rounded-3xl border border-[#2a2a35] border-t-4 border-t-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[#94a3b8] text-xs uppercase font-bold tracking-widest">Exceptions</h3>
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                    </div>
                    <p className="text-sm font-semibold text-white tracking-tight leading-relaxed">{report.exceptions}</p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-[#0f0f13]/80 backdrop-blur-xl rounded-3xl border border-[#2a2a35] flex flex-col overflow-hidden hover:border-[#6b46c1]/50 transition-colors duration-300"
                >
                    <div className="p-4 border-b border-[#2a2a35] bg-[#1a1a24]/50 flex items-center gap-3">
                        <FileCode2 className="w-5 h-5 text-[#94a3b8]" />
                        <h2 className="text-sm font-bold text-white uppercase tracking-widest">Semantic Audit</h2>
                    </div>
                    <div className="p-6 space-y-4 overflow-y-auto">
                        {report.semanticAudit && report.semanticAudit.map((auditItem, idx) => (
                            <div key={idx} className="flex gap-4 items-start group">
                                <div className="bg-[#1a1a24] p-2 rounded-xl border border-[#2a2a35] group-hover:border-[#00e5ff] transition-colors mt-0.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00e5ff]" />
                                </div>
                                <p className="text-sm text-[#e2e8f0] leading-relaxed flex-1 pt-1 break-words">{auditItem}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-[#0f0f13]/80 backdrop-blur-xl rounded-3xl border border-[#2a2a35] flex flex-col overflow-hidden hover:border-[#00e5ff]/50 transition-colors duration-300"
                >
                    <div className="p-4 border-b border-[#2a2a35] bg-[#1a1a24]/50 flex items-center gap-3">
                        <Clock className="w-5 h-5 text-[#00e5ff]" />
                        <h2 className="text-sm font-bold text-white uppercase tracking-widest">Execution Environment</h2>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-center gap-6">
                        <div className="flex items-center justify-between border-b border-[#2a2a35] pb-4">
                            <span className="text-sm text-[#94a3b8] font-medium">Data Transformation</span>
                            <span className="text-sm text-white font-bold bg-[#1a1a24] px-3 py-1 rounded-lg border border-[#2a2a35]">Isolated Core</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-[#2a2a35] pb-4">
                            <span className="text-sm text-[#94a3b8] font-medium">Rule-Set</span>
                            <span className="text-sm text-[#00e5ff] font-bold bg-[#00e5ff]/10 px-3 py-1 rounded-lg">v2.5 Hybrid</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-[#94a3b8] font-medium">Status</span>
                            <span className="text-sm text-[#34d399] font-bold flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
                                Transpiled Successfully
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Report;
