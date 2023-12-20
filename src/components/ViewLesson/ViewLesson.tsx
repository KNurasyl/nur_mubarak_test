import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { LessonsData } from "../Main/Lessons/Lessons.data";
import { TLesson } from "../../types/Lesson";
import { Collapse } from 'antd';
import { items } from "./ViewLesson.data";
import "../../styles/ViewLesson.scss";
import { WorkFooter } from "../WorkFooter";


export const ViewLesson = () => {
    const { id } = useParams();
    const [lesson, setLesson] = useState<TLesson[]>(LessonsData.filter(item => item.id === id));

    return (
        <div className="ViewLesson">
            <h2>{lesson[0].title}</h2>
            <p>Расында, адамдар өзін өзгертпейінше, Алла олардың жағдайын өзгертпейді.</p>

            <h3>Дәріс материалдары</h3>

            <Collapse accordion items={items} />

            <p className="descriptionTitle">Сипаттама</p>

            <p className="descriptionText">
                Білім іздеу – Ислам дінін ұстанушы әрбір адам үшін қасиетті парыз. 
                Адамзаттың ақырғы пайғамбары Мұхаммедтің (с.ғ.с.) Алла Тағаладан естіген алғашқы сөзі: 
                «Барлық нәрсені жаратқан Раббыңның атымен оқы» (96-сүре, 1-аят). Алла тағала бұл аятпен барша адамдарды білім алуға, 
                өз ақылымен жұмыс істеуге, сауатты болуға шақырады.
            </p>

            <div className="price_block">
                <div>
                    <p>Толық курс құны</p>
                    <p>{lesson[0].totalCost}</p>
                </div>
                <div>
                    <p>Бөліп төлеу</p>
                    <p>{lesson[0].partCost}</p>
                </div>
                <button>Сатып алу</button>
            </div>

            <WorkFooter/>
        </div>
    );
};