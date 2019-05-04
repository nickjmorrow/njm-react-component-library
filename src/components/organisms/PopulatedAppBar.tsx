import * as React from "react";
import {
  AppBar,
  Typography,
  GithubIcon,
  StyleVariant,
  ColorVariant,
  Link,
  MenuIcon
} from "../atoms";
import { githubLink } from "~/constants";
import { ThemeContext, mediaWidth } from "~/styleConstants";
import { getFinalShowBoxShadow } from "~/styleConstants/themeUtilities";
import Media from "react-media";
import { MobileMenu } from "./MobileMenu";
import { GetComponentProps } from "~/typeUtilities";
import { SideNav } from "./SideNav";
import { Fade } from "../animations";

export const PopulatedAppBar: React.SFC<{
  appName: React.ReactNode;
  styleVariant?: StyleVariant;
  rightComponents?: React.ReactNode;
  leftComponents?: React.ReactNode;
  showBoxShadow?: boolean;
  navInfos?: GetComponentProps<typeof SideNav>["navInfos"];
}> = ({
  appName,
  styleVariant = "primary",
  leftComponents,
  rightComponents,
  showBoxShadow,
  navInfos
}) => {
  const { spacing, defaultShowBoxShadow } = React.useContext(ThemeContext);
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const finalShowBoxShadow = getFinalShowBoxShadow(
    showBoxShadow,
    defaultShowBoxShadow
  );

  // TODO: handle case where no navInfos are passed in
  return (
    <Media query={`(max-width: ${mediaWidth.mobileLandscape})`}>
      {(matches: boolean) => (
        <AppBar
          style={{ justifyContent: matches ? "center" : "space-between" }}
          styleVariant={styleVariant}
          showBoxShadow={finalShowBoxShadow}>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <Link route={"/"}>
              <Typography
                sizeVariant={6}
                weightVariant={5}
                colorVariant={getColorVariant(styleVariant)}>
                {appName}
              </Typography>
            </Link>
            {leftComponents}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {rightComponents}
            {matches ? (
              <MenuIcon
                style={{ position: "absolute", right: "15px" }}
                onClick={() => setIsMenuVisible(!isMenuVisible)}
              />
            ) : (
              <a href={githubLink} style={{ marginLeft: spacing.ss4 }}>
                <GithubIcon
                  colorVariant={getIconColorVariant(styleVariant)}
                  sizeVariant={3}
                />
              </a>
            )}
          </div>

          <Fade
            in={isMenuVisible && navInfos !== undefined}
            style={{ position: "absolute", top: "0px", left: "0px" }}>
            <MobileMenu
              navInfos={navInfos!}
              onClose={() => setIsMenuVisible(false)}
            />
          </Fade>
        </AppBar>
      )}
    </Media>
  );
};

const getColorVariant = (styleVariant: StyleVariant): ColorVariant => {
  switch (styleVariant) {
    case "primary":
      return "background";
    case "secondary":
    case "tertiary":
      return "primaryDark";
  }
};

const getIconColorVariant = (styleVariant: StyleVariant): ColorVariant => {
  switch (styleVariant) {
    case "primary":
      return "secondaryLight";
    case "secondary":
    case "tertiary":
      return "secondaryDark";
  }
};
