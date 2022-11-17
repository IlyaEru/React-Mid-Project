import React, { useState } from 'react';
import { StyledUserSearch } from './style';

interface UserSearchProps {
  handleUsersSearch: (searchText: string) => void;
  setIsAddingNewUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UserSearch({
  handleUsersSearch,
  setIsAddingNewUser,
}: UserSearchProps) {
  return (
    <StyledUserSearch className="main__user-search">
      <div className="user-search__input">
        <label htmlFor="search-user-input">Search</label>
        <input
          onChange={(e) => {
            handleUsersSearch(e.target.value);
          }}
          id="search-user-input"
          type="text"
        />
      </div>
      <button
        className="btn user-search__add-btn"
        onClick={() => {
          setIsAddingNewUser(true);
        }}
      >
        Add
      </button>
    </StyledUserSearch>
  );
}
