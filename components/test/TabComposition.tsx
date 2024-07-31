'use client';

import React, { createContext, useContext, useState, useEffect, HTMLAttributes, useTransition, Suspense } from 'react';
import { TabButtons } from '@/components/common/tab-buttons';
import dynamic from 'next/dynamic';

type TabItem = {
  label: string;
};

interface TabContextProps {
  activeTabIndex: number;
  handleClick: (index: number) => void;
  registerTab: (label: string) => void;
  tabs: TabItem[];
}

interface TabProps {
  children: React.ReactNode;
}

interface ContentItemProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  children: React.ReactNode;
  loadingContent?: React.ReactNode | null | string;
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

  const handleClick = (i: number) => {
    startTransition(() => {
      setActiveTabIndex(i);
    });
  };

  const registerTab = (label: string) => {
    setTabs((prevTabs) => {
      if (!prevTabs.some((tab) => tab.label === label)) {
        return [...prevTabs, { label }];
      }
      return prevTabs;
    });
  };

  return (
    <TabContext.Provider value={{ activeTabIndex, handleClick, registerTab, tabs }}>{children}</TabContext.Provider>
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

Tab.Content = function Content({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
};

Tab.ContentItem = function ContentItem({ label, loadingContent, children, ...props }: ContentItemProps) {
  const { activeTabIndex, registerTab, tabs } = useTabContext();

  useEffect(() => {
    registerTab(label);
  }, [label, registerTab]);

  const isActive = tabs.findIndex((tab) => tab.label === label) === activeTabIndex;

  if (!isActive) return null;

  const DynamicContent = dynamic(() => Promise.resolve(() => children), {
    loading: () => <>{loadingContent}</>,
  });

  return (
    <div {...props}>
      <DynamicContent />
    </div>
  );
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
