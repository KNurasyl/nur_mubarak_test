import axios from "axios";
import { decodeJWT } from "../services/jwtDecoder";
import { TUser } from "../types/auth";


class ApiConnector {
    public token: string | undefined;
    private refresh: string | undefined;
    private timer: number | undefined;

    private async call<Request, Response>({ path, method = 'get', body }: { path: string, method?: string, body?: Request }): Promise<Response> {
        if (!this.token) throw new Error('No Token');

        try {
            if (!this.isValid()) await this.refreshToken();

            const { data } = await axios("" + path, {
                method, data: body,
                headers: {"Authorization": `Bearer ${this.token}`},
                validateStatus: status => (status >= 200 && status < 404)
            });
            return data;
        } catch (e: any) {
            throw new Error(e);
        };
    };

    private isValid(): boolean {
        if (!this.token) {
            return false;
        } else {
            const { exp } = decodeJWT(this.token);
            return !!exp && (exp * 1000) > Date.now() + 2000;
        };
    };

    private async refreshToken(): Promise<void> {
        if (!this.refresh)  throw new Error('No Refresh Token');
        try {
            const res = await axios.get("http://localhost:3000/refresh");
            const { data: { accessToken, refreshToken } } = res.data;
            this.token = accessToken;
            this.refresh = refreshToken;
            this.timeForRefresh();
        } catch (e: any) {
            throw new Error('Refresh Token Expired! Logging out');
        };
    };

    private timeForRefresh() {
        if (!this.refresh) throw new Error('No Refresh Token');
        try {
            const data = { ...decodeJWT(this.refresh) };
            const expirationTime = data.exp !== undefined ? data.exp * 1000 : 0;
            const untilTime = (expirationTime - Date.now()) - 5000;
            this.timer = window.setTimeout(() => {
                clearTimeout(this.timer);
                this.refreshToken();
            }, untilTime);
        } catch (e: any) {
            throw new Error('Refresh Token Expired! Logging out');
        };
    };

    public async register(data: TUser) {
        try {
            const res = await axios.post("http://localhost:3000/registration", data);
            const { data: { accessToken, refreshToken, user } } = res.data;
            this.token = accessToken;
            this.refresh = refreshToken;
            this.timeForRefresh();
            return user;
        } catch (e) {
            throw new Error("Регистрация не прошла.");
        };
    };

    public async login({ userName, password } : { userName: string, password: string }) {
        try {
            const res = await axios.post("http://localhost:3000/login", {userName, password});
            const { data: { accessToken, refreshToken, user } } = res.data;
            this.token = accessToken;
            this.refresh = refreshToken;
            this.timeForRefresh();
            return user;
        } catch (e) {
            console.log(e);
        };
    };
}

export const apiConnector = new ApiConnector()
