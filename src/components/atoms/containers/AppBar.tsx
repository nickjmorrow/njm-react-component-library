import * as React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '~/theming';
import { StyleConstant } from '../../../typeUtilities';
import { StyleVariant } from '../../atoms/types';
import { PAGE_MARGIN_SPACING_KEY } from '~/constants';

export const AppBar: React.FC<{
    styleVariant?: StyleVariant;
    onClick?: () => void;
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}> = ({ children, styleVariant = 1, className, onClick: handleClick, style }) => {
    const {
        colors,
        border: { borderStyle },
        spacing,
    } = React.useContext(ThemeContext);

    return (
        <Wrapper
            onClick={handleClick}
            colors={colors}
            borderStyle={borderStyle}
            styleVariant={styleVariant}
            spacing={spacing}
            boxShadow={'none'}
            className={className}
        >
            <Inner spacing={spacing} style={style}>
                {children}
            </Inner>
        </Wrapper>
    );
};

const Inner = styled('div')<{ spacing: StyleConstant<'spacing'> }>`
    margin: 0px ${p => p.spacing[PAGE_MARGIN_SPACING_KEY]};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    position: relative;
`;

const Wrapper = styled('div')<{
    boxShadow: string;
    styleVariant: StyleVariant;
    colors: StyleConstant<'colors'>;
    borderStyle: StyleConstant<'border'>['borderStyle'];
    spacing: StyleConstant<'spacing'>;
}>`
    width: 100%;
    position: relative;
    height: ${p => p.spacing.ss16};
    background-color: ${p => getBackgroundColor(p.colors, p.styleVariant)};
    display: flex;
    justify-content: center;
    box-shadow: ${p => p.boxShadow};
    box-sizing: border-box;
    border-top: ${p => getBorderTop(p.styleVariant, p.borderStyle, p.colors)};
`;

const getBorderTop = (
    styleVariant: StyleVariant,
    borderStyle: StyleConstant<'border'>['borderStyle'],
    colors: StyleConstant<'colors'>,
) => {
    switch (styleVariant) {
        case 1:
        case 2:
            return `${borderStyle.bs3} ${colors.core.cs5}`;
        case 3:
            return 'none';
    }
};

const getBackgroundColor = (colors: StyleConstant<'colors'>, styleVariant: StyleVariant) => {
    switch (styleVariant) {
        case 1:
            return colors.core.cs5;
        case 2:
        case 3:
            return colors.neutral.cs2;
    }
};
