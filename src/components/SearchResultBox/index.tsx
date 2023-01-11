import { useEffect, useState } from 'react';

import useKeyPress from '../../hooks/useKeyPress';
import SearchItem from '../SearchItem';

import { Title, Wrapper } from './styles';

type SearchResultType = {
  sickCd: string;
  sickNm: string;
};

type SearchResultBoxProps = {
  searchResult: SearchResultType[];
};

function SearchResultBox({ searchResult }: SearchResultBoxProps) {
  const [selected, setSelected] = useState({ sickCd: '', sickNm: '' });
  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');
  const [cursor, setCursor] = useState<number>(0);
  const [hovered, setHovered] = useState({ sickCd: '', sickNm: '' });

  useEffect(() => {
    if (searchResult.length && downPress) {
      setCursor((prevState) =>
        prevState < searchResult.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress]);
  useEffect(() => {
    if (searchResult.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);
  useEffect(() => {
    if (searchResult.length && enterPress) {
      setSelected(searchResult[cursor]);
    }
  }, [cursor, enterPress]);
  useEffect(() => {
    if (searchResult.length && hovered) {
      setCursor(searchResult.indexOf(hovered));
    }
  }, [hovered]);

  return (
    <Wrapper>
      <Title>추천 검색어</Title>
      {searchResult?.length === 0 ? (
        <div>검색어 없음</div>
      ) : (
        searchResult?.map((item, index) => (
          <SearchItem
            key={item?.sickCd}
            active={index === cursor}
            item={item}
            setSelected={setSelected}
            setHovered={setHovered}
          />
        ))
      )}
    </Wrapper>
  );
}

export default SearchResultBox;
