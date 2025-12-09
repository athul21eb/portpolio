import { locations } from "@constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type LocationKey = keyof typeof locations;
type TopLevelLocation = (typeof locations)[LocationKey];
type LocationChild = TopLevelLocation["children"][number];
export type Location = TopLevelLocation | LocationChild;

interface LocationState {
  activeLocation: Location;
  setActiveLocation: (location: Location) => void;
  resetActiveLocation: () => void;
}

const DEFAULT_LOCATION =
  locations.work?.children?.[0] ??
  locations.work ??
  locations.about ??
  locations.resume ??
  locations.trash ??
  (() => {
    // Fallback: use the first available location from the locations map
    const firstLocation = Object.values(locations).find(Boolean);
    if (!firstLocation) {
      throw new Error(
        "No locations available. At least one location must be defined in the locations object."
      );
    }
    return firstLocation;
  })();

export const useLocationStore = create<LocationState>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    setActiveLocation: (location) => {
      set((state) => {
        state.activeLocation = location ?? DEFAULT_LOCATION;
      });
    },
    resetActiveLocation: () => {
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      });
    },
  }))
);
