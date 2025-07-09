import React from "react";
import { ArrowRight } from "lucide-react";
import "./Button.scss";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon = false,
  onClick,
  href,
  className = "",
  disabled = false,
  ...props
}) => {
  const baseClass = "btn";
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${size} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={16} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
