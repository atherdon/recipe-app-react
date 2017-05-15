import React from 'react';
import { Image } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';

const SampleMenu = () => (
  <div className="sample-menu">
  	<p>Meatball Sliders</p>
    <Image src={'menu/1.jpg'} />
    <p>This souce is, in one word, awesome!</p>
    <button className="btn-block">Timing</button>
    <button className="btn-block">Ingridients</button>
    <button className="btn-block">Directions</button>
  </div>
);

export default SampleMenu;

