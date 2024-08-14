import IconLoader from './IconLoader';

interface MenuListProps {
  title: string;
  items: { icon: string; title: string }[];
  isExtended: boolean;
}

const MenuList = ({ items, isExtended, title }: MenuListProps) => {
  return (
    <div className="flex flex-col gap-[16px]">
      {isExtended ? <span className="text-grey">{title}</span> : null}
      <ul className="flex flex-col gap-[16px]">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-[12px]">
            <a href="#" className="flex items-center gap-[12px]">
              <IconLoader name={item.icon} />
              {isExtended ? <span className="text-menu font-medium text-base">{item.title}</span> : null}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
