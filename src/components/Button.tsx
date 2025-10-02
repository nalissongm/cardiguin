import { ButtonHTMLAttributes, HTMLAttributes, JSX, ReactNode } from "react";
import type * as CSS from "csstype";

type variantType = "default" | "secondary" | "text";

type stylesType = {
  text: CSS,
  default: CSS,
  secondary: CSS
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: variantType
}

export function Button({children, variant= "default",  ...rest}: ButtonProps): JSX.Element {
  const styles: stylesType = {
    text: "bg-none text-[var(--primary)] ",
    default: "rounded-md bg-[var(--primary)] text-white w-full py-5 text-2xl",
    secondary: ""
  }

  return (
    <button 
      className={`${styles[variant]} cursor-pointer text-`}
      {...rest}
    >{children}</button>
  )
}