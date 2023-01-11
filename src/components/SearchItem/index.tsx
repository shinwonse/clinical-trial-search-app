type SearchItemProps = {
  item: any;
};

function SearchItem({ item }: SearchItemProps) {
  const { sickNm } = item;
  return <div>{sickNm}</div>;
}

export default SearchItem;
