import { create } from 'zustand';
import { transformCode } from '../services/transformService';

const useEngineStore = create((set, get) => ({
    inputCode: '',
    outputCode: '',
    sourceLang: 'python',
    targetLang: 'java',
    isTranslating: false,
    report: null,
    error: null,
    autoRun: false,
    performanceMode: false,
    history: [],

    setInputCode: (code) => set({ inputCode: code }),
    setOutputCode: (code) => set({ outputCode: code }),
    setSourceLang: (lang) => set({ sourceLang: lang }),
    setTargetLang: (lang) => set({ targetLang: lang }),
    setIsTranslating: (isTranslating) => set({ isTranslating }),
    setReport: (report) => set({ report }),
    setError: (error) => set({ error }),
    setAutoRun: (autoRun) => set({ autoRun }),
    setPerformanceMode: (performanceMode) => set({ performanceMode }),
    addHistoryRecord: (record) => set((state) => ({ history: [record, ...state.history] })),

    resetStore: () => set({
        inputCode: '',
        outputCode: '',
        report: null,
        isTranslating: false,
        error: null,
        autoRun: false,
        performanceMode: false
    }),

    handleTransform: async () => {
        const { inputCode, sourceLang, targetLang, performanceMode, addHistoryRecord } = get();

        // Step 6: Validate Input
        if (!inputCode || inputCode.trim() === '') {
            set({ error: 'Source code cannot be empty. Please enter code to translate.' });
            setTimeout(() => set({ error: null }), 4000);
            return;
        }

        if (sourceLang === targetLang) {
            set({ error: 'Source and Target languages must be different.' });
            setTimeout(() => set({ error: null }), 4000);
            return;
        }

        // Step 7: Transition to Loading State
        set({
            isTranslating: true,
            error: null,
            outputCode: 'Transforming code...'
        });

        // Step 8: API Call execution
        try {
            const response = await transformCode(inputCode, sourceLang, targetLang, performanceMode);

            set({
                outputCode: response.data.output,
                report: response.data.report,
                isTranslating: false
            });

            // Save to History (Mock client state tracking)
            addHistoryRecord({
                userId: 'user_123',
                inputCode,
                outputCode: response.data.output,
                sourceLang,
                targetLang,
                timestamp: new Date().toISOString(),
                perfMode: performanceMode
            });

        } catch (err) {
            set({
                error: 'Engine mapping failed. Please try again.',
                isTranslating: false,
                outputCode: '// Transformation Error occurred.'
            });
            setTimeout(() => set({ error: null }), 4000);
        }
    }
}));

export default useEngineStore;
