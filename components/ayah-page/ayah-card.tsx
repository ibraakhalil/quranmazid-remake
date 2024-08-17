import { HTMLAttributes, ReactNode } from 'react';
import FontSizeWrapper from '../test/fontsize';
import { AyahActionBar } from './ayah-action-bar';

interface AyahCardProps extends HTMLAttributes<HTMLDivElement> {}
interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const AyahCard = ({ children }: AyahCardProps) => {
  return (
    <FontSizeWrapper>
      <div className="flex gap-x-5 border-b py-5">{children}</div>
    </FontSizeWrapper>
  );
};

AyahCard.ActionBar = function ActionBar() {
  return <AyahActionBar />;
};

AyahCard.Content = function AyahContent({ children, ...props }: ContentProps) {
  return <div {...props}>{children}</div>;
};
