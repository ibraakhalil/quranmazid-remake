import IconContainer from '../common/icon-container';
import { BookIcon, BookmarkIcon, PlayIcon } from '../svg/action-icons';
import { ThreeDotIcon } from '../svg/ThreeDotSvg';

export const AyahActionBar = () => {
  return (
    <div className="flex min-w-12 flex-col items-center gap-y-2">
      <IconContainer hover>
        <PlayIcon className="size-5" />
      </IconContainer>
      <IconContainer hover>
        <BookIcon className="size-5" />
      </IconContainer>
      <IconContainer hover>
        <BookmarkIcon className="size-5" />
      </IconContainer>
      <IconContainer hover>
        <ThreeDotIcon className="size-5" />
      </IconContainer>
    </div>
  );
};
