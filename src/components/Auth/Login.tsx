import React, { useState } from "react";
import { Auth } from "./Auth";
import { Register } from "./Register";


export const Login = () => {
    const [activeTab, setActiveTab] = useState<string>("auth");
    const onChange = (key: string) => setActiveTab(key);

    return (
        <div className="Login">
            {activeTab === "auth" && <Auth onChange={onChange}/>}
            {activeTab === "register" && <Register onChange={onChange}/>}
        </div>
    );
};