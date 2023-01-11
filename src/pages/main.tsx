import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { fetchResult } from '../api/search';
import SearchBar from '../components/SearchBar';
import SearchResultBox from '../components/SearchResultBox';

function MainPage() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [input, setInput] = useState('');
  const [keyword, setKeyword] = useState('');

  const url = keyword && `https://www.google.com/search?q=${keyword}`;
  console.log(url);

  const handleInputClick = () => {
    setIsSearching(true);
  };

  const getSearchResult = async (keyword: string) => {
    const { data } = await fetchResult(keyword);
    setSearchResult(data);
  };

  useEffect(() => {
    if (!keyword) {
      return setSearchResult([]);
    }
    getSearchResult(keyword);
  }, [keyword]);

  const handleChangeKeyword = (value: any) => setKeyword(value.trim());
  const handleChangeInput = (value: any) => setInput(value);

  return (
    <Wrapper>
      <Title>
        국내 모든 임상시험 검색하고
        <br /> 온라인으로 참여하기
      </Title>
      <SearchBar
        handleInputClick={handleInputClick}
        onChangeKeyword={handleChangeInput}
        onDebounceChangeKeyword={handleChangeKeyword}
      />
      {isSearching && <SearchResultBox searchResult={searchResult} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 30px;
  line-height: 1.5;
  text-align: center;
`;

export default MainPage;
