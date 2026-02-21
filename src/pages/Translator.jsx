import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Settings, Sparkles, Copy, ChevronRight, RefreshCw, AlertCircle, Zap, BookTemplate, Activity, Download } from 'lucide-react';
import Editor from '@monaco-editor/react';
import useEngineStore from '../store/engineStore';

const templates = {
    empty: '',
    basic: 'def add(a, b):\n    return a + b',
    complex: 'def process_data(data):\n    result = []\n    for item in data:\n        if item % 2 == 0:\n            result.append(item * 2)\n    return result'
};

const Translator = () => {
    const {
        inputCode,
        outputCode,
        sourceLang,
        targetLang,
        isTranslating,
        error,
        autoRun, // Advanced Feature Flags
        performanceMode,
        setInputCode,
        setSourceLang,
        setTargetLang,
        setIsTranslating,
        resetStore,
        handleTransform,
        setAutoRun,
        setPerformanceMode
    } = useEngineStore();

    const debounceTimer = useRef(null);

    useEffect(() => {
        // Kept code input intact to preserve dashboard state navigation
    }, []);

    // ⚡ Auto-Run Debounce Hook
    useEffect(() => {
        if (!autoRun || !inputCode) return;

        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }

        debounceTimer.current = setTimeout(() => {
            handleTransform();
        }, 800);

        return () => clearTimeout(debounceTimer.current);
    }, [inputCode, autoRun, sourceLang, targetLang]);

    const handleTranslate = async () => {
        await handleTransform();
    };

    const loadTemplate = (templateKey) => {
        setInputCode(templates[templateKey]);
    };

    const handleCopyInput = () => {
        if (inputCode) navigator.clipboard.writeText(inputCode);
    };

    const handleCopyOutput = () => {
        if (outputCode) navigator.clipboard.writeText(outputCode);
    };

    const handleDownload = () => {
        if (!outputCode) return;
        const blob = new Blob([outputCode], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;

        const extMap = { python: 'py', java: 'java', cpp: 'cpp', go: 'go' };
        const ext = extMap[targetLang] || 'txt';

        a.download = `Kaanthaa_Transform_${Date.now()}.${ext}`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleEditorDidMount = (editor, monaco) => {
        monaco.editor.defineTheme('aura-dark', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: 'comment', foreground: '6272a4', fontStyle: 'italic' },
                { token: 'keyword', foreground: 'ff79c6' },
                { token: 'string', foreground: 'f1fa8c' },
            ],
            colors: {
                'editor.background': '#0f0f13',
                'editor.lineHighlightBackground': '#1a1a24',
                'editorLineNumber.foreground': '#404050',
            },
        });
        monaco.editor.setTheme('aura-dark');
    };

    return (
        <div className="p-8 h-full flex flex-col bg-[#0a0a0c] relative">

            {/* Error Toast Notification */}
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-[#1a1a24]/90 backdrop-blur-md border border-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,0.3)] px-6 py-3 rounded-full flex items-center gap-3"
                    >
                        <AlertCircle className="w-5 h-5 text-rose-500" />
                        <span className="text-sm font-medium text-white tracking-wide">{error}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Top Header matching exact screenshot aesthetics */}
            <header className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4 text-[11px] font-bold tracking-widest uppercase relative">
                    {/* Glowing background behind selectors when translating */}
                    {isTranslating && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 bg-gradient-to-r from-[#6b46c1] to-[#00e5ff] blur-[40px] opacity-20 z-0 pointer-events-none rounded-full"
                        />
                    )}

                    <div className="relative z-10 flex items-center gap-2 text-[#94a3b8] hover:text-white transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#94a3b8]"></span>
                        <select
                            value={sourceLang}
                            onChange={(e) => setSourceLang(e.target.value)}
                            className="bg-transparent outline-none cursor-pointer appearance-none text-[#94a3b8] hover:text-white w-20"
                        >
                            <option value="python">Python</option>
                            <option value="java">Java</option>
                            <option value="cpp">C++</option>
                        </select>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#2a2a35]" />
                    <div className="flex items-center gap-2 text-[#6b46c1] hover:text-[#00e5ff] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse shadow-[0_0_8px_#00e5ff]"></span>
                        <select
                            value={targetLang}
                            onChange={(e) => setTargetLang(e.target.value)}
                            className="bg-transparent outline-none cursor-pointer appearance-none text-[#6b46c1] hover:text-[#00e5ff] w-20"
                        >
                            <option value="java">Java</option>
                            <option value="python">Python</option>
                            <option value="cpp">C++</option>
                            <option value="go">Go</option>
                        </select>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={handleCopyOutput}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2a2a35] bg-[#1a1a24] text-xs font-semibold uppercase tracking-widest text-[#94a3b8] hover:text-white hover:border-[#6b46c1]/50 transition-all"
                    >
                        <Copy className="w-3.5 h-3.5" />
                        Copy Result
                    </button>
                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2a2a35] bg-[#1a1a24] text-xs font-semibold uppercase tracking-widest text-[#00e5ff] hover:text-white hover:border-[#00e5ff]/50 transition-all shadow-glow"
                    >
                        <Download className="w-3.5 h-3.5" />
                        Download
                    </button>
                </div>
            </header>

            {/* Editors Area */}
            <div className="flex-1 min-h-0 border border-[#2a2a35] rounded-3xl overflow-hidden flex bg-[#0f0f13] shadow-2xl relative">

                {/* Left Pane - Python */}
                <div className="flex-1 flex flex-col min-w-0 border-r border-[#2a2a35]/50">
                    <div className="p-4 border-b border-[#2a2a35]/50 flex items-center justify-between">
                        <span className="text-[10px] uppercase font-bold text-[#94a3b8] tracking-widest">Source Buffer</span>
                        <button onClick={handleCopyInput} className="p-1.5 rounded-lg border border-[#2a2a35] text-[#94a3b8] hover:text-white transition-colors cursor-pointer">
                            <Copy className="w-3.5 h-3.5" />
                        </button>
                    </div>
                    <div className="flex-1 relative">
                        <Editor
                            height="100%"
                            language={sourceLang}
                            value={inputCode}
                            onChange={(value) => setInputCode(value || '')}
                            theme="vs-dark"
                            onMount={handleEditorDidMount}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 13,
                                fontFamily: '"JetBrains Mono", monospace',
                                padding: { top: 20 },
                                lineNumbersMinChars: 3,
                                scrollBeyondLastLine: false,
                                wordWrap: "on"
                            }}
                        />
                    </div>
                </div>

                {/* Right Pane - Java */}
                <div className="flex-1 flex flex-col min-w-0 bg-[#0a0a0c]/30">
                    <div className="p-4 border-b border-[#2a2a35]/50 flex items-center justify-between">
                        <span className="text-[10px] uppercase font-bold text-[#6b46c1] tracking-widest shadow-[#6b46c1]">Neural Output</span>
                        <button onClick={handleCopyOutput} className="p-1.5 rounded-lg border border-[#2a2a35] text-[#94a3b8] hover:text-white transition-colors cursor-pointer">
                            <Copy className="w-3.5 h-3.5" />
                        </button>
                    </div>
                    <div className="flex-1 relative">
                        {/* Loading Overlay */}
                        {isTranslating && (
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0a0a0c]/50 backdrop-blur-sm">
                                <RefreshCw className="w-8 h-8 text-[#00e5ff] animate-spin mb-4" />
                                <p className="text-[#00e5ff] text-sm font-medium tracking-widest uppercase animate-pulse">Running Mapping</p>
                            </div>
                        )}
                        <Editor
                            height="100%"
                            language={targetLang}
                            value={outputCode}
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
                </div>
            </div>

            {/* Bottom Action Area */}
            <div className="mt-6 flex flex-col xl:flex-row items-center justify-between gap-4 p-4">

                {/* Advanced Feature Panel */}
                <div className="flex flex-wrap items-center gap-3 bg-[#111116] border border-[#2a2a35] p-2 rounded-2xl w-full xl:w-auto overflow-hidden shadow-2xl">

                    {/* Engine Identity */}
                    <div className="flex items-center gap-3 px-4 border-r border-[#2a2a35]">
                        <div className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
                        <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest hidden sm:block">Kaanthaa Engine v2.5</span>
                    </div>

                    {/* Templates Dropdown/Select */}
                    <div className="flex items-center gap-2 px-2 border-r border-[#2a2a35]">
                        <BookTemplate className="w-4 h-4 text-[#94a3b8]" />
                        <select
                            onChange={(e) => loadTemplate(e.target.value)}
                            className="bg-transparent text-[#94a3b8] hover:text-white transition-colors text-xs font-semibold outline-none appearance-none cursor-pointer uppercase tracking-widest"
                        >
                            <option value="empty">Template: Custom</option>
                            <option value="basic">Template: Basic Add</option>
                            <option value="complex">Template: Data Processor</option>
                        </select>
                    </div>

                    {/* Toggles */}
                    <div className="flex items-center gap-4 px-4 w-full sm:w-auto justify-between sm:justify-start">

                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={performanceMode}
                                onChange={() => setPerformanceMode(!performanceMode)}
                                className="hidden"
                            />
                            <div className={`w-10 h-5 rounded-full border border-[#2a2a35] flex items-center p-0.5 transition-colors duration-300 ${performanceMode ? 'bg-[#1a1a24] border-[#00e5ff]/50' : 'bg-[#0a0a0c]'}`}>
                                <motion.div
                                    animate={{ x: performanceMode ? 20 : 0 }}
                                    className={`w-4 h-4 rounded-full shadow-md ${performanceMode ? 'bg-[#00e5ff] shadow-glow' : 'bg-[#404050]'}`}
                                />
                            </div>
                            <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${performanceMode ? 'text-[#00e5ff]' : 'text-[#94a3b8] group-hover:text-white'}`}>Deep Eval</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={autoRun}
                                onChange={() => setAutoRun(!autoRun)}
                                className="hidden"
                            />
                            <div className={`w-10 h-5 rounded-full border border-[#2a2a35] flex items-center p-0.5 transition-colors duration-300 ${autoRun ? 'bg-[#1a1a24] border-[#6b46c1]/50' : 'bg-[#0a0a0c]'}`}>
                                <motion.div
                                    animate={{ x: autoRun ? 20 : 0 }}
                                    className={`w-4 h-4 rounded-full shadow-md ${autoRun ? 'bg-[#6b46c1] shadow-[0_0_10px_#6b46c1]' : 'bg-[#404050]'}`}
                                />
                            </div>
                            <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${autoRun ? 'text-[#6b46c1]' : 'text-[#94a3b8] group-hover:text-white'}`}>Auto-Run</span>
                        </label>

                    </div>
                </div>

                <button
                    onClick={handleTranslate}
                    disabled={isTranslating}
                    // Hide primary button completely when autoRun is enabled to push clean state mappings
                    className={`flex items-center gap-2 px-8 py-3 rounded-2xl text-sm font-semibold tracking-wide uppercase transition-all ${isTranslating ? 'bg-[#111116] border border-[#2a2a35] text-[#94a3b8] cursor-not-allowed' : 'bg-gradient-to-r from-[#6b46c1] to-[#00e5ff] text-white hover:opacity-90 shadow-[0_0_20px_rgba(107,70,193,0.3)] hover:shadow-glow transform hover:-translate-y-0.5'} ${autoRun && 'opacity-0 pointer-events-none absolute'}`}
                >
                    {isTranslating ? 'Transforming...' : 'Run Mapping'}
                    {!isTranslating && <Send className="w-4 h-4 ml-1" />}
                </button>
            </div>

        </div >
    );
};

export default Translator;
