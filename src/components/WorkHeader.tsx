import React from "react";
import { pathLogo } from "../constants";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../styles/WorkHeader.scss";


export const WorkHeader = () => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate({pathname: `/nur_mubarak_test`})
    };

    return (
        <div className="WorkHeader">
            <header>
                <a href="#" onClick={onClickHandler}><img src={pathLogo} alt="logo" /></a>
                <MenuOutlined style={{fontSize: "25px"}}/>
            </header>
        </div>
    );
};