import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';

const WeeklyMenu = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>WeeklyMenu</h2>
      <p>This is a menu on the week!</p>
      <Link to="/gift-subscription">Gift</Link>
    </Jumbotron>
  </div>
);

export default WeeklyMenu;
