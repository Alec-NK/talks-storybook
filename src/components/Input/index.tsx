import React from "react";

interface InputProps {
  label: string;
  value?: string;
  errorText?: string;
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ label, errorText, ...rest }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <label>{label}</label>
      <input style={{ width: "20%" }} />
      {errorText && (
        <div style={{ color: "red", fontSize: 14 }}>{errorText}</div>
      )}
    </div>
  );
};
