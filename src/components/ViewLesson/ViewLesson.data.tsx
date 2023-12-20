import type { CollapseProps } from 'antd';

const text = `Сабақ 28:20`;

export const items: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Тақырып',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'Тақырып',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'Тақырып',
        children: <p>{text}</p>,
    },
];