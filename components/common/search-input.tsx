import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';
import SearchSvg from '../svg/SearchSvg';

interface SearchProps extends  HTMLAttributes<HTMLInputElement> {

}

const SearchInput = (props: SearchProps) => {
  return (
    <div
      className={cn('flex h-10 flex-shrink-0 items-center gap-3 rounded-full bg-secondary-bg px-4', props.className)}
    >
      <input
        {...props}
        type="text"
        className="w-full bg-transparent text-sm outline-none"
      />
      <SearchSvg className="size-4" />
    </div>
  );
};

export default SearchInput;
