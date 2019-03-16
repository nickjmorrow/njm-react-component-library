import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import styled from "styled-components";
import { ThemeContext } from "../../styleConstants";
import { StyleConstant } from "../../typeUtilities";
import { Link, Typography } from "../atoms";
import { Collapse } from "react-collapse";

const SideNavInternal: React.SFC<Props & RouteComponentProps> = ({
  navInfos,
  location
}) => {
  const { pathname } = location;
  const getIsCurrentPathname = (route: string) => route === pathname;
  const { colors, transitions, spacing, boxShadow } = React.useContext(
    ThemeContext
  );

  const renderNavLink = (navLink: INavLink, i: number): React.ReactNode => {
    return (
      <NavElement
        spacing={spacing}
        colors={colors}
        transitions={transitions}
        key={`nav-element-${i}`}>
        <Link
          route={navLink.route}
          styleVariant={pathname === navLink.route ? "primary" : "secondary"}
          typographyProps={{ style: { marginLeft: spacing.ss8 } }}
          style={{
            width: "100%",
            height: "100%",
            padding: `${spacing.ss3} 0`
          }}>
          {navLink.label}
        </Link>
      </NavElement>
    );
  };

  const navItems: React.ReactNodeArray = [];

  const isFolder = (
    navElementOrFolder: INavLink | FolderInfo
  ): navElementOrFolder is FolderInfo => {
    return (navElementOrFolder as FolderInfo).navLinks !== undefined;
  };

  navInfos.map((navInfo, i) => {
    navItems.push(
      isFolder(navInfo) ? (
        <Folder
          folderInfo={navInfo}
          renderNavLink={renderNavLink}
          key={`folder-${i}`}
          getIsCurrentPathname={getIsCurrentPathname}
        />
      ) : (
        renderNavLink(navInfo, i)
      )
    );
  });

  return (
    <div style={{ width: spacing.ss64, boxShadow: boxShadow.bs1 }}>
      <Nav spacing={spacing} boxShadow={boxShadow}>
        <Wrapper spacing={spacing}>{navItems}</Wrapper>
      </Nav>
    </div>
  );
};

export const SideNav = withRouter(SideNavInternal);

const Nav = styled("nav")<{
  spacing: StyleConstant<"spacing">;
  boxShadow: StyleConstant<"boxShadow">;
}>`
  width: ${p => p.spacing.ss64};
  display: flex;
  position: sticky;
  top: 0;
`;

// css
const Wrapper = styled("div")<{
  spacing: StyleConstant<"spacing">;
}>`
  grid-area: nav;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  width: ${p => p.spacing.ss64};
  padding-top: ${p => p.spacing.ss4};
`;

const NavElement = styled("div")<{
  colors: StyleConstant<"colors">;
  transitions: StyleConstant<"transitions">;
  spacing: StyleConstant<"spacing">;
}>`
  cursor: pointer;
  width: ${p => p.spacing.ss64};
  transition: background-color ${p => p.transitions.medium};
  &:hover {
    background-color: ${p => p.colors.neutral.lightest};
    transition: background-color ${p => p.transitions.medium};
  }
`;

const FolderLabel: React.SFC<{ spacing: StyleConstant<"spacing"> }> = ({
  spacing,
  children
}) => (
  <LabelWrapper spacing={spacing}>
    <Typography weightVariant={2}>{children}</Typography>
  </LabelWrapper>
);

const LabelWrapper = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  padding: ${p => p.spacing.ss3} 0;
  margin-left: ${p => p.spacing.ss4};
`;

const Folder: React.SFC<{
  folderInfo: FolderInfo;
  renderNavLink: (navInfo: INavLink, i: number) => React.ReactNode;
  getIsCurrentPathname: (route: string) => boolean;
}> = ({ folderInfo, renderNavLink, getIsCurrentPathname }) => {
  const initialExpansionState = folderInfo.navLinks
    .map(nl => nl.route)
    .reduce((agg, cur) => {
      return agg || getIsCurrentPathname(cur);
    }, false);
  const [isExpanded, setIsExpanded] = React.useState(initialExpansionState);
  const toggleIsExpanded = () => setIsExpanded(prev => !prev);
  const { spacing, colors, transitions } = React.useContext(ThemeContext);
  const innerNavLinkRef = React.useRef<HTMLDivElement>(null);
  return (
    <>
      <NavElement
        spacing={spacing}
        colors={colors}
        transitions={transitions}
        onClick={toggleIsExpanded}>
        <FolderLabel spacing={spacing}>{folderInfo.label}</FolderLabel>
      </NavElement>
      <Collapse isOpened={isExpanded} springConfig={{ stiffness: 220 }}>
        <div ref={innerNavLinkRef}>
          {folderInfo.navLinks.map(renderNavLink)}
        </div>
      </Collapse>
    </>
  );
};

// types
export type NavItemProps = { label: string; route?: string };

type FolderInfo = {
  label: string;
  navLinks: INavLink[];
};

interface INavLink {
  label: string;
  route: string;
}

interface Props {
  navInfos: Array<FolderInfo | INavLink>;
}