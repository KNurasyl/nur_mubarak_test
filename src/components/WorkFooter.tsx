import React from "react";
import { pathLogo } from "../constants";
import { YoutubeOutlined, InstagramOutlined } from "@ant-design/icons";
import "../styles/WorkFooter.scss";


export const WorkFooter = () => {
    return (
        <div className="WorkFooter">
            <div className="content">
                <div className="logos">
                    <a href="#">
                        <img src={pathLogo} alt="logo" />
                    </a>
                </div>
                <p className="text">Кімде-кім білім жолына түссе, Алла Тағала оның жәннатқа барар жолын жеңілдетеді.</p>
            </div>
            <p className="subtext">الحمد لله</p>
        </div>
    );
};