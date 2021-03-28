import React, {Component} from 'react';
import './App.css';
import Login from './views/Login';
import Footer from './views/components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        <Footer/>
      </div>
    );
  }
}

export default App;
