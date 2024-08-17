import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

interface IconContainerProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  hover?: boolean;
}

const IconContainer = ({ children, hover, className }: IconContainerProps) => {
  return (
    <button
      className={cn(
        'flex min-h-9 min-w-9 items-center justify-center rounded-md bg-secondary-bg active:scale-95',
        className,
        {
          'rounded-full bg-transparent hover:bg-secondary-bg': hover,
        },
      )}
    >
      {children}
    </button>
  );
};

export default IconContainer;
