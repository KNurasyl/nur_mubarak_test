import { TUserState } from "../types/auth";

export const isAnyFieldEmpty = (registerData: TUserState) => {
    const { firstName, lastName, email, userName, password, verifyPassword } = registerData;
    return !firstName || !lastName || !email || !userName || !password || !verifyPassword;
};