import Button from './Button';
import { flexStory } from '../../utils/storiesUtils';
import AppleImg from '@/assets/icons/apple.svg?react';
import GoogleImg from '@/assets/icons/google.svg?react';
import SpinnerImg from '@/assets/icons/gear-spinner.svg?react';

import IconButton from './IconButton';

const commonProps = {
    children: 'Click me!',
}

export const WithIcons = flexStory(IconButton, [
    {
        ...commonProps,
        icon: AppleImg,
        children: 'SIGN IN WITH APPLE'
    },
    {
        ...commonProps,
        icon: GoogleImg,
        children: 'SIGN IN WITH GOOGLE'
    },
    {
        icon: SpinnerImg,
        children: 'LOADING...',
        iconProps: {
            color: 'black'
        }
    }
]);

export const Background = flexStory(Button, [
    {
        ...commonProps,
        bg: 'black',
        color: 'white',
    },
    {
        ...commonProps,
        bg: 'blue',
        color: 'white',
    },
    {
        ...commonProps,
        bg: 'red',
        color: 'white',
    },
    {
        ...commonProps,
        bg: 'yellow',
    },
    {
        ...commonProps,
        bg: 'green',
        color: 'white',
    }, 
    {
        ...commonProps,
    }
]);