import SettingBar from "../ayah-page/settingbar";

const RightSidebar = () => {
  return (
    <aside className="sticky top-[--header-height] h-[calc(100dvh-var(--header-height))] overflow-hidden border-l max-xl:hidden">
      <SettingBar />
    </aside>
  );
};

export default RightSidebar;
