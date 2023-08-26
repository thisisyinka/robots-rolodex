import React from 'react';

const Search = ({ onChange, value }) => {
  return (
    <div>
      <input
        className='search-box'
        type='search'
        placeholder='Search robots...'
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Search;
