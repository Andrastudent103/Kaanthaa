import { create } from 'zustand';

const useUserStore = create((set, get) => ({
    user: {
        name: 'Loading...',
        firstName: '',
        email: '',
        role: '',
        handle: '',
        membership: '',
        initials: ''
    },

    fetchUser: async () => {
        try {
            const res = await fetch('http://localhost:4000/api/user');
            if (res.ok) {
                const data = await res.json();
                set({ user: data });
            }
        } catch (error) {
            console.error('Failed to fetch user from backend:', error);
        }
    },

    updateUser: async (updates) => {
        // Optimistically update UI
        const state = get();
        const newName = updates.name || state.user.name;
        const nameParts = newName.trim().split(' ');

        let initials = 'JM';
        let firstName = newName;

        if (nameParts.length >= 2) {
            initials = nameParts[0][0].toUpperCase() + nameParts[nameParts.length - 1][0].toUpperCase();
            firstName = nameParts[0];
        } else if (nameParts.length === 1 && nameParts[0]) {
            initials = nameParts[0].substring(0, 2).toUpperCase();
            firstName = nameParts[0];
        }

        const updatedUser = { ...state.user, ...updates, initials, firstName };
        set({ user: updatedUser });

        // Push update to the JSON Server
        try {
            const res = await fetch('http://localhost:4000/api/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updates)
            });
            if (res.ok) {
                const updatedServerUser = await res.json();
                set({ user: updatedServerUser });
            }
        } catch (error) {
            console.error('Failed to sync user update to server:', error);
        }
    }
}));

export default useUserStore;
