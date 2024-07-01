import React, { useEffect, useState } from 'react';
import RegisView from '../view/RegisView';
import RegisViewModel from '../viewmodel/RegisViewModel';

const Regis = ({ navigation }) => {
  const viewModel = new RegisViewModel();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    viewModel.registerUser(name, username, email, phone, password, confirmPassword)
  }, [])

  const onSubmit = () => {
    viewModel.onSubmit(name, username, email, phone, password, confirmPassword, navigation)
  }

  const goSignUp = () => {
    viewModel.goSignUp(navigation)
  }

  return (
    <RegisView
      name={name}
      username={username}
      email={email}
      phone={phone}
      password={password}
      confirmPassword={confirmPassword}
      setName={setName}
      setUsername={setUsername}
      setEmail={setEmail}
      setPhone={setPhone}
      setPassword={setPassword}
      setConfirmPassword={setConfirmPassword}
      onSubmit={onSubmit}
      goSignUp={goSignUp}
    />
  );
}

export default Regis;
