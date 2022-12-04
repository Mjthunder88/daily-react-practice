import React from 'react';
import './App.css';
import Header from './components/Header'
import LoginForm from './components/LoginPage/LoginForm';
import UseState from './components/UseState';
import Counter from './components/Counter';

function App() {
  return (
    <div className="col-container">
      <Header />
      <LoginForm />
      <UseState />
      <Counter />
    </div>
  );
}

export default App;
