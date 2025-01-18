import { styled, Tooltip } from "@mui/material";
import { CSSProperties } from "react";

const Visual = styled("img")<{
  alt: string;
  src: string;
  style?: CSSProperties;
}>(({ style = { maxHeight: "100px", maxWidth: "100px" } }) => ({ ...style }));

export const Icon = ({
  title,
  ...props
}: {
  className?: string;
  onClick?: () => void;
  src: string;
  style?: CSSProperties;
  title?: string;
}) => {
  const icon = <Visual {...props} alt={title ?? "Icon"} />;
  return title ? <Tooltip title={title}>{icon}</Tooltip> : icon;
};
