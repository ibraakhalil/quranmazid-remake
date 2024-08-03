'use client';
import SettingSvg from '@/components/svg/SettingSvg';
import { Accordion } from '../common/accordion';

const SettingBar = () => {
  return (
    <div className="flex h-full flex-col py-4 ps-7 [padding-right:24px]">
      <Accordion>
        <Accordion.Trigger>
          <div className="flex select-none items-center gap-3">
            <SettingSvg />
            <span>Font Settings</span>
          </div>
        </Accordion.Trigger>
        <Accordion.Content>Hello Ibrahim Khalil</Accordion.Content>
      </Accordion>
    </div>
  );
};

export default SettingBar;
