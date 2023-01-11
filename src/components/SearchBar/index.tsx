import { useRef } from 'react';

import { Input, InputBox, Wrapper } from './styles';

type SearchBarProps = {
  handleInputClick: () => void;
  onChangeKeyword: (value: any) => void;
  onDebounceChangeKeyword: (value: any) => void;
};

function SearchBar({
  handleInputClick,
  onChangeKeyword,
  onDebounceChangeKeyword,
}: SearchBarProps) {
  const timerRef = useRef<any>(null);

  const handleKeywordChange = (e: any) => {
    onChangeKeyword(e.target.value);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      onDebounceChangeKeyword(e.target.value);
    }, 1000);
  };

  return (
    <Wrapper>
      <InputBox>
        <Input onClick={handleInputClick} onChange={handleKeywordChange} />
      </InputBox>
    </Wrapper>
  );
}

export default SearchBar;
