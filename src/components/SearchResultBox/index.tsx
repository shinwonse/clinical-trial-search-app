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
  return (
    <Wrapper>
      <Title>추천 검색어</Title>
      {searchResult?.length === 0 ? (
        <div>검색어 없음</div>
      ) : (
        searchResult?.map((item) => (
          <SearchItem key={item?.sickCd} item={item} />
        ))
      )}
    </Wrapper>
  );
}

export default SearchResultBox;
