import { HTMLAttributes } from "react";

interface IconContainerProps extends HTMLAttributes<HTMLButtonElement> {}

const IconContainer = ({ children }: IconContainerProps) => {
  return (
    <button className="flex min-h-9 min-w-9 items-center justify-center rounded-md bg-secondary-bg active:scale-95">
      {children}
    </button>
  );
};

export default IconContainer;
