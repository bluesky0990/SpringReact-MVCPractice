import React, {useState} from 'react';
import './App.css';
import Login from './views/Login';
import Lobby from './views/Lobby';
import Footer from './views/includes/Footer';

export default function App() {
  const [login, setLogin] = useState(false);
  const handleLoginSuccess = () => { setLogin(true) };
  const handleLogout = () => { setLogin(false) };
  return (
    <div className="App">
      {login ? <Lobby/> : <Login/>}
      <Footer/>
    </div>
  );
}
