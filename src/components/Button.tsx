import { ButtonHTMLAttributes, HTMLAttributes, JSX, ReactNode } from "react";

type variantType = "default" | "secondary" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: variantType
}

export function Button({children, variant= "default",  ...rest}: ButtonProps): JSX.Element {
  const styles = {
    default: "rounded-md bg-[var(--primary)] text-white w-full py-5 text-2xl",
    secondary: "",
    text: "bg-none text-[var(--secondary)]"
  }
  console.log(styles[variant])

  return (
    <button 
      className={`${styles[variant]} cursor-pointer`}
      {...rest}
    >{children}</button>
  )
}