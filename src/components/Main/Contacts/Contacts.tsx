import React from "react";
import { Input } from "antd";

export const Contacts = () => {
    return (
        <div className="Contacts">
            <form>
                <h3>Кеңес алу үшін өтініш қалдырыңыз</h3>

                <div className="inputs">
                    <Input placeholder="Толық аты"/>
                    <Input placeholder="Телефон нөмірі"/>
                </div>

                <button>Өтініш жіберу</button>
            </form>
        </div>
    );
};