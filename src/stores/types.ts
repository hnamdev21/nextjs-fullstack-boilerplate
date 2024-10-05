export type DefaultStoreAction<T> = {
  setState: (store: T) => void;
  resetState: () => void;
};
