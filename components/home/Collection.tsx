"use client";
import { useState } from "react";
import Tabs from "../common/tabs";
const tabs = [{ label: "Last Read" }, { label: "Bookmark" }, { label: "Pins" }];

const Collection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="my_conatainer">
      <div className="flex items-center justify-between">
        <h1>Collection</h1>
        <div className="min-w-[360px]">
          <Tabs tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
      </div>
      <div>content</div>
    </div>
  );
};

export default Collection;
