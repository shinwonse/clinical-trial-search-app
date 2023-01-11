import SearchItem from '../SearchItem';

import { Title, Wrapper } from './styles';

type SearchResultBoxProps = {
  searchResult: any[];
};

function SearchResultBox({ searchResult }: SearchResultBoxProps) {
  return (
    <Wrapper>
      <Title>추천 검색어</Title>
      {searchResult.map((item) => (
        <SearchItem key={item?.sickCd} item={item} />
      ))}
    </Wrapper>
  );
}

export default SearchResultBox;
