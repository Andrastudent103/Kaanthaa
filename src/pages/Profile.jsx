import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Shield, Key } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import useUserStore from '../store/userStore';

const Profile = () => {
    const { user, updateUser } = useUserStore();

    // Controlled internal inputs
    const [nameVal, setNameVal] = useState(user.name);
    const [roleVal, setRoleVal] = useState(user.role);

    useEffect(() => {
        setNameVal(user.name);
        setRoleVal(user.role);
    }, [user.name, user.role]);

    const handleUpdate = () => {
        updateUser({ name: nameVal, role: roleVal });
    };

    return (
        <div className="flex flex-col h-full bg-[#0a0a0c]">
            <Navbar />

            <div className="flex-1 overflow-y-auto px-6 pb-20 pt-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto flex flex-col gap-8"
                >
                    <div className="flex items-center gap-6 p-8 bg-[#0f0f13]/80 backdrop-blur-xl border border-[#2a2a35] rounded-3xl shadow-2xl relative overflow-hidden">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#6b46c1] to-[#00e5ff] p-1 shadow-glow relative z-10">
                            <div className="w-full h-full rounded-full bg-[#111116] flex items-center justify-center text-3xl font-bold text-white">{user.initials}</div>
                        </div>
                        <div className="relative z-10">
                            <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 bg-gradient-to-r from-[#6b46c1]/20 to-[#00e5ff]/20 border border-[#6b46c1]/30 rounded-full text-xs font-bold text-[#00e5ff] uppercase tracking-widest">{user.membership}</span>
                                <span className="text-sm text-[#94a3b8] flex items-center gap-1"><Mail className="w-4 h-4" /> {user.email}</span>
                            </div>
                        </div>
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#6b46c1]/10 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#0f0f13]/80 backdrop-blur-xl border border-[#2a2a35] rounded-3xl p-6">
                            <h3 className="text-white font-bold tracking-wide flex items-center gap-2 mb-6"><Shield className="w-5 h-5 text-[#6b46c1]" /> Security</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-[#2a2a35]/50">
                                    <span className="text-[#94a3b8] text-sm">Two-Factor Auth</span>
                                    <span className="text-[#34d399] text-xs font-bold uppercase">Enabled</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-[#2a2a35]/50">
                                    <span className="text-[#94a3b8] text-sm">Last Sign In</span>
                                    <span className="text-white text-xs">Today, 10:43 AM (Mac OS)</span>
                                </div>
                                <button className="w-full py-3 mt-4 flex items-center justify-center gap-2 bg-[#1a1a24] border border-[#2a2a35] rounded-xl text-white hover:border-[#00e5ff]/50 transition-colors text-sm font-semibold">
                                    <Key className="w-4 h-4" /> Update Password
                                </button>
                            </div>
                        </div>

                        <div className="bg-[#0f0f13]/80 backdrop-blur-xl border border-[#2a2a35] rounded-3xl p-6">
                            <h3 className="text-white font-bold tracking-wide flex items-center gap-2 mb-6"><User className="w-5 h-5 text-[#00e5ff]" /> Personal Info</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs text-[#94a3b8] uppercase tracking-widest mb-1 block">Full Name</label>
                                    <input
                                        type="text"
                                        value={nameVal}
                                        onChange={(e) => setNameVal(e.target.value)}
                                        className="w-full bg-[#1a1a24] border border-[#2a2a35] p-3 rounded-xl text-white focus:outline-none focus:border-[#00e5ff] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-[#94a3b8] uppercase tracking-widest mb-1 block">Role / Title</label>
                                    <input
                                        type="text"
                                        value={roleVal}
                                        onChange={(e) => setRoleVal(e.target.value)}
                                        className="w-full bg-[#1a1a24] border border-[#2a2a35] p-3 rounded-xl text-white focus:outline-none focus:border-[#00e5ff] transition-colors"
                                    />
                                </div>
                                <button
                                    onClick={handleUpdate}
                                    className="w-full py-3 mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-[#00e5ff] to-[#6b46c1] rounded-xl text-white font-bold tracking-wide shadow-glow hover:opacity-90 transition-opacity"
                                >
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;
