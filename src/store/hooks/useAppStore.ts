import { create } from 'zustand';

import type { TypeOptions } from 'react-toastify';

export type NotificationType = {
  message: string | null;
  type?: TypeOptions;
};

type GlobalState = {
  isLoading: boolean;
  notification: NotificationType | null;
  skip: number;
  limit: number;
  setLoading: (state: boolean) => void;
  setNotification: (notification: NotificationType) => void;
  setSkip: (skip: number) => void;
};

export const useAppStore = create<GlobalState>((set) => ({
  isLoading: false,
  notification: null,
  skip: 0,
  limit: 10,
  setLoading: (state) => set({ isLoading: state }),
  setNotification: (notification) => set({ notification }),
  setSkip: (skip) => set({ skip }),
}));
