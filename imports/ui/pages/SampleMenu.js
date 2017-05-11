import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';

const SampleMenu = () => (
  <div className="">
    <Jumbotron className="text-center">
      <h2>Holly shit, it's Sample Menu</h2>
      <p>Just take a brief look at our menu</p>
    </Jumbotron>
  </div>
);

export default SampleMenu;
