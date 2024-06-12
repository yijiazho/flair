import React, { useState, ChangeEvent, FormEvent } from 'react';

import client from 'src/client/client.js';


const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //
  };

  const handleButtonClick = () => {
    // 
  };

  return (
    <form className='search-bar' onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search...123"
      />
      <button type="button" onClick={handleButtonClick}>
        Search 123
      </button>
    </form>
  );
};

export default SearchBar;
