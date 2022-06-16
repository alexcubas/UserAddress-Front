import React, { useContext, useCallback, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../components/navbar';

import ApplicationContext from '../context/applicationContext';

export default function ListaTarefas() {
  const { allUsers, setAllUsers } = useContext(ApplicationContext);

  const fetchProducts = useCallback(async () => {
    const result = await axios.get('http://localhost:3001/user');

    setAllUsers(result.data);
  }, [setAllUsers]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="container-fluid">
      <Navbar />
      <div id="app" className="container">
        { allUsers && allUsers.map((user) => (
          <div key={user.id}>
            <div className="card">
              <p>
          &nbsp; nome: &nbsp;
                { user.nome }
              </p>
            </div>
            <div className="card">
              <p>
          &nbsp; email: &nbsp;
                { user.email }
              </p>
            </div>
            <div className="card">
              <p>
          &nbsp; CEP: &nbsp;
                { user.address.cep }
              </p>
            </div>
            <div className="card">
              <p>
          &nbsp; logradouro: &nbsp;
                { user.address.logradouro }
              </p>
            </div>
            <div className="card">
              <p>
          &nbsp; bairro: &nbsp;
                { user.address.bairro }
              </p>
            </div>
            <div className="card">
              <p>
          &nbsp; localidade: &nbsp;
                { user.address.localidade }
              </p>
            </div>
            <div className="card">
              <p>
          &nbsp; UF: &nbsp;
                { user.address.uf }
              </p>
            </div>
          </div>
        )) }

      </div>
    </div>
  );
}
