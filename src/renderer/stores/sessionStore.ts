/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';

interface SessionState {
  name: string;
  setName: (name: string) => void;
  resetSession: () => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  name: '',
  setName: (name) => set({ name }),
  resetSession: () => set({ name: '' }),
}));
