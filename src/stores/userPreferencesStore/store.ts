import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist, PersistOptions } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { UserPreferencesState, UserPreferencesStore } from "./type";

const DEFAULT_STATE: UserPreferencesState = {
  theme: "light",
};

const CURRENT_VERSION = 1;

const getPersistConfig = (key: string): PersistOptions<UserPreferencesStore> => ({
  name: `${key}-v${CURRENT_VERSION}`,
  storage: createJSONStorage(() => localStorage),
});

const createUserPreferencesStore = (key: string, initialState: Partial<UserPreferencesState> = DEFAULT_STATE) => {
  const initializer: StateCreator<UserPreferencesStore> = (set) => ({
    ...DEFAULT_STATE,
    ...initialState,
    setTheme: (theme) => set({ theme }),

    setState: (state) => set(state),
    resetState: () => set(DEFAULT_STATE),
  });

  return create<UserPreferencesStore>()(
    persist(
      devtools(immer(initializer), {
        name: key,
      }),
      getPersistConfig(key)
    )
  );
};

export default createUserPreferencesStore;
