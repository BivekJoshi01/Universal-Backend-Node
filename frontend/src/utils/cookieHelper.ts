const USER_ID_KEY = "loggedUserId";
const USER_ROLE_KEY = "loggedRole";

const setItem = (key: string, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = <T = string>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (!item || item === "undefined") return null;

  try {
    return JSON.parse(item) as T;
  } catch (error) {
    console.error(`Failed to parse value for key: ${key}`, error);
    return null;
  }
};

export const setLoggedUserId = (id: string): void => setItem(USER_ID_KEY, id);
export const setLoggedUserRole = (role: string): void =>
  setItem(USER_ROLE_KEY, role);

export const getUserId = (): string | null => getItem<string>(USER_ID_KEY);
export const getUserRole = (): string | null => getItem<string>(USER_ROLE_KEY);
