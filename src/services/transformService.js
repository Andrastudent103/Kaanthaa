import axios from 'axios';

export const transformCode = async (code, sourceLang, targetLang, performanceMode) => {
    try {
        // Calling the Node.js Express backend API
        const response = await axios.post('http://localhost:4000/api/transform', {
            code,
            from: sourceLang,
            to: targetLang,
            performanceMode
        });

        // Format the response for the Zustand store payload
        return {
            data: {
                output: response.data.outputCode,
                report: response.data.report
            }
        };
    } catch (error) {
        console.error("Backend connection failed", error);
        throw error;
    }
};
