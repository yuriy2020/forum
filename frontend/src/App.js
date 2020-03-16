import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';


import 'materialize-css'
import  useRoutes from './components/routes'


function App() {
  const routes = useRoutes(false)
  return (
    <Router>
      <div className="container">
        <header className="header">
          {routes}
        </header>
      </div>


    </Router>
 
  );
}

export default App;
