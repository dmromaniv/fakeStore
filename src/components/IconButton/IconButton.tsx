import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  color?: "accent" | "danger";
  onClick: () => void;
}

const IconButton = ({
  children,
  disabled = false,
  color = "accent",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`rounded-xl p-2 transition-colors hover:cursor-pointer ${color === "accent" ? "hover:bg-accent-50" : "hover:bg-danger-100"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default IconButton;
