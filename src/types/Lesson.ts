export type TLessonProps = {
    title: string,
    lessonTerm: string,
    totalCost: string,
    partCost: string,
    onClick: () => void
};

export type TLesson = {
    id: string,
    title: string,
    lessonTerm: string,
    totalCost: string,
    partCost: string
};