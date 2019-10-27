import * as React from 'react';
import { DefaultIconSvg } from '../DefaultIconSvg';
import { IconProps } from '../types';

export const RollupIcon: React.SFC<IconProps> = ({ sizeVariant, colorVariant = 'core', ...svgProps }) => (
    <DefaultIconSvg {...svgProps} colorVariant={colorVariant} sizeVariant={sizeVariant} viewBox="0 0 24 24" transform="scale(0.9)">
        <path fill="#FF3333" d="M3.42 0a.37.37 0 0 0-.369.37v19.516c.577-1.488 1.557-3.617 3.138-6.53 5.7-10.48 6.447-11.537 9.416-11.537 1.56 0 3.134.704 4.152 1.955A7.962 7.962 0 0 0 13.102 0zm12.72 2.544c-1.19.01-2.257.466-2.698 1.498-.967 2.256 1.624 4.767 2.757 4.568 1.442-.255-.255-3.563-.255-3.563 2.205 4.156 1.697 2.884-2.29 6.7S5.596 23.62 5.002 23.958a.477.477 0 0 1-.08.043h15.637a.373.373 0 0 0 .33-.538l-4.088-8.092a.37.37 0 0 1 .144-.488A7.96 7.96 0 0 0 20.95 7.97c0-1.425-.373-2.761-1.03-3.92-.927-.952-2.43-1.516-3.779-1.506z"/>
    </DefaultIconSvg>
);
