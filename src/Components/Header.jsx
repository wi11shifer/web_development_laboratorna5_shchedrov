import React, { useContext } from 'react';
import { AppContext } from '../Contexts/AppContext';
import { useStatus } from '../hooks/useStatus';
import LoginModal from './LoginModal';

function Header() {
  const { isLoggedIn, user, logoutUser } = useContext(AppContext);
  const { status: isModalOpen, toggleStatus: toggleModal } = useStatus(false);

  return (
    <header className="header">
      <h1>Bookstore</h1>
      {isLoggedIn ? (
        <>
          <p>Welcome, {user}!</p>
          <button onClick={logoutUser}>Logout</button>
        </>
      ) : (
        <>
          <p>Please log in</p>
          <button onClick={() => toggleModal(true)}>Login</button>
        </>
      )}

      {isModalOpen && <LoginModal isOpen={isModalOpen} closeModal={() => toggleModal(false)} />}
    </header>
  );
}

export default Header;
