import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ApplicationContext from '../applicationContext';

function ApplicationProvider({ children }) {
  const [user, setUser] = useState({
    nome: '',
    email: '',
    CEP: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    UF: '',
  });
  const [dateUser, setDateUser] = useState(null);
  const [allUsers, setAllUsers] = useState(null);

  const context = useMemo(() => ({
    user,
    setUser,
    dateUser,
    setDateUser,
    allUsers,
    setAllUsers,
  }), [user, dateUser, allUsers]);

  return (
    <ApplicationContext.Provider value={context}>
      {children}
    </ApplicationContext.Provider>
  );
}

ApplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicationProvider;
