import * as React from "react";

export type Colors =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

export type ColorsOutline =
  | "outline-primary"
  | "outline-secondary"
  | "outline-success"
  | "outline-danger"
  | "outline-warning"
  | "outline-info"
  | "outline-light"
  | "outline-dark";

interface BootstrapSwitchButtonProps {
  /**
   * Function to call when the SwitchButton is changed
   */
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  disabled?: boolean;
  labelOn?: string;
  labelOff?: string;
  styleOn?: Colors | ColorsOutline;
  styleOff?: Colors | ColorsOutline;
  size?: "xs" | "sm" | "lg";
  className?: string;
  width?: number;
  height?: number;
}

const BootstrapSwitchButton: React.FC<BootstrapSwitchButtonProps>;

export default BootstrapSwitchButton;
