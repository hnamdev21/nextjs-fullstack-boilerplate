import { DefaultStoreAction } from "../types";

export type UserPreferencesState = {
  theme: "light" | "dark";
};

export type UserPreferencesAction = DefaultStoreAction<UserPreferencesState> & {
  setTheme: (theme: "light" | "dark") => void;
};

export type UserPreferencesStore = UserPreferencesState & UserPreferencesAction;
