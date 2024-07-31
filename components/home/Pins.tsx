import { CollectionCard, CollectionCardWrapper } from '../common/collection-card';
import SettingSvg from '../svg/SettingSvg';

const Pins = () => {
  const bookmarks = new Array(3).fill(0);

  return (
    <CollectionCardWrapper>
      {bookmarks.map((bookmark, i) => (
        <CollectionCard key={i}>
          <CollectionCard.Icon>
            <SettingSvg />
          </CollectionCard.Icon>
          <CollectionCard.Title>Pins</CollectionCard.Title>
          <CollectionCard.Subtitle>The Subtitle</CollectionCard.Subtitle>
        </CollectionCard>
      ))}
    </CollectionCardWrapper>
  );
};

export default Pins;
