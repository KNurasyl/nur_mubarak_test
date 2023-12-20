import React from "react";
import { Promo } from "./Promo/Promo";
import { Lessons } from "./Lessons/Lessons";
import { Contacts } from "./Contacts/Contacts";
import { WorkFooter } from "../WorkFooter";
import "../../styles/Main.scss";


export const Main = () => {
    return (
        <div className="Main">
            <Promo/>
            <Lessons/>
            <Contacts/>
            <WorkFooter/>
        </div>
    );
};