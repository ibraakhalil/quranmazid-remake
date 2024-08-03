'use client';

import { TabButtons } from '@/components/common/tab-buttons';
import React, {
  createContext,
  HTMLAttributes,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
  useTransition,
} from 'react';

type TabItem = {
  label: string;
  content: ReactNode;
};

interface TabContextProps {
  activeTabIndex: number;
  handleClick: (index: number) => void;
  registerTab: (label: string, content: ReactNode) => void;
  tabs: TabItem[];
  content: ReactNode;
  isPending: boolean;
  // isForward: boolean;
}

interface TabProps {
  children: React.ReactNode;
}

interface TabContentProps extends HTMLAttributes<HTMLDivElement> {
  loadingContent?: ReactNode | string;
}

interface ContentItemProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  children: React.ReactNode;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('Components must be used within Tab component');
  }
  return context;
};

export const Tab = ({ children }: TabProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabs, setTabs] = useState<TabItem[]>([]);
  const [isPending, startTransition] = useTransition();
  const [content, setContent] = useState<ReactNode | null>(null);

  const handleClick = (i: number) => {
    setActiveTabIndex(i);
  };

  const registerTab = useCallback((label: string, content: ReactNode) => {
    setTabs((prev) => {
      if (!prev.some((tab) => tab.label === label)) {
        return [...prev, { label, content }];
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    startTransition(() => setContent(tabs[activeTabIndex]?.content));
  }, [activeTabIndex, tabs]);

  return (
    <TabContext.Provider value={{ activeTabIndex, handleClick, registerTab, tabs, content, isPending }}>
      {children}
    </TabContext.Provider>
  );
};

Tab.Trigger = function Trigger(props: HTMLAttributes<HTMLDivElement>) {
  const { activeTabIndex, handleClick, tabs } = useTabContext();
  return (
    <div {...props}>
      <TabButtons tabs={tabs} handleClick={handleClick} activeTab={activeTabIndex} />
    </div>
  );
};

Tab.Content = function Content({ children, loadingContent, ...props }: TabContentProps) {
  const { content } = useTabContext();
  return <div {...props}>{loadingContent || content || children}</div>;
};

Tab.ContentItem = function ContentItem({ label, children }: ContentItemProps) {
  const { registerTab } = useTabContext();

  useEffect(() => {
    registerTab(label, children);
  }, [label, registerTab, children]);

  return null;
};

// 'use client';

// import React, { createContext, useContext, useState, useEffect, HTMLAttributes, useTransition } from 'react';
// import { TabButtons } from '@/components/common/tab-buttons';

// type TabItem = {
//   label: string;
// };

// interface TabContextProps {
//   activeTabIndex: number;
//   handleClick: (index: number) => void;
//   registerTab: (label: string, content: React.ReactNode) => void;
//   tabs: TabItem[];
//   isPending: boolean;
//   content: React.ReactNode;
// }

// interface TabProps {
//   children: React.ReactNode;
// }

// interface ContentItemProps {
//   label: string;
//   children: React.ReactNode;
// }

// const TabContext = createContext<TabContextProps | undefined>(undefined);

// const useTabContext = () => {
//   const context = useContext(TabContext);
//   if (!context) {
//     throw new Error('Tab components must be used within a Tab');
//   }
//   return context;
// };

// export const Tab = ({ children }: TabProps) => {
//   const [activeTabIndex, setActiveTabIndex] = useState(0);
//   const [tabs, setTabs] = useState<TabItem[]>([]);
//   const [isPending, startTransition] = useTransition();
//   const [content, setContent] = useState<React.ReactNode>(null);

//   const handleClick = (index: number) => {
//     setActiveTabIndex(index);
//     startTransition(() => {
//       setContent(tabs[index]?.content);
//     });
//   };

//   const registerTab = (label: string, tabContent: React.ReactNode) => {
//     setTabs((prevTabs) => {
//       if (!prevTabs.some((tab) => tab.label === label)) {
//         return [...prevTabs, { label, content: tabContent }];
//       }
//       return prevTabs;
//     });
//   };

//   useEffect(() => {
//     if (tabs.length > 0 && content === null) {
//       setContent(tabs[0]?.content);
//     }
//   }, [tabs, content]);

//   return (
//     <TabContext.Provider value={{ activeTabIndex, handleClick, registerTab, tabs, isPending, content }}>
//       {children}
//     </TabContext.Provider>
//   );
// };

// Tab.Trigger = function Trigger(props: HTMLAttributes<HTMLDivElement>) {
//   const { activeTabIndex, handleClick, tabs, isPending } = useTabContext();
//   return (
//     <div {...props}>
//       <TabButtons tabs={tabs} handleClick={handleClick} activeTab={activeTabIndex} isPending={isPending} />
//     </div>
//   );
// };

// Tab.Content = function Content({ ...props }: HTMLAttributes<HTMLDivElement>) {
//   return <div {...props}>{props.children}</div>;
// };

// Tab.ContentItem = function ContentItem({ label, children, ...props }: ContentItemProps) {
//   const { registerTab, isPending, content, tabs, activeTabIndex } = useTabContext();

//   useEffect(() => {
//     registerTab(label, children);
//   }, [label, children, registerTab]);

//   const isActive = tabs.findIndex((tab) => tab.label === label) === activeTabIndex;
//   if (!isActive) return null;
//   return <div {...props}>{content}</div>;
// };
