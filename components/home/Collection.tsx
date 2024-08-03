'use client';
import { Tab } from '../common/tab-composition';
import Bookmark from './Bookmark';
import LastRead from './LastRead';
import Pins from './Pins';

const Collection = () => {
  return (
    <div className="my_conatainer py-10">
      <Tab>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Collection</h1>
          <Tab.Trigger />
        </div>

        <Tab.Content className="py-4">
          <Tab.ContentItem label="Last Read">
            <LastRead />
          </Tab.ContentItem>
          <Tab.ContentItem label="Bookmark">
            <Bookmark />
          </Tab.ContentItem>
          <Tab.ContentItem label="Pins">
            <Pins />
          </Tab.ContentItem>
        </Tab.Content>
      </Tab>
    </div>
  );
};

export default Collection;
