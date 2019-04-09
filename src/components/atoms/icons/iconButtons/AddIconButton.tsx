import * as React from "react";
import { AddIcon } from "../AddIcon";
import { IconProps } from "../types";
import { StyleVariant } from "../../types";
import { IconButtonContainer } from "./IconButtonContainer";

interface Props {
  styleVariant: StyleVariant;
  isDisabled?: boolean;
}

export const AddIconButton: React.FC<IconProps & Props> = ({
  styleVariant,
  colorVariant = "core",
  isDisabled,
  ...props
}) => {
  return (
    <IconButtonContainer
      styleVariant={styleVariant}
      colorVariant={colorVariant}
      isDisabled={isDisabled}>
      <AddIcon
        colorVariant={"inherit"}
        {...props}
        style={{ display: "block" }}
      />
    </IconButtonContainer>
  );
};
