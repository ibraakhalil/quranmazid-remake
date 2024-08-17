import SearchInput from '@/components/common/search-input';
import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

export const QuranList = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn('flex flex-col gap-3 overflow-hidden', props.className)}>
      {children}
    </div>
  );
};

QuranList.Search = function SearchQuranList(props: HTMLAttributes<HTMLInputElement>) {
  return <SearchInput {...props} />;
};

QuranList.Content = function QuranListContent({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn('grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 overflow-auto pb-3', props.className)}
    >
      {children}
    </div>
  );
};
