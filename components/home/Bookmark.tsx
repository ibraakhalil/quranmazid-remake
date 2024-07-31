import { CollectionCard, CollectionCardWrapper } from '../common/collection-card';
import SettingSvg from '../svg/SettingSvg';

const Bookmark = () => {
  const bookmarks = new Array(10).fill(0);

  return (
    <CollectionCardWrapper>
      {bookmarks.map((bookmark, i) => (
        <CollectionCard key={i}>
          <CollectionCard.Icon>
            <SettingSvg />
          </CollectionCard.Icon>
          <CollectionCard.Title>Bookmark</CollectionCard.Title>
          <CollectionCard.Subtitle>The Subtitle</CollectionCard.Subtitle>
        </CollectionCard>
      ))}
    </CollectionCardWrapper>
  );
};

export default Bookmark;
