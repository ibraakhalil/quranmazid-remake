'use client';
import { cn } from '@/utils/cn';
import { HtmlHTMLAttributes, useTransition } from 'react';

interface tabtype {
  label: string;
}

interface TabsProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  tabs: tabtype[];
  activeTab: number;
  handleClick(i: number): void;
}

export const TabButtons = ({ tabs, activeTab, handleClick }: TabsProps) => {
  return (
    <div className="relative flex h-9 items-center overflow-hidden rounded-full border-2 border-secondary-bg bg-secondary-bg">
      {tabs.map((tab, i) => (
        <button
          onClick={() => handleClick(i)}
          key={tab.label}
          className={cn('z-10 h-full w-full min-w-[100px] text-sm duration-300', { 'text-white': activeTab === i })}
        >
          {tab.label}
        </button>
      ))}

      <span
        style={{
          width: `${100 / tabs.length}%`,
          transform: `translateX(${activeTab * 100}%)`,
        }}
        className="absolute h-full rounded-full bg-primary-bg transition-transform duration-300 ease-in-out"
      />
    </div>
  );
};
