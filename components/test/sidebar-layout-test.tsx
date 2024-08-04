import JuzList from '../home/JuzList';

const SidebarLayoutTest = () => {
  return (
    <div className="flex h-screen w-[350px] flex-col overflow-hidden bg-slate-400">
      <div className="bg-white py-5">tab section</div>
      <div className="flex flex-grow flex-col overflow-hidden">
        <div className="py-8">search input component</div>
        <div className="flex-grow overflow-y-auto">
          <JuzList />
        </div>
      </div>
    </div>
  );
};

export default SidebarLayoutTest;
