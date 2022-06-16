import React, { useContext } from 'react';

import ApplicationContext from '../context/applicationContext';

export default function resultAddress() {
  const {
    dateUser,
  } = useContext(ApplicationContext);

  return (
    <div className="container-fluid">
      <div id="app" className="container">
        <div className="card">
          <p>
          &nbsp; nome: &nbsp;
            { dateUser.nome }
          </p>
        </div>
        <div className="card">
          <p>
          &nbsp; email: &nbsp;
            { dateUser.email }
          </p>
        </div>
        <div className="card">
          <p>
          &nbsp; CEP: &nbsp;
            { dateUser.CEP }
          </p>
        </div>
        <div className="card">
          <p>
          &nbsp; logradouro: &nbsp;
            { dateUser.logradouro }
          </p>
        </div>
        <div className="card">
          <p>
          &nbsp; bairro: &nbsp;
            { dateUser.bairro }
          </p>
        </div>
        <div className="card">
          <p>
          &nbsp; localidade: &nbsp;
            { dateUser.localidade }
          </p>
        </div>
        <div className="card">
          <p>
          &nbsp; UF: &nbsp;
            { dateUser.UF }
          </p>
        </div>
      </div>
    </div>
  );
}
