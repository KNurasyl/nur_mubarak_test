import React from "react";
import { Card } from "antd";
import { TLessonProps } from "../../../../types/Lesson";


export const Lesson = ({lessonTerm, title, totalCost, partCost, onClick}: TLessonProps) => {
    return (
        <Card className="Lesson">
            <p>{lessonTerm}</p>
            <h2>{title}</h2>
            <div>
                <p>Толық курс құны</p>
                <p>{totalCost}</p>
            </div>
            <div>
                <p>Бөліп төлеу</p>
                <p>{partCost}</p>
            </div>

            <div className="pagination">
                <button>Толығырақ</button>
                <button onClick={onClick}>Сатып алу</button>
            </div>
        </Card>
    );
};