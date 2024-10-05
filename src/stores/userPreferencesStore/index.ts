import createUserPreferencesStore from "./store";

const useUserPreferencesStore = createUserPreferencesStore("user_preferences");

export const useUserPreferences = () => useUserPreferencesStore((state) => state);
export const useUserPreferencesTheme = () => useUserPreferencesStore((state) => state.theme);
export const useSetUserPreferencesTheme = () => useUserPreferencesStore((state) => state.setTheme);

export default useUserPreferencesStore;
