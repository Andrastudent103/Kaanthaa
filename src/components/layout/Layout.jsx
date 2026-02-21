import { Outlet, Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Layers, Clock, Search, RefreshCw } from 'lucide-react';

const navigation = [
    { name: 'Translate', href: '/translate', icon: RefreshCw },
    { name: 'Templates', href: '/templates', icon: Layers },
    { name: 'Explore', href: '/explore', icon: Search },
    { name: 'History', href: '/history', icon: Clock },
];

const Layout = () => {
    const location = useLocation();

    return (
        <div className="flex h-screen flex-col lg:flex-row overflow-hidden bg-background">
            <div className="hidden lg:block h-full">
                <Sidebar />
            </div>

            <main className="flex-1 overflow-y-auto w-full h-full relative pb-16 lg:pb-0">
                <Outlet />
            </main>

            {/* Mobile Bottom Navigation */}
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0a0a0c]/90 backdrop-blur-xl border-t border-[#2a2a35] flex items-center justify-around px-2 py-3 z-50">
                {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`flex flex-col items-center gap-1 p-2 transition-colors ${isActive ? 'text-white' : 'text-[#94a3b8] hover:text-white'
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="text-[10px] font-medium">{item.name}</span>
                        </Link>
                    )
                })}
            </nav>
        </div>
    );
};

export default Layout;
