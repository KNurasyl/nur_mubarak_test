import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { notification } from "antd";

export const Promo = () => {
    const onClick = () => {
        notification.info({
            message: "الله اكبر"
        })
    };

    return (
        <div className="promo">
            <div className="content">
                <h3>скидка до 70%</h3>
                <h2>Құран Кәрім</h2>
                <p>Алла Өзінің разылығына ілескендерді амандық жолдарына салады...</p>
                <button onClick={onClick}>Толығырақ білу <ArrowRightOutlined /></button>
            </div>
        </div>
    );
};