import React, { useContext, useState, useEffect } from 'react';

import axios from 'axios';
import ApplicationContext from '../context/applicationContext';
import ResultAddress from '../components/userData';
import Navbar from '../components/navbar';

export default function userAddress() {
  const {
    user, setUser, setDateUser, dateUser,
  } = useContext(ApplicationContext);

  const [error, setError] = useState(null);
  const [statusCreate, setStatusCreate] = useState(null);

  function setAddress(address) {
    const { data } = address;

    user.logradouro = data.logradouro;
    user.bairro = data.bairro;
    user.localidade = data.localidade;
    user.UF = data.uf;
    user.CEP = data.cep;
    setUser(user);
  }

  async function adicionarEndereço() {
    const address = await axios.get(`http://viacep.com.br/ws/${user.CEP}/json/`);

    if (!address.data.cep) setError('CEP inválido');

    setAddress(address);

    try {
      const createUser = await axios.post('http://localhost:3001/user', user);
      setStatusCreate(null);
      setError(null);
      setDateUser(createUser.data);
    } catch (erro) {
      setDateUser(null);
      setStatusCreate(erro.response.data.message);
    }
  }

  useEffect(() => {
  }, [setDateUser]);

  return (
    <div className="container-fluid">
      <Navbar />
      <div id="app" className="container">
        <div className="card">
          <div className="card-header">Adicione uma novo endereço</div>
          <div className="card-body">
            <div className="form-group">
              <input
                type="text"
                className="form-control "
                onChange={({ target }) => {
                  user.nome = target.value;
                  setUser(user);
                }}
                placeholder="insira o seu Nome aqui"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control "
                onChange={({ target }) => {
                  user.email = target.value;
                  setUser(user);
                }}
                placeholder="insira o Email aqui"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control "
                onChange={({ target }) => {
                  user.CEP = target.value;
                  setUser(user);
                }}
                placeholder="insira o CEP aqui"
              />
            </div>
            { error ? (
              <p>
                { error }
              </p>
            ) : null }
            { statusCreate ? (
              <p>
                { statusCreate }
              </p>
            ) : null }
            <div className="form-group">
              <button type="button" className="btn btn-sm btn-primary" onClick={() => adicionarEndereço()}>Adicionar</button>
            </div>
          </div>
          { dateUser ? <ResultAddress /> : null }
        </div>
      </div>
    </div>
  );
}
