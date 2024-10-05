export const timestampToDateTime = (
  timestamp: string | null,
  locales: Intl.LocalesArgument,
  config?: Intl.DateTimeFormatOptions
) => {
  if (!timestamp) return "";

  return new Date(timestamp).toLocaleDateString(locales, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    ...config,
  });
};

export const conciseText = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

export const toReadable = (text: string) => {
  return text
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const toSnakeCase = (text: string) => {
  return text
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("_");
};

export const toKebabCase = (text: string) => {
  return text
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
};

export const toCamelCase = (text: string) => {
  return text
    .split(" ")
    .map((word, index) => (index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()))
    .join("");
};

export const toPascalCase = (text: string) => {
  return text
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};

export const toCapitalCase = (text: string) => {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
};

export const toUpperCaseWithUnderscores = (text: string) => {
  return text.toUpperCase().split(" ").join("_");
};
