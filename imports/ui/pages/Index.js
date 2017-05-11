import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router';	
import { Link } from 'react-router';

const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>Welcome to recipe-app!</h2>
      <p>Chose your own from more than 9000 recipes</p>
      <Link to="/gift-subscription">Gift</Link>
    </Jumbotron>
  </div>
);

export default Index;
