import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Users, Copy, Check, Compass } from 'lucide-react';
import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { exploreData } from '../data/exploreData';

const ExploreDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);

    const template = exploreData.find(t => t.id === parseInt(id));

    if (!template) {
        return (
            <div className="p-8 max-w-6xl mx-auto h-full flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-white mb-4">Template Not Found</h1>
                <button onClick={() => navigate('/explore')} className="text-[#00e5ff] hover:underline">
                    Return to Explore Hub
                </button>
            </div>
        );
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(template.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="p-8 max-w-6xl mx-auto h-full flex flex-col bg-[#0a0a0c]">
            <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2a2a35] pb-6">
                <div>
                    <button
                        onClick={() => navigate('/explore')}
                        className="flex items-center gap-2 text-[#94a3b8] hover:text-white transition-colors mb-4 text-sm font-semibold tracking-wide"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Explore
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#6b46c1]/20 to-[#00e5ff]/20 border border-[#6b46c1]/50 shadow-glow flex-shrink-0">
                            <Compass className="w-6 h-6 text-[#00e5ff]" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white">{template.title}</h1>
                            <div className="flex items-center gap-4 mt-2">
                                <span className="text-xs text-[#94a3b8] flex items-center gap-1">
                                    <Users className="w-3.5 h-3.5" />
                                    @{template.author}
                                </span>
                                <span className="text-xs text-[#94a3b8] flex items-center gap-1">
                                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
                                    {template.likes} Likes
                                </span>
                                <span className="text-[10px] font-bold text-[#6b46c1] uppercase tracking-widest bg-[#6b46c1]/10 px-2 py-0.5 rounded-md border border-[#6b46c1]/20">
                                    {template.category}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleCopy}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-[#2a2a35] bg-[#1a1a24] text-xs font-semibold uppercase tracking-widest text-white hover:border-[#00e5ff]/50 hover:shadow-glow transition-all focus:outline-none"
                >
                    {copied ? <Check className="w-4 h-4 text-[#34d399]" /> : <Copy className="w-4 h-4 text-[#00e5ff]" />}
                    {copied ? <span className="text-[#34d399]">Copied</span> : 'Copy Framework'}
                </button>
            </header>

            <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-8">
                {/* Details Sidebar */}
                <div className="w-full md:w-64 flex flex-col gap-6 shrink-0">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[#0f0f13]/80 backdrop-blur-xl border border-[#2a2a35] rounded-3xl p-6"
                    >
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3">About Template</h3>
                        <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
                            {template.description}
                        </p>

                        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3">Tags & Integrations</h3>
                        <div className="flex flex-wrap gap-2">
                            {template.tags.map(tag => (
                                <span key={tag} className="text-[10px] text-[#94a3b8] bg-[#1a1a24] px-2.5 py-1 rounded-md border border-[#2a2a35]">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Editor Surface */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 border border-[#2a2a35] rounded-3xl overflow-hidden bg-[#0a0a0c] shadow-2xl relative flex flex-col"
                >
                    <div className="p-4 border-b border-[#2a2a35]/50 bg-[#1a1a24]/50 flex items-center justify-between">
                        <span className="text-[10px] uppercase font-bold text-[#94a3b8] tracking-widest">Read-Only Buffer</span>
                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                            <span className="w-3 h-3 rounded-full bg-[#34d399]/80"></span>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <Editor
                            height="100%"
                            defaultLanguage={template.tags.includes('python') ? 'python' : 'javascript'}
                            value={template.code}
                            theme="vs-dark"
                            options={{
                                minimap: { enabled: false },
                                fontSize: 13,
                                fontFamily: '"JetBrains Mono", monospace',
                                padding: { top: 20 },
                                readOnly: true,
                                lineNumbersMinChars: 3,
                                scrollBeyondLastLine: false,
                                wordWrap: "on"
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ExploreDetail;
