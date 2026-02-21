import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Layers, Box, Filter, Search } from 'lucide-react';
import { allTemplates, categories, iconsMap } from '../data/templateData';

const Templates = () => {
    const [copiedId, setCopiedId] = useState(null);
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Pagination/Lazy rendering state limit for high item counts
    const [displayCount, setDisplayCount] = useState(20);

    const filteredTemplates = useMemo(() => {
        let result = allTemplates;
        if (activeFilter !== 'All') {
            result = result.filter(t => t.category === activeFilter);
        }
        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase();
            result = result.filter(t =>
                t.title.toLowerCase().includes(query) ||
                t.category.toLowerCase().includes(query)
            );
        }
        return result;
    }, [activeFilter, searchQuery]);

    const displayedTemplates = filteredTemplates.slice(0, displayCount);

    const handleCopy = (id, code) => {
        navigator.clipboard.writeText(code);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const handleLoadMore = () => {
        setDisplayCount(prev => prev + 20);
    };

    return (
        <div className="p-8 max-w-7xl mx-auto h-full flex flex-col bg-[#0a0a0c]">
            <header className="mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-3 text-white">
                        <Layers className="w-6 h-6 text-[#6b46c1]" />
                        UI Component Templates <span className="text-xs font-semibold bg-[#6b46c1]/20 text-[#6b46c1] px-2 py-1 rounded-full">{allTemplates.length}+</span>
                    </h1>
                    <p className="text-[#94a3b8] text-sm mt-2">Browse over 250+ copy-and-paste structural components natively mapped for React.</p>
                </div>

                {/* Search Bar */}
                <div className="relative w-full lg:w-72 border border-[#2a2a35] bg-[#1a1a24] rounded-full px-4 py-2 flex items-center gap-2 focus-within:border-[#00e5ff] transition-colors shadow-lg">
                    <Search className="w-4 h-4 text-[#94a3b8]" />
                    <input
                        type="text"
                        placeholder="Search categories or titles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent text-sm text-white w-full outline-none placeholder-[#404050]"
                    />
                </div>
            </header>

            {/* Filter Tabs */}
            <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-6 scrollbar-thin scrollbar-thumb-[#2a2a35] scrollbar-track-transparent">
                <Filter className="w-4 h-4 text-[#94a3b8] mr-1 flex-shrink-0" />
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => { setActiveFilter(category); setDisplayCount(20); }}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeFilter === category
                                ? 'bg-gradient-to-r from-[#6b46c1] to-[#00e5ff] text-white shadow-glow opacity-100 hover:-translate-y-0.5'
                                : 'bg-[#1a1a24] border border-[#2a2a35] text-[#94a3b8] hover:text-white hover:border-[#6b46c1]/50'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Templates Grid List */}
            <div className="flex-1 overflow-y-auto space-y-6 pb-12 pr-2 custom-scrollbar">
                {displayedTemplates.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-[#94a3b8]">
                        <Search className="w-8 h-8 opacity-20 mb-4" />
                        <p>No components found matching your criteria.</p>
                    </div>
                ) : (
                    displayedTemplates.map((item, index) => {
                        const IconComponent = iconsMap[item.category] || Box;

                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                key={item.id}
                                className="bg-[#0f0f13]/80 backdrop-blur-xl border border-[#2a2a35] rounded-3xl overflow-hidden hover:border-[#00e5ff]/50 transition-colors shadow-xl"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-[#2a2a35] bg-[#1a1a24]/50 gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#2a2a35]/50 border border-[#2a2a35]">
                                            <IconComponent className="w-4 h-4 text-[#00e5ff]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-sm tracking-wide">{item.title}</h3>
                                            <span className="text-[10px] text-[#94a3b8] uppercase tracking-widest font-semibold">{item.category}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleCopy(item.id, item.code)}
                                        className="flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-[#2a2a35] bg-[#0a0a0c] text-xs font-semibold uppercase tracking-widest text-[#94a3b8] hover:text-white hover:border-[#6b46c1]/50 transition-all focus:outline-none shrink-0"
                                    >
                                        {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-[#34d399]" /> : <Copy className="w-3.5 h-3.5" />}
                                        {copiedId === item.id ? <span className="text-[#34d399]">Copied Fragment</span> : 'Copy Framework'}
                                    </button>
                                </div>
                                <div className="p-4 bg-[#0a0a0c] relative">
                                    <pre className="text-[11px] text-[#e2e8f0] font-mono overflow-x-auto scrollbar-thin scrollbar-thumb-[#2a2a35] scrollbar-track-transparent">
                                        {item.code}
                                    </pre>
                                </div>
                            </motion.div>
                        );
                    })
                )}

                {filteredTemplates.length > displayCount && (
                    <div className="flex justify-center pt-8 pb-12">
                        <motion.button
                            whileHover={{ y: -2 }}
                            onClick={handleLoadMore}
                            className="px-8 py-3 rounded-full bg-[#1a1a24] border border-[#2a2a35] text-sm font-semibold text-[#94a3b8] tracking-widest uppercase hover:text-white hover:border-[#6b46c1] hover:shadow-glow-primary transition-all flex items-center justify-center gap-2"
                        >
                            Load More Mappings ({filteredTemplates.length - displayCount} Remaining)
                        </motion.button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Templates;
