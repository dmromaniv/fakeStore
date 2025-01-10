interface ButtonProps {
  text: string;
  disabled?: boolean;
  variant?: "outlined" | "contained";
  type?: "submit" | "button" | "reset";
  onClick: () => void;
}

const Button = ({
  text,
  onClick,
  variant = "contained",
  type = "button",
  disabled = false,
}: ButtonProps) => (
  <button
    className={`flex w-full items-center justify-center rounded p-2 font-bold transition-colors disabled:border-gray-100 disabled:hover:bg-transparent ${variant === "contained" ? "hover:bg-accent-100 bg-accent text-secondary" : "hover:bg-accent-50 border-accent-200 border-[1px] text-primary"}`}
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {text}
  </button>
);

export default Button;
