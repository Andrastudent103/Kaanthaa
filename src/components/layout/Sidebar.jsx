import { Link, useLocation } from 'react-router-dom';
import { Layers, Clock, Settings, Search, RefreshCw, Hexagon } from 'lucide-react';
import { motion } from 'framer-motion';
import useUserStore from '../../store/userStore';

const navigation = [
    { name: 'Translate', href: '/translate', icon: RefreshCw },
    { name: 'Templates', href: '/templates', icon: Layers },
    { name: 'Explore', href: '/explore', icon: Search },
    { name: 'History', href: '/history', icon: Clock },
];

const Sidebar = () => {
    const { user } = useUserStore();
    const location = useLocation();

    return (
        <aside className="w-64 border-r border-[#2a2a35] bg-[#0a0a0c]/80 backdrop-blur-xl flex flex-col h-full sticky top-0 left-0">
            <Link to="/" className="p-6 flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6b46c1]/20 to-[#00e5ff]/20 flex items-center justify-center border border-[#6b46c1]/50 shadow-glow-primary hover:shadow-glow transition-shadow duration-300">
                    <Hexagon className="text-[#6b46c1] w-6 h-6 fill-[#6b46c1]" />
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#94a3b8] tracking-wide">Kaanthaa</span>
            </Link>

            <nav className="flex-1 px-4 space-y-1 mt-6">
                {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 relative overflow-hidden group ${isActive ? 'text-white bg-[#1a1a24] shadow-[inset_0_0_20px_rgba(107,70,193,0.1)] border border-[#2a2a35]/50' : 'text-[#94a3b8] hover:text-white hover:bg-[#1a1a24]/50 hover:translate-x-1'
                                }`}
                        >
                            <item.icon className="w-4 h-4 relative z-10" />
                            <span className="relative z-10 text-sm font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>


        </aside>
    );
};

export default Sidebar;
