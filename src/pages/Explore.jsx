import { Search, Compass, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { exploreData } from '../data/exploreData';

const Explore = () => {
    const navigate = useNavigate();
    return (
        <div className="p-8 max-w-6xl mx-auto h-full flex flex-col">
            <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-3 text-white">
                        <Compass className="w-6 h-6 text-[#00e5ff]" />
                        Explore Hub
                    </h1>
                    <p className="text-[#94a3b8] text-sm mt-1">Discover, copy, and utilize community-shared templates and mapping logic.</p>
                </div>
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                    <input
                        type="text"
                        placeholder="Search templates, scripts..."
                        className="bg-[#1a1a24] border border-[#2a2a35] text-white text-sm rounded-full pl-10 pr-6 py-2.5 focus:outline-none focus:border-[#00e5ff] w-full md:w-64 transition-colors"
                    />
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12 overflow-y-auto">
                {exploreData.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        key={item.id}
                        onClick={() => navigate(`/explore/${item.id}`)}
                        className="bg-[#0f0f13]/80 backdrop-blur-xl border border-[#2a2a35] hover:border-[#00e5ff]/50 rounded-3xl p-6 transition-all duration-300 hover:shadow-glow group cursor-pointer flex flex-col"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] font-bold text-[#6b46c1] uppercase tracking-widest bg-[#6b46c1]/10 px-2.5 py-1 rounded-full border border-[#6b46c1]/20">
                                {item.category}
                            </span>
                            <div className="flex items-center gap-1.5 text-[#94a3b8] text-xs font-medium">
                                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
                                {item.likes}
                            </div>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00e5ff] transition-colors">{item.title}</h3>
                        <p className="text-xs text-[#94a3b8] mb-4 flex items-center gap-2">
                            <Users className="w-3.5 h-3.5" />
                            By @{item.author}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#2a2a35]/50">
                            {item.tags.map(tag => (
                                <span key={tag} className="text-[10px] text-[#94a3b8] bg-[#1a1a24] px-2 py-0.5 rounded-md border border-[#2a2a35]">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Explore;
