const EngineCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mb-10">
            <div className="bg-[#0f0f13]/80 backdrop-blur-xl border border-[#2a2a35] rounded-3xl p-6 hover:border-[#6b46c1]/50 focus-within:shadow-glow-primary hover:shadow-glow-primary hover:scale-105 cursor-pointer transition-all duration-300">
                <h3 className="font-semibold text-[15px] mb-2 text-white">Clean Refactor</h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">Turn manual Java logic into concise Pythonic expressions.</p>
            </div>
            <div className="bg-[#0f0f13]/80 backdrop-blur-xl border border-[#2a2a35] rounded-3xl p-6 hover:border-[#00e5ff]/50 hover:shadow-glow hover:scale-105 cursor-pointer transition-all duration-300">
                <h3 className="font-semibold text-[15px] mb-2 text-white">Performance RAll</h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">Ensure memory safety when mapping to low-level C++ containers.</p>
            </div>
            <div className="bg-[#0f0f13]/80 backdrop-blur-xl border border-[#2a2a35] rounded-3xl p-6 hover:border-[#6b46c1]/50 hover:shadow-glow-primary hover:scale-105 cursor-pointer transition-all duration-300">
                <h3 className="font-semibold text-[15px] mb-2 text-white">Semantic Audit</h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">Detailed analysis of every logic gate during transpilation.</p>
            </div>
        </div>
    );
};

export default EngineCards;
