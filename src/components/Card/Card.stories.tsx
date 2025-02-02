import Card from './Card';
import React, { FC } from 'react';

const simpleStory = (Component: FC<any>, defaultProps?) => (props) => (
    <Component {...defaultProps} {...props} />
)

const gridStory = (Component: FC<any>, items?) => (props) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {items.map((item, index) => (
            <Component key={index} {...item} />
        ))}
    </div>
)

const commonProps = {
    children: 'Elevation ${elevation}',
};


export const Default = simpleStory(Card, {
    ...commonProps,
    children: 'This is my card',
});

export const Elevation = gridStory(Card, [
    { ...commonProps, elevation: 1 },
    { ...commonProps, elevation: 2 },
    { ...commonProps, elevation: 3 },
    { ...commonProps, elevation: 4 },
    { ...commonProps, elevation: 5 },
]);