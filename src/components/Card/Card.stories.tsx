import Card from './Card';
import {simpleStory, gridStory} from '../../utils/storiesUtils'

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