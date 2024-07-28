import { HTMLAttributes } from "react";
import AyahSidebar from "../ayah-page/sidebar";

interface LeftSidebarProps extends HTMLAttributes<HTMLDivElement> {}

const LeftSidebar = (props: LeftSidebarProps) => {
  return (
    <aside className="sticky top-[--header-height] h-[calc(100dvh-var(--header-height))] overflow-hidden bg-slate-300">
      <AyahSidebar />
    </aside>
  );
};

export default LeftSidebar;
