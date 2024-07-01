import React, { useState, useEffect } from 'react';
import LoginView from '../view/LoginView';
import LoginViewModel from '../viewmodel/LoginViewModel';

const Login = ({ navigation }) => {
  const viewModel = new LoginViewModel();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    viewModel.checkToken(navigation);
  }, []);

  const onSubmit = () => {
    viewModel.onSubmit(username, password, navigation);
  };

  const goSignIn = () => {
    viewModel.goSignIn(navigation);
  };

  return (
    <LoginView
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      onSubmit={onSubmit}
      goSignIn={goSignIn}
    />
  );
};

export default Login;
