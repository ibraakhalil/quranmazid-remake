import { CollectionCard, CollectionCardWrapper } from '../common/collection-card';
import SettingSvg from '../svg/SettingSvg';

const LastRead = () => {
  const arr = Array(4).fill(0);

  return (
    <CollectionCardWrapper>
      {arr.map((item, i) => (
        <CollectionCard key={i}>
          <CollectionCard.Icon>
            <SettingSvg />
          </CollectionCard.Icon>
          <CollectionCard.Title>Last Read</CollectionCard.Title>
          <CollectionCard.Subtitle>The Subtitle</CollectionCard.Subtitle>
        </CollectionCard>
      ))}
    </CollectionCardWrapper>
  );
};

export default LastRead;
