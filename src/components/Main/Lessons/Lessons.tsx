import React from "react";
import { Input } from "antd";
import { Lesson } from "./Lesson/Lesson";
import { LessonsData } from "./Lessons.data";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

export const Lessons = () => {
    const navigate = useNavigate();

    const onClickHandler = (id: string) => {
        navigate({pathname: `lesson/${id}`})
    };

    return (
        <div className="Lessons">
            <h3>Дәрістер</h3>
            <p>Аса мейрімді Аллаһтың атымен بسم الله</p>

            <Search placeholder="Дәрістерді іздеу" allowClear/>

            <div className="content">
                {LessonsData.map(item => (<Lesson key={item.id} title={item.title} lessonTerm={item.lessonTerm} totalCost={item.totalCost} partCost={item.partCost} onClick={() => onClickHandler(item.id)}/>))}
            </div>
        </div>
    );
};