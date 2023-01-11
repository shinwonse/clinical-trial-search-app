import React, { useState } from 'react';
import styled from 'styled-components';

import SearchBar from '../components/SearchBar';
import SearchResultBox from '../components/SearchResultBox';
import { useFetch } from '../hooks/useFetch';

function MainPage() {
  const [isSearching, setIsSearching] = useState(false);
  const [input, setInput] = useState('');
  const [keyword, setKeyword] = useState('');

  const url = keyword && `/sick?q=${keyword}`;
  const { data: searchResult } = useFetch(url);

  const handleInputClick = () => {
    setIsSearching(true);
  };

  const handleChangeKeyword = (keyword: string) => setKeyword(keyword);
  const handleChangeInput = (value: string) => setInput(value);

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
