import { INITIAL_Z_INDEX, WINDOW_CONFIG, type WindowConfig } from "@constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type WindowKey = keyof typeof WINDOW_CONFIG;

interface WindowState {
  windows: Record<WindowKey, WindowConfig>;
  nextZIndex: number;
  openWindow: (windowKey: WindowKey, data?: unknown) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey) => void;
}

export const useWindowStore = create<WindowState>()(
  immer((set) => ({
    windows: { ...WINDOW_CONFIG },
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey: WindowKey, data: unknown = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = true;
        win.zIndex = state.nextZIndex++;
        win.data = data;
      }),
    closeWindow: (windowKey: WindowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),
    focusWindow: (windowKey: WindowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
      }),
  }))
);