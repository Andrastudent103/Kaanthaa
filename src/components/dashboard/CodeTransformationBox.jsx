import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Paperclip, Send } from 'lucide-react';
import useEngineStore from '../../store/engineStore';

const CodeTransformationBox = () => {
    const [code, setCode] = useState('');
    const navigate = useNavigate();
    const { setInputCode, setSourceLang, setTargetLang } = useEngineStore();

    const handleRunMapping = () => {
        if (code.trim()) {
            setInputCode(code);
        }
        navigate('/translate');
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-[#0f0f13] border border-[#2a2a35] rounded-3xl overflow-hidden focus-within:border-[#6b46c1]/50 focus-within:shadow-glow-primary transition-all duration-300">

            <div className="flex items-center justify-between p-4 border-b border-[#2a2a35]">
                <div className="flex items-center gap-6">
                    <div className="flex flex-col gap-1 cursor-pointer">
                        <span className="text-[10px] uppercase font-bold text-[#94a3b8] tracking-widest">TRANSLATE</span>
                        <div className="flex items-center gap-2 text-sm text-white font-medium">
                            Python <ChevronDown className="w-4 h-4 text-[#94a3b8]" />
                        </div>
                    </div>

                    <div className="w-px h-8 bg-[#2a2a35]" />

                    <div className="flex flex-col gap-1 cursor-pointer">
                        <span className="text-[10px] uppercase font-bold text-[#94a3b8] tracking-widest">TARGET</span>
                        <div className="flex items-center gap-2 text-sm text-white font-medium">
                            Java <ChevronDown className="w-4 h-4 text-[#94a3b8]" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="text-[10px] uppercase font-bold bg-[#1a1a24] text-[#94a3b8] hover:text-white px-4 py-2 rounded-full border border-[#2a2a35] transition-colors tracking-widest">Report</button>
                    <button className="text-[10px] uppercase font-bold bg-[#1a1a24] text-[#94a3b8] hover:text-white px-4 py-2 rounded-full border border-[#2a2a35] transition-colors tracking-widest">Perf</button>
                </div>
            </div>

            <div className="p-4 relative">
                <textarea
                    className="w-full bg-transparent text-sm text-[#e2e8f0] font-mono resize-none focus:outline-none min-h-[160px] placeholder-[#475569]"
                    placeholder="Kaanthaa Logic: Input source code segments for neural mapping..."
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />

                <div className="absolute left-6 bottom-6">
                    <button className="text-[#94a3b8] hover:text-white transition-colors">
                        <Paperclip className="w-5 h-5" />
                    </button>
                </div>

                <div className="absolute right-6 bottom-6">
                    <button
                        onClick={handleRunMapping}
                        className="flex items-center gap-2 bg-[#1a1a24] hover:bg-[#2a2a35] border border-[#2a2a35] text-[#94a3b8] hover:text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors"
                    >
                        Run Mapping <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CodeTransformationBox;
