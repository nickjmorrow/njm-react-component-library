import * as React from 'react';
import { ColorVariant, Fade, StyledOption, StyledOptionList, Typography } from '~/components';
import { useThemeContext } from '~/theming';
import { MenuIcon } from '../icons';
import { Link } from '../Link';

export const MenuButton: React.FC<{
    navLinks: Array<{ label: string; route: string }>;
    align?: 'left' | 'right';
    optionMinWidth?: string;
    colorVariant?: ColorVariant;
    styleApi?: {
        iconStyle?: React.CSSProperties;
        styledOptionList?: React.CSSProperties;
    };
}> = ({ navLinks, align = 'left', optionMinWidth, colorVariant = 'secondaryDark', styleApi = {} }) => {
    const [isMenuVisible, setIsMenuVisible] = React.useState(false);
    const { spacing } = useThemeContext();
    const finalOptionWidth = optionMinWidth || spacing.ss32;
    // TODO: develop system for z-indices
    return (
        <div style={{ position: 'relative', cursor: 'pointer' }}>
            <MenuIcon
                colorVariant={colorVariant}
                onClick={() => setIsMenuVisible(isVisible => !isVisible)}
                style={styleApi.iconStyle}
            />
            {isMenuVisible && (
                <StyledOptionList
                    isMenuVisible={isMenuVisible}
                    styleApi={{
                        collapse: {
                            position: 'absolute',
                            top: '48px',
                            zIndex: 1,
                        },
                    }}
                    style={{
                        marginLeft: align === 'left' ? '-122px' : '0px',
                        ...styleApi.styledOptionList,
                        width: (styleApi.styledOptionList && styleApi.styledOptionList.width) || 'min-content',
                    }}
                >
                    {navLinks.map(nl => (
                        <Link key={nl.route} route={nl.route} onClick={() => setIsMenuVisible(false)}>
                            <StyledOption style={{ minWidth: finalOptionWidth }}>
                                <Typography>{nl.label}</Typography>
                            </StyledOption>
                        </Link>
                    ))}
                </StyledOptionList>
            )}
        </div>
    );
};
