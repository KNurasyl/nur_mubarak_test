import React, { useState } from "react";
import { Button, Input, notification } from "antd";
import { TUserState } from "../../types/auth";
import { isAnyFieldEmpty } from "../../services/helpers";
import { dispatch } from "../../store";
import { register } from "../../store/auth.slice";
import "../../styles/Register.scss";


export const Register = ({onChange} : {onChange: (key: string) => void}) => {
    const [registerData, setRegisterData] = useState<TUserState>({    
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
        verifyPassword: ""
    });

    const changeHandler = (val: string, key: string) => {
        setRegisterData(prevState => ({...prevState, [key]: val}));
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!isAnyFieldEmpty(registerData)) {
            if(registerData.password === registerData.verifyPassword) {
                dispatch(register(registerData));
            } else {
                notification.warning({
                    message: "Неправильно повторили пароль.",
                    placement: "bottomRight"
                });
            };
        } else {
            notification.warning({
                message: "Пожалуйста заполните все поля.",
                placement: "bottomRight"
            });
        };
    };

    return (
        <div className="Register">
            <div className="title">
                <h2>Регистрация</h2>
            </div>

            <form onSubmit={submitHandler}>
                <Input placeholder="Имя" onChange={(e) => changeHandler(e.target.value, "firstName")}/>
                <Input placeholder="Отчество" onChange={(e) => changeHandler(e.target.value, "middleName")}/>
                <Input placeholder="Фамилия" onChange={(e) => changeHandler(e.target.value, "lastName")}/>
                <Input placeholder="Почта" onChange={(e) => changeHandler(e.target.value, "email")}/>
                <Input placeholder="Логин" onChange={(e) => changeHandler(e.target.value, "userName")}/>
                <Input.Password placeholder="Пароль" onChange={(e) => changeHandler(e.target.value, "password")}/>
                <Input.Password placeholder="Подтвердите пароль" onChange={(e) => changeHandler(e.target.value, "verifyPassword")}/>
                <Button htmlType="submit">Регистрация</Button>

                <p onClick={() => onChange("auth")} className="login_account">Уже есть аккаунт? <span>Войти</span></p>
            </form>
        </div>
    );
};