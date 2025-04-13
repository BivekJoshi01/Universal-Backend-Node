import Axios from "axios";
import { jwtDecode } from "jwt-decode";
import { getBaseUrl, getDocUrl } from "./getBaseUrl";
import { getUserToken, removeUser } from "./cookieHelper";

const BASEURL = getBaseUrl();
export const DOC_URL = getDocUrl();

export const axiosInstance = Axios.create({
    baseURL: BASEURL,
    timeout: 20000,
});

axiosInstance.defaults.headers.common["Accept"] = "*/*";

interface JwtPayload {
    exp: number;
    iat: number;
}

// Token validation
const checkIfExpired = (token: string): boolean => {
    try {
        const decoded = jwtDecode<JwtPayload>(token);
        const now = new Date().getTime();

        if (now > decoded.exp * 1000) {
            return true;
        }

        if (now < decoded.iat * 1000 - 60000) {
            alert("Wrong System Time \n Please correct your system time");
            return true;
        }

        return false;
    } catch (error) {
        console.error("Token decode failed:", error);
        return true;
    }
};

axiosInstance.interceptors.request.use((config: any) => {
    const data = getUserToken();
    const token = data;
    config.withCredentials = false;

    if (data) {
        if (!checkIfExpired(token)) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${data}`,
            };
        } else {
            removeUser();
            window.location.href = "#/";
        }
    }

    return config;
});


// axiosInstance.interceptors.request.use(
//   (config) => {
//     try {
//       const authDataString = localStorage.getItem("token");
//       const authData = JSON.parse(authDataString);
//       let token = authData;
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );