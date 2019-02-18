import * as React from "react";
import { IconProps, IconDisplayProps } from "./types";
import { getColor } from "./iconServices";
import styled from "styled-components";
import { ThemeContext, getStyles } from "~/styleConstants";

export const TrashIcon: React.SFC<IconProps> = ({
  sizeVariant = 2,
  colorVariant = "primaryLight"
}) => {
  const theme = React.useContext(ThemeContext);
  const {
    colors,
    icons: { iconSizes }
  } = getStyles(theme);
  return (
    <Svg
      aria-hidden="true"
      data-icon="trash"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      size={iconSizes[sizeVariant]}
      color={getColor(colorVariant, colors)}>
      <path
        fill="currentColor"
        d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm415.2 56.7L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32.8 140.7c-.4-6.9 5.1-12.7 12-12.7h358.5c6.8 0 12.3 5.8 11.9 12.7z"
      />
    </Svg>
  );
};

const Svg = styled("svg")<IconDisplayProps>`
  height: ${p => p.size};
  width: ${p => p.size};
  color: ${p => p.color};
`;