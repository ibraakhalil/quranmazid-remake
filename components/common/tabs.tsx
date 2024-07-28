"use client";
import { HtmlHTMLAttributes, useState } from "react";

interface tabtype {
  label: string;
}

interface TabsProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  tabs: tabtype[];
  activeTab: number;
  setActiveTab(i: number): void;
}

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
  return (
    <div className="relative flex h-9 items-center overflow-hidden rounded-full border-2 border-secondary-bg bg-secondary-bg">
      {tabs.map((tab, i) => (
        <button
          onClick={() => setActiveTab(i)}
          key={tab.label}
          className="z-10 h-full w-full text-sm"
        >
          {tab.label}
        </button>
      ))}

      <span
        style={{
          width: `${100 / tabs.length}%`,
          transform: `translateX(${activeTab * 100}%)`,
        }}
        className="absolute h-full rounded-full bg-primary-bg duration-200"
      />
    </div>
  );
};

export default Tabs;
