import React from "react";
import { pathLogo } from "../constants";
import { MenuOutlined } from "@ant-design/icons";
import "../styles/WorkHeader.scss";


export const WorkHeader = () => {
    return (
        <div className="WorkHeader">
            <header>
                <a href="#"><img src={pathLogo} alt="logo" /></a>
                <MenuOutlined style={{fontSize: "25px"}}/>
            </header>
        </div>
    );
};