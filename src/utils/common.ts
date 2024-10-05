export const mergeSlugs = (slugs: string[]): string => {
  return slugs.join("/");
};

export const arrayAsString = (array: (string | number)[]): string => {
  return array.join(", ");
};

export const logging = ({
  componentName,
  state = "info",
  info = {},
  level = "info",
}: {
  componentName: string;
  state?: string;
  info?: any;
  level?: "info" | "error" | "warn" | "debug" | "log";
}) => {
  console[level](`[${componentName}] - ${state}`, info);
};

export const isBrowser = () => {
  return typeof window !== "undefined";
};
