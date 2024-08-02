import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

type ListCardProps = HTMLAttributes<HTMLDivElement>;

export function ListCard(props: ListCardProps) {
  return (
    <div {...props} className="group flex items-center gap-4 rounded-md border px-4 py-3">
      {props.children}
    </div>
  );
}

ListCard.Count = function CardCount(props: ListCardProps) {
  return (
    <div className="flex size-8 rotate-45 items-center justify-center rounded-md bg-secondary-bg group-hover:bg-primary group-hover:text-white">
      <span className="-rotate-45 text-sm">{props.children}</span>
    </div>
  );
};

ListCard.Content = function CardContent(props: ListCardProps) {
  return (
    <div className={cn('space-y-1', props.className)} {...props}>
      {props.children}
    </div>
  );
};

ListCard.Title = function CardTitle(props: ListCardProps) {
  return <h3 className="text-sm text-pure">{props.children}</h3>;
};

ListCard.Subtitle = function CardSubtitle(props: ListCardProps) {
  return <p className="text-xs text-subtitle-color">{props.children}</p>;
};
