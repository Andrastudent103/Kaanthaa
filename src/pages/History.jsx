import { Clock, Code2, Copy, Trash2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useEngineStore from '../store/engineStore';

const History = () => {
    const { history } = useEngineStore();

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
    };

    if (!history || history.length === 0) {
        return (
            <div className="p-8 max-w-5xl mx-auto h-full flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#6b46c1] to-[#00e5ff] flex items-center justify-center mb-6 shadow-glow">
                    <div className="w-16 h-16 rounded-full bg-[#0a0a0c] flex items-center justify-center">
                        <Clock className="w-8 h-8 text-[#94a3b8]" />
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">No History Yet</h2>
                <p className="text-[#94a3b8] mb-8 max-w-md">Transform some code in the Translator engine and your run history will be recorded securely here.</p>
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
                        <Clock className="w-6 h-6 text-[#6b46c1]" />
                        Engine Execution Logs
                    </h1>
                    <p className="text-[#94a3b8] text-sm mt-1">Audit log of your AI code mappings & translations.</p>
                </div>
                <div className="flex items-center gap-2 bg-[#1a1a24] border border-[#2a2a35] px-4 py-2 rounded-full">
                    <span className="text-xs font-bold text-[#94a3b8] tracking-widest uppercase">{history.length} Queries Logged</span>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto space-y-4 pb-12">
                {history.map((record, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        key={index}
                        className="bg-[#0f0f13]/80 backdrop-blur-xl border border-[#2a2a35] rounded-3xl p-6 hover:border-[#6b46c1]/50 transition-colors shadow-2xl relative"
                    >
                        {record.perfMode && (
                            <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#6b46c1] to-[#00e5ff] px-3 py-1 rounded-full shadow-glow">
                                <span className="text-[10px] uppercase font-bold text-white tracking-widest">Deep Eval Mode</span>
                            </div>
                        )}
                        <div className="flex items-center justify-between mb-4 border-b border-[#2a2a35]/50 pb-4">
                            <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase">
                                <span className="text-[#94a3b8] flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#94a3b8]"></span>
                                    {record.sourceLang}
                                </span>
                                <ArrowRight className="w-4 h-4 text-[#2a2a35]" />
                                <span className="text-[#00e5ff] flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse"></span>
                                    {record.targetLang}
                                </span>
                            </div>
                            <span className="text-xs text-[#94a3b8] bg-[#1a1a24] px-3 py-1.5 rounded-full border border-[#2a2a35]">
                                {new Date(record.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {new Date(record.timestamp).toLocaleDateString()}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                            <div className="bg-[#0a0a0c] rounded-2xl border border-[#2a2a35]/50 overflow-hidden relative group">
                                <div className="p-3 bg-[#1a1a24] border-b border-[#2a2a35]/50 flex justify-between items-center">
                                    <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest">Input String</span>
                                    <button onClick={() => handleCopy(record.inputCode)} className="text-[#94a3b8] hover:text-[#00e5ff] transition-colors"><Copy className="w-3.5 h-3.5" /></button>
                                </div>
                                <pre className="p-4 text-xs text-[#e2e8f0] font-mono overflow-x-auto max-h-40 scrollbar-thin scrollbar-thumb-[#2a2a35] scrollbar-track-transparent">
                                    {record.inputCode}
                                </pre>
                            </div>

                            <div className="bg-[#0a0a0c] rounded-2xl border border-[#2a2a35]/50 overflow-hidden relative group">
                                <div className="p-3 bg-[#1a1a24] border-b border-[#2a2a35]/50 flex justify-between items-center">
                                    <span className="text-[10px] font-bold text-[#6b46c1] shadow-[#6b46c1] uppercase tracking-widest">Transformation</span>
                                    <button onClick={() => handleCopy(record.outputCode)} className="text-[#94a3b8] hover:text-[#00e5ff] transition-colors"><Copy className="w-3.5 h-3.5" /></button>
                                </div>
                                <pre className="p-4 text-xs text-[#e2e8f0] font-mono overflow-x-auto max-h-40 scrollbar-thin scrollbar-thumb-[#2a2a35] scrollbar-track-transparent">
                                    {record.outputCode}
                                </pre>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default History;
