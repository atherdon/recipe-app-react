import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';

const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>Welcome to recipe-app!</h2>
      <p>Chose your own from more than 9000 recipes</p>
      <Link to="/signup" className="btn btn-success">Registration</Link>
      <Link to="/sample-menu" className="btn btn-success">Sample Menu</Link>
      <Link to="/weekly-menu" className="btn btn-success">Weekly Menu</Link>
      <Link to="/blog" className="btn btn-success">Blog</Link>
    </Jumbotron>
		<a href="#">
			<Image 
				src={'post.jpg'}
				alt="" 
				className="img-responsive img-rounded" />
			<Text>
				You can checkout our blog to see some news and new spicy recipes.
			</Text>
		</a>
  </div>
);

export default Index;
