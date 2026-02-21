import { useState, useRef, useEffect } from 'react';
import { ChevronDown, MoreHorizontal, User, Settings as SettingsIcon, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../store/userStore';

const Navbar = () => {
    const { user } = useUserStore();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState('v2.5');
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="h-20 px-4 md:px-8 flex items-center justify-between w-full bg-[#0a0a0c]/80 backdrop-blur-md sticky top-0 z-40 border-b border-[#2a2a35]/50">
            <div className="flex items-center relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 bg-[#111116] border border-[#2a2a35] rounded-full px-4 py-2 text-sm text-[#e2e8f0] hover:bg-[#1a1a24] transition-colors focus:outline-none focus:border-[#00e5ff]/50">
                    <span className="font-medium text-xs text-[#94a3b8]">AI Engine</span>
                    <span className="font-semibold text-xs text-white">{selectedModel}</span>
                    <ChevronDown className={`w-4 h-4 text-[#94a3b8] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                    <div className="absolute top-12 left-0 mt-2 w-48 rounded-2xl bg-[#0f0f13] border border-[#2a2a35] shadow-2xl py-2 z-50">
                        {['v2.5 Flash', 'v2.0 Flash', 'v1.5 Pro'].map((model) => (
                            <button
                                key={model}
                                onClick={() => { setSelectedModel(model); setIsOpen(false); }}
                                className={`w-full text-left px-4 py-2 text-sm flex items-center gap-3 transition-colors ${selectedModel === model ? 'text-[#00e5ff] bg-[#1a1a24]' : 'text-[#e2e8f0] hover:bg-[#1a1a24] hover:text-white'}`}
                            >
                                {model}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center gap-4 relative">
                <div className="flex items-center gap-2 bg-[#111116] border border-[#2a2a35] rounded-full px-4 py-2">
                    <div className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse shadow-[0_0_8px_#34d399]" />
                    <span className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">Active</span>
                </div>


            </div>
        </header>
    );
};

export default Navbar;
