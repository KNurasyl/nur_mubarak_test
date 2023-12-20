import { jwtDecode } from 'jwt-decode';

export const decodeJWT = (token: string) => {
    return jwtDecode(token);
};