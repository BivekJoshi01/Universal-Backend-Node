const STORAGE_KEY = "token";

interface UserToken {
  token: string | any;
  // refreshToken?: string;
  // expiresIn?: number;
  // Add other fields if needed
}

export const setUserToken = (data: UserToken): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getUserToken = (): UserToken | any => {
  const token = localStorage.getItem(STORAGE_KEY);

  // Safely check for null, "undefined", or empty string
  if (!token || token === "undefined") {
    return null;
  }

  try {
    return JSON.parse(token) as UserToken;
  } catch (e) {
    console.error("Failed to parse user token:", e);
    return null;
  }
};


export const removeUser = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.clear();
};
