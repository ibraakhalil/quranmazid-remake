import Fuse, { IFuseOptions } from 'fuse.js';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';

export const useFuzzySearch = <T>(itemList: T[], options: IFuseOptions<T>): [T[], Dispatch<SetStateAction<string>>] => {
  const [searchValue, setSearchValue] = useState<string>('');
  const fuse = useMemo(() => new Fuse<T>(itemList, options), [itemList, options]);

  const results = useMemo(() => {
    if (!searchValue) return itemList;
    return fuse.search(searchValue).map((content) => content.item);
  }, [itemList, fuse, searchValue]);

  return [results, setSearchValue];
};
