import React from 'react';
import { Image } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';

const WeeklyMenu = () => (
  <div className="weekly-menu">
  	<h3 className="text-center">July 18-24</h3>
  	<p>Five simple and unique dinner recipes delivered to your inbox each week based on your dietary preferences and household situation. 
  		They're also available on the site for quick and easy customization.</p>
  	<div className="weekly-menu__block">

  		<div className="weekly-menu__block-item clearfix">
  			<div className="weekly-menu__block-item-image-wrapper pull-left">
  				<Image src={'menu/1.jpg'} className="img-responsive img-rounded" alt="" />
  			</div>
  			<h4>Monday</h4>
  			<p>Meatball Sliders</p>
  		</div>

  		<div className="weekly-menu__block-item clearfix">
  			<div className="weekly-menu__block-item-image-wrapper pull-left">
  				<Image src={'menu/2.jpg'} className="img-responsive img-rounded" alt="" />
  			</div>
  			<h4>Tuesday</h4>
  			<p>Pork Tenderloin with Roasted Cherries</p>
  		</div>

  		<div className="weekly-menu__block-item clearfix">
  			<div className="weekly-menu__block-item-image-wrapper pull-left">
  				<Image src={'menu/3.jpg'} className="img-responsive img-rounded" alt="" />
  			</div>
  			<h4>Wednesday</h4>
  			<p>Beef, Red Peper and...</p>
  		</div>

  		<div className="weekly-menu__block-item clearfix">
  			<div className="weekly-menu__block-item-image-wrapper pull-left">
  				<Image src={'menu/4.jpg'} className="img-responsive img-rounded" alt="" />
  			</div>
  			<h4>Thursday</h4>
  			<p>Chicken with Pesto Cream and Orzo with Parmezan</p>
  		</div>

  		<div className="weekly-menu__block-item clearfix">
  			<div className="weekly-menu__block-item-image-wrapper pull-left">
  				<Image src={'menu/5.jpg'} className="img-responsive img-rounded" alt="" />
  			</div>
  			<h4>Friday</h4>
  			<p>Slow-Cooker Pork Ragout, Buttered Pappardelle, Blistered Okra</p>
  		</div>

  	</div>
    <button onClick={browserHistory.goBack} className="btn btn-block">Back</button>
  </div>
);

export default WeeklyMenu;
