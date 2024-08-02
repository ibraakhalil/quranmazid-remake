import { ListCard } from '../common/list-card';

const PageList = () => {
  const pageArray = new Array(604).fill(0);

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 bg-white">
      {pageArray.map((page, i) => (
        <ListCard key={i}>
          <ListCard.Count>{i + 1}</ListCard.Count>
          <ListCard.Content>
            <ListCard.Title>Page: {i + 1}</ListCard.Title>
          </ListCard.Content>
        </ListCard>
      ))}
    </div>
  );
};

export default PageList;
