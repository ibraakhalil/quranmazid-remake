import { ChangeEvent, useState } from 'react';
import { ListCard } from '../common/list-card';
import { QuranList } from '../common/list-quran';

const totalPages = 604;
const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

const PageList = () => {
  const [searchValue, setSearchValue] = useState('');
  const filteredPages = searchValue ? pages.filter((page) => page.toString().includes(searchValue)) : pages;

  return (
    <QuranList>
      <QuranList.Search
        className="me-[--padding-right]"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
      />
      <QuranList.Content className="pe-[--padding-right]">
        {filteredPages.map((page, i) => (
          <ListCard key={i}>
            <ListCard.Count>{page}</ListCard.Count> {/* Display the actual page number */}
            <ListCard.Content>
              <ListCard.Title>Page: {page}</ListCard.Title> {/* Display the actual page number */}
            </ListCard.Content>
          </ListCard>
        ))}
      </QuranList.Content>
    </QuranList>
  );
};

export default PageList;
