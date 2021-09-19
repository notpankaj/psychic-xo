import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import OverviewPage from './pages/OverviewPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 



ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <Switch>
        <Route path="/" exact>
        <App />
        </Route>
        <Route path="/overview">
         <OverviewPage/>
        </Route>
      </Switch>
    </Router>
  
  </React.StrictMode>,
  document.getElementById('root')
);
