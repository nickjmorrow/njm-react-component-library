import * as React from "react";
import { Paper, ThemeContext } from "react-component-library";
/* tslint:disable-next-line */

export const DisplayPaper: React.SFC<{
  customStyle?: React.CSSProperties;
}> = ({ children, customStyle }) => {
  const { spacing } = React.useContext(ThemeContext);
  const style = {
    marginBottom: spacing.ss12,
    width: "max-content",
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "space-around",
    alignItems: "center",
    maxWidth: "700px",
    padding: spacing.ss6
  };
  return <Paper style={{ ...style, ...customStyle }}>{children}</Paper>;
};
