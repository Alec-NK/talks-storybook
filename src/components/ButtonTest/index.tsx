import React from "react";

type ButtonTypes = "primary" | "secondary" | "danger";

interface ButtonTestProps extends React.HTMLProps<HTMLButtonElement> {
  children: string;
  type: ButtonTypes;
}

export const ButtonTest: React.FC<ButtonTestProps> = ({
  children,
  type,
  ...props
}) => {
  const buttons: Record<string, string> = {
    primary: "blue",
    secondary: "green",
    danger: "red",
  };

  return (
    <button
      style={{ backgroundColor: buttons[type], color: "white" }}
      {...props}
    >
      {children}
    </button>
  );
};
