import { ButtonHTMLAttributes, JSX, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({children, ...rest}: ButtonProps): JSX.Element {
  return (
    <button 
      className="rounded-md bg-[var(--primary)] text-white w-full py-5 text-2xl"
      {...rest}
    >{children}</button>
  )
}