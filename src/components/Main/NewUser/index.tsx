import React, { useState } from 'react';
import { User } from '../../../helpers/utils';
import { StyledNewUser } from './style';

interface NewUserProps {
  setIsAddingNewUser: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddUser: (user: User) => void;
  lastUserId: number;
}

export default function NewUser({
  setIsAddingNewUser,
  handleAddUser,
  lastUserId,
}: NewUserProps) {
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');

  const handleNewUserCancel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.nativeEvent.preventDefault();
    setIsAddingNewUser(false);
  };

  const handleNewUserAdd = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.nativeEvent.preventDefault();
    if (newUserName.length !== 0 && newUserEmail.length !== 0) {
      handleAddUser({
        id: lastUserId + 1,
        name: newUserName,
        email: newUserEmail,
        username: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: '',
          },
        },
        phone: '',
        website: '',
        company: {
          name: '',
          catchPhrase: '',
          bs: '',
        },
      });
      setNewUserName('');
      setNewUserEmail('');
      setIsAddingNewUser(false);
    }
  };

  return (
    <StyledNewUser>
      <header>
        <h2>Add New User</h2>
      </header>
      <form>
        <label htmlFor="new-user-name">Name :</label>
        <input
          onChange={(e) => setNewUserName(e.target.value)}
          id="new-user-name"
          type="text"
        />
        <br />
        <label htmlFor="new-user-email">Email :</label>
        <input
          onChange={(e) => setNewUserEmail(e.target.value)}
          id="new-user-email"
          type="text"
        />
        <button onClick={handleNewUserCancel}>Cancel</button>
        <button onClick={handleNewUserAdd}>Add</button>
      </form>
    </StyledNewUser>
  );
}
