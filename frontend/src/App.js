import React from 'react';
import './App.css';
import Auth from './components/Auth'
import 'materialize-css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <Auth/>
      </header>
    </div>
  );
}

export default App;
