'use client';
import SettingBar from '../ayah-page/settingbar';
import { Tab } from './tab-composition';

const RightSidebar = () => {
  return (
    <aside className="sticky top-[--header-height] h-[calc(100dvh-var(--header-height))] overflow-hidden border-l px-4 py-3 max-xl:hidden">
      <Tab>
        <Tab.Trigger className="" />

        <Tab.Content className="">
          <Tab.ContentItem label="Translation">
            <SettingBar />
          </Tab.ContentItem>
          <Tab.ContentItem label="Reading">
            <SettingBar />
          </Tab.ContentItem>
        </Tab.Content>
      </Tab>
    </aside>
  );
};

export default RightSidebar;
