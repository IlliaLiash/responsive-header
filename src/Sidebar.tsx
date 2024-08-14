import { useState } from 'react';
import Plus from '../public/plus-mini.svg?react';
import Xmark from '../public/x-mark.svg?react';
import Switch from '../public/switch.svg?react';
import { MENU_SECTIONS } from './constants';
import MenuList from './MenuList';

const Sidebar = () => {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <div
      className={`relative flex flex-col h-full w-full py-[24px] px-[20px] bg-white ${
        isExtended ? 'max-w-[320px] gap-[24px]' : 'max-w-[80px] gap-[36px]'
      }`}
    >
      <Switch
        className="absolute top-1/2 right-[-12px] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        onClick={() => setIsExtended(!isExtended)}
      />
      <button
        className={` flex flex-row justify-center gap-[4px] items-center bg-button-base bg-button-gradient rounded-md ${
          isExtended ? 'px-[9px] py-[12px]' : 'p-[9px]'
        }`}
      >
        <Plus />
        {isExtended ? <span className="text-white text-sm">Create new channel</span> : null}
      </button>
      <div className="flex gap-[40px] flex-col">
        <MenuList items={MENU_SECTIONS.MAIN} isExtended={isExtended} title="Workspace" />
        <MenuList items={MENU_SECTIONS.CRM} isExtended={isExtended} title="Channels" />
        <MenuList items={MENU_SECTIONS.MANAGEMENT} isExtended={isExtended} title="Statistics & reports" />
        <div className="border-b border-b-divider"></div>
      </div>
      {isExtended ? (
        <div className="flex flex-col bg-footer rounded-lg	">
          <div className="flex flex-row px-[20px] pb-[16px] pt-[20px] border-b border-b-white justify-between">
            <span className="text-[#030712] text-sm font-medium">Get a bonus!</span>
            <button>
              <Xmark />
            </button>
          </div>
          <div className="flex px-[20px] pb-[16px] pt-[16px]">
            <span className="font-normal text-[13px] leading-[20px]">
              Activate the promo code in our Telegram bot and receive traffic on the balance
            </span>
          </div>
          <div className="flex px-[20px] pt-[16px] pr-[20px] pb-[20px] justify-end">
            <button className="px-[8px] py-[5px] bg-button-base bg-button-gradient rounded-md">
              <span className="text-white text-[13px] leading-[20px] font-medium">Get a bonus</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
