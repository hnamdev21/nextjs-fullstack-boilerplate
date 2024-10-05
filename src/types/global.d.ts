type ExtractKey<T> = keyof T;
type ExtractValue<T> = T[ExtractKey<T>];
