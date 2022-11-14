import React, { useState } from 'react';

interface UserSearchProps {
  handleUsersSearch: (searchText: string) => void;
  setIsAddingNewUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UserSearch({
  handleUsersSearch,
  setIsAddingNewUser,
}: UserSearchProps) {
  return (
    <>
      <label htmlFor="search-user-input">Search</label>
      <input
        onChange={(e) => {
          handleUsersSearch(e.target.value);
        }}
        id="search-user-input"
        type="text"
      />
      <button
        onClick={() => {
          setIsAddingNewUser(true);
        }}
      >
        Add
      </button>
    </>
  );
}
