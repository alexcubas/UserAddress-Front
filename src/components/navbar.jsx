import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const newUser = () => {
    navigate('/');
  };

  const allUsers = () => {
    navigate('/allUsers');
  };

  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none' }} className="spaceNav">
        <li>
          <button
            className="btn btn-sm btn-primary space"
            type="button"
            name="newUser"
            onClick={newUser}
          >
            Novo Usuário
          </button>
        </li>
        <li>
          <button
            className="btn btn-sm btn-primary space"
            type="button"
            name="allUsers"
            onClick={allUsers}
          >
            Todos Usuários
          </button>
        </li>
      </ul>
    </nav>
  );
}
