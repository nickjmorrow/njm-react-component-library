import * as React from "react";
import styled from "styled-components";
import { fullName, githubLink } from "../../constants";
import { ThemeContext } from "../../styleConstants";
import { GithubIcon, InvisibleLink } from "../atoms";
import { Typography } from "../atoms/typography/Typography";
import { StyleConstant } from "../../typeUtilities";

const currentYear = new Date().getFullYear();
const defaultText = `© ${currentYear} ${fullName}`;

export const Footer: React.FC<{
  text?: string;
  style?: React.CSSProperties;
}> = ({ text = defaultText, style }) => {
  const { colors, spacing } = React.useContext(ThemeContext);
  return (
    <StyledFooter colors={colors} spacing={spacing} style={style}>
      <Typography colorVariant="secondaryDark" sizeVariant={2}>
        {text}
      </Typography>
      <InvisibleLink href={githubLink}>
        <GithubIcon sizeVariant={2} colorVariant={"secondaryDark"} />
      </InvisibleLink>
    </StyledFooter>
  );
};

interface DisplayProps {
  colors: StyleConstant<"colors">;
  spacing: StyleConstant<"spacing">;
}

const StyledFooter = styled("div")<DisplayProps>`
  background-color: ${p => p.colors.neutral.lightest};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.spacing.ss2};
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
`;
