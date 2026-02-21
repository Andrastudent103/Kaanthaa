import { Layout, Box, Code2, Type, LogIn, CreditCard, Menu, MessageSquare, Shield, Zap, Search } from 'lucide-react';

export const iconsMap = {
    Navbar: Menu,
    Hero: Zap,
    Features: Shield,
    Pricing: CreditCard,
    Footer: Layout,
    Forms: LogIn,
    'UI Components': Box,
    Cards: Box,
    Search: Search,
    Animations: Code2
};

export const categories = ['All', 'Navbar', 'Hero', 'Features', 'Pricing', 'Footer', 'Forms', 'UI Components', 'Cards', 'Animations'];

const coreTemplates = [
    {
        id: 'nav-glass',
        category: 'Navbar',
        title: 'Glassmorphic Navbar',
        code: `<nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#0a0a0c]/80 border-b border-[#2a2a35]">\n  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n    <div className="flex items-center justify-between h-16">\n      <div className="flex-shrink-0 font-bold text-xl tracking-wider text-white">LOGO</div>\n      <div className="hidden md:block">\n        <div className="ml-10 flex items-baseline space-x-4">\n          <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>\n          <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>`
    },
    {
        id: 'hero-gradient',
        category: 'Hero',
        title: 'Gradient Flare Hero',
        code: `<div className="relative overflow-hidden bg-[#0a0a0c] py-24 sm:py-32">\n  <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">\n    <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6b46c1] to-[#00e5ff] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>\n  </div>\n  <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">\n    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Supercharge your app</h1>\n    <p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>\n    <div className="mt-10 flex items-center justify-center gap-x-6">\n      <a href="#" className="rounded-full bg-gradient-to-r from-[#6b46c1] to-[#00e5ff] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90">Get started</a>\n    </div>\n  </div>\n</div>`
    },
    {
        id: 'nav-minimal',
        category: 'Navbar',
        title: 'Minimal Centered Navbar',
        code: `<nav className="w-full bg-transparent py-6">\n  <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-8 text-sm font-medium text-gray-400">\n    <a href="#" className="hover:text-white transition-colors">Home</a>\n    <a href="#" className="hover:text-white transition-colors">Products</a>\n    <a href="#" className="hover:text-white transition-colors">Company</a>\n    <a href="#" className="text-[#00e5ff] hover:text-[#6b46c1] transition-colors">Sign In</a>\n  </div>\n</nav>`
    },
    {
        id: 'footer-standard',
        category: 'Footer',
        title: 'Standard Enterprise Footer',
        code: `<footer className="border-t border-[#2a2a35] bg-[#0f0f13] mt-auto">\n  <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4">\n    <div className="text-[#94a3b8] text-sm">© 2026 Your Company. All rights reserved.</div>\n    <div className="flex space-x-6 text-sm font-medium text-[#94a3b8]">\n      <a href="#" className="hover:text-white transition-colors">Privacy</a>\n      <a href="#" className="hover:text-white transition-colors">Terms</a>\n    </div>\n  </div>\n</footer>`
    },
    {
        id: 'form-login',
        category: 'Forms',
        title: 'Glassmorphic Login Form',
        code: `<div className="w-full max-w-md mx-auto p-8 bg-[#0f0f13]/80 backdrop-blur-xl border border-[#2a2a35] rounded-3xl shadow-2xl">\n  <h2 className="text-2xl font-bold text-center text-white mb-2">Welcome Back</h2>\n  <p className="text-center text-[#94a3b8] mb-8 text-sm">Sign in to your account</p>\n  <form className="space-y-4">\n    <div>\n      <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>\n      <input type="email" className="w-full bg-[#1a1a24] border border-[#2a2a35] rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00e5ff] transition-colors" placeholder="you@example.com" />\n    </div>\n    <div>\n      <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>\n      <input type="password" className="w-full bg-[#1a1a24] border border-[#2a2a35] rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00e5ff] transition-colors" placeholder="••••••••" />\n    </div>\n    <button className="w-full mt-6 bg-[#6b46c1] hover:bg-[#553c9a] text-white font-semibold py-2.5 rounded-xl transition-colors">Sign In</button>\n  </form>\n</div>`
    },
    {
        id: 'cards-feature',
        category: 'Cards',
        title: 'Neon Border Feature Card',
        code: `<div className="p-6 bg-[#0f0f13] border border-[#2a2a35] hover:border-[#00e5ff] transition-all duration-300 rounded-2xl group cursor-pointer">\n  <div className="w-12 h-12 bg-[#00e5ff]/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">\n    <svg className="w-6 h-6 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>\n  </div>\n  <h3 className="text-lg font-bold text-white mb-2">Lightning Fast</h3>\n  <p className="text-sm text-[#94a3b8] leading-relaxed">Built on modern architectures ensuring your components render at maximum speed without layout shift.</p>\n</div>`
    },
    {
        id: 'animations-glow',
        category: 'Animations',
        title: 'Smooth Hover Glows (CSS)',
        code: `/* Add to your CSS file */\n.btn-glow {\n  @apply bg-gradient-to-r from-[#6b46c1] to-[#00e5ff] text-white font-semibold py-2 px-6 rounded-full;\n  @apply transition-all duration-300 hover:shadow-[0_0_20px_rgba(107,70,193,0.5)] hover:-translate-y-0.5;\n}\n\n.card-glass {\n  @apply bg-[#0f0f13]/80 backdrop-blur-xl border border-[#2a2a35] rounded-2xl p-6;\n  @apply transition-all duration-300 hover:border-[#6b46c1]/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)];\n}`
    },
    {
        id: 'ui-container',
        category: 'UI Components',
        title: 'App Wrapper Container',
        code: `<div className="min-h-screen bg-[#0a0a0c] text-[#e2e8f0] font-sans flex flex-col">\n  {/* Navbar goes here */}\n  <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">\n    {/* Content goes here */}\n  </main>\n  {/* Footer goes here */}\n</div>`
    }
];

// Automatically generate up to 260 templates based on categories
const categoriesList = categories.filter(c => c !== 'All'); // Remove 'All' from random pool

export const allTemplates = [...coreTemplates];

for (let i = coreTemplates.length; i < 265; i++) {
    const category = categoriesList[i % categoriesList.length];

    let dummyCode = `<div className="w-full p-6 bg-[#0f0f13] border border-[#2a2a35] rounded-2xl shadow-xl">\n  <h3 className="text-whitetext-lg font-bold mb-2">${category} Layout Block \${i+1}</h3>\n  <p className="text-[#94a3b8] text-sm leading-relaxed">Integrate this dynamically generated ${category.toLowerCase()} structurally into your core component tree.</p>\n</div>`;

    if (category === 'Navbar') dummyCode = `<nav className="w-full bg-[#1a1a24] p-4 flex justify-between items-center border-b border-[#2a2a35]">\n  <span className="text-white font-bold text-xl tracking-tight">BrandLogo_${i}</span>\n  <div className="flex gap-6 text-gray-400 text-sm font-medium">\n    <a href="#" className="hover:text-white transition-colors">Products</a>\n    <a href="#" className="hover:text-white transition-colors">Resources</a>\n    <a href="#" className="hover:text-[#00e5ff] transition-colors">Contact</a>\n  </div>\n</nav>`;
    if (category === 'Footer') dummyCode = `<footer className="w-full p-10 border-t border-[#2a2a35] mt-8 text-center text-sm font-medium text-[#94a3b8] bg-[#0a0a0c]">\n  <p>© 2026 ${category} UI Module #${i}.</p>\n  <p className="mt-2 text-[#404050]">Built for AI-driven ecosystems.</p>\n</footer>`;
    if (category === 'Forms') dummyCode = `<form className="flex flex-col gap-4 max-w-sm w-full p-6 bg-[#0f0f13] border border-[#2a2a35] rounded-2xl">\n  <h3 className="text-white font-bold">Input Block ${i}</h3>\n  <input type="text" placeholder="Enter details..." className="bg-[#1a1a24] text-white p-3 rounded-xl border border-[#2a2a35] focus:outline-none focus:border-[#00e5ff] transition-all" />\n  <button className="bg-gradient-to-r from-[#6b46c1] to-[#00e5ff] text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity">Submit Entity</button>\n</form>`;

    allTemplates.push({
        id: `gen-template-${i}`,
        category: category,
        title: `${category} Structural Block ${i + 1}`,
        code: dummyCode
    });
}
