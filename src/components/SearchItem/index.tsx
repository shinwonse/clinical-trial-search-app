import { Dispatch, SetStateAction } from 'react';

type ItemType = {
  sickCd: string;
  sickNm: string;
};

type SearchItemProps = {
  item: ItemType;
  active: boolean;
  setSelected: Dispatch<SetStateAction<ItemType>>;
  setHovered: Dispatch<SetStateAction<ItemType>>;
};

function SearchItem({
  item,
  active,
  setSelected,
  setHovered,
}: SearchItemProps) {
  const { sickNm } = item;
  return (
    <div
      style={active ? { backgroundColor: 'red' } : {}}
      onClick={() => setSelected(item)}
      onMouseEnter={() => setHovered(item)}
      onMouseLeave={() => setHovered({ sickCd: '', sickNm: '' })}
    >
      {sickNm}
    </div>
  );
}

export default SearchItem;
