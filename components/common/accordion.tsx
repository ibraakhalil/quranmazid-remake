"use client";
import {
  createContext,
  HTMLAttributes,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import DownArrow from "../svg/DownArrow";

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {}

interface AccordionContextProps {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(
  undefined,
);

export const Accordion = ({ children }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionContext.Provider value={{ isActive, setIsActive }}>
      <div className="w-full overflow-hidden">{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.Trigger = function AccordionTrigger({ children }: AccordionProps) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionTrigger must be used within an Accordion");
  }
  const { isActive, setIsActive } = context;

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className="flex w-full cursor-pointer items-center justify-between py-2"
    >
      {children}
      <DownArrow />
    </div>
  );
};

Accordion.Content = function AccordionContent({ children }: AccordionProps) {
  const expandRef = useRef<HTMLDivElement>(null);
  const [clientHeight, setClientHeight] = useState(0);

  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionContent must be used within an Accordion");
  }
  const { isActive } = context;

  useEffect(() => {
    if (expandRef.current) {
      setClientHeight(expandRef.current.clientHeight);
    }
  }, []);

  return (
    <div
      style={{ height: isActive ? clientHeight : "0px" }}
      className="transition-all duration-200"
    >
      <div ref={expandRef}>{children}</div>
    </div>
  );
};
