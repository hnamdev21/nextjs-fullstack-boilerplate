import { isBrowser } from "@/utils/common";

const isJsonString = (data: unknown): boolean => {
  try {
    JSON.parse(data as string);
    return true;
  } catch (error) {
    return false;
  }
};

class LocalStorageService {
  set(key: string, data: unknown): void {
    if (!isBrowser()) {
      return;
    }

    if (isJsonString(data)) {
      const json = JSON.stringify(data);
      return localStorage.setItem(key, json);
    } else {
      return localStorage.setItem(key, data as any);
    }
  }

  setString(key: string, data: string): void {
    if (!isBrowser()) {
      return;
    }
    return localStorage.setItem(key, data);
  }

  get<T>(key: string): T | null {
    if (!isBrowser()) {
      return null;
    }

    const data: any = localStorage.getItem(key);
    if (data && isJsonString(data)) {
      return JSON.parse(data);
    } else {
      return data;
    }
  }

  remove(key: string): void {
    if (!isBrowser()) {
      return;
    }

    return localStorage.removeItem(key);
  }
}

const localStorageService = new LocalStorageService();

export default localStorageService;
