import { HTMLAttributes } from "react";
import IconContainer from "../common/icon-container";
import SettingSvg from "../svg/SettingSvg";

interface AyahCardProps extends HTMLAttributes<HTMLDivElement> {}
interface ContentProps extends HTMLAttributes<HTMLDivElement> {}

export const AyahCard = ({ children }: AyahCardProps) => {
  return <div className="flex gap-x-5 border-b py-5">{children}</div>;
};

AyahCard.ActionBar = function ActionBar() {
  return (
    <div className="flex min-w-12 flex-col items-center gap-y-2">
      <IconContainer>
        <SettingSvg />
      </IconContainer>
      <IconContainer>
        <SettingSvg />
      </IconContainer>
      <IconContainer>
        <SettingSvg />
      </IconContainer>
      <IconContainer>
        <SettingSvg />
      </IconContainer>
    </div>
  );
};

AyahCard.Content = function AyahContent({ children }: ContentProps) {
  return <div className="w-full">{children}</div>;
};

export function ArabicContent() {
  return (
    <div className="text-justify">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, magni
      provident. Neque, accusantium laborum. Voluptate, assumenda fuga
      temporibus quisquam ratione sunt sequi dolores error iste, deserunt
      aliquam, praesentium in. Iusto.
    </div>
  );
}

export function AyahTranslation() {
  return <div className="">Translation</div>;
}
