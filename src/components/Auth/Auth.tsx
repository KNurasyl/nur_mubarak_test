import React, { useState } from "react";
import { pathGoogleIcon } from "../../constants";
import { Button, Input, notification } from "antd";
import { dispatch } from "../../store";
import { login } from "../../store/auth.slice";
import "../../styles/Auth.scss";

export const Auth = ({onChange} : {onChange: (key: string) => void}) => {
    const [loginData, setLoginData] = useState<{userName: string, password: string}>({userName: "", password: ""});
    
    const changeHandler = (val: string, key: string) => {
        setLoginData(prevState => ({...prevState, [key]: val}));
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(loginData.password && loginData.userName) {
            dispatch(login(loginData));
        } else {
            notification.warning({
                message: "Пожалуйста заполните все поля.",
                placement: "bottomRight"
            });
        };
    };

    return (
        <div className="Auth">
            <div className="title">
                <h2>Войти сейчас</h2>
                <p>Привет, с возвращением 👋</p>
            </div>

            <div className="google_auth">
                <button>
                    <img src={pathGoogleIcon} alt="google_icon" />
                    Login with Google
                </button>
            </div>

            <div className="hr_border">
                <span>or Login with Email</span>
            </div>
            
            <form onSubmit={submitHandler}>
                <label>Логин</label>
                <Input placeholder="Введите вашу логин" onChange={(e) => changeHandler(e.target.value, "userName")}/>

                <label>Пароль</label>
                <Input.Password placeholder="Введите ваш пароль" onChange={(e) => changeHandler(e.target.value, "password")}/>

                <Button htmlType="submit">Войти</Button>

                <p onClick={() => onChange("register")} className="create_account">Не зарегистрированы? <span>Создайте учетную запись</span></p>
            </form>
        </div>
    );
};