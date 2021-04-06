import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "assets/scss/style.scss";
import LandingPage from 'pages/LandingPage';


function App() {
  return (
    <Router className="App">
      <Route path="/" component={LandingPage}/>
    </Router>
  );
}

export default App;
