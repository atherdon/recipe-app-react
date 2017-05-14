import React from 'react';
import { Image } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';

const Index = () => (
  <div className="Index">
    <div>
      <h3>Welcome to Recipe App!</h3>
      <Image src={'mainpage-welcome.gif'} alt="" className="img-responsive" />
      <p>Chose your own from more than 9000 recipes</p>
     	<div className="btn-group btn-group-justified">
     		<Link to="/signup" className="btn btn-success">Sign Up</Link>
     		<Link to="/login" className="btn btn-success">Sign In</Link>
     	</div>
    </div>

		<div>
			<h3 className="text-center">Blog</h3>
			<Image src={'post.jpg'}	alt="" className="img-responsive" />
			<p>
				You can checkout our blog to see some news and new spicy recipes.
			</p>
    	<Link to="/blog" className="btn btn-block btn-success">Check blog</Link>
		</div>

		<div>
			<h3 className="text-center">Weekly Menu</h3>
			<Image src={'mainpage-weekly-menu.jpg'} alt="" className="img-responsive" />
			<p>
				Take a look at our weekly menu, bro.
			</p>
			<Link to="/weekly-menu" className="btn btn-block btn-success">Check weekly menu</Link>
		</div>

		<div>
			<h3 className="text-center">Sample Menu</h3>
			<Image src={'mainpage-sample-menu.png'} alt="" className="img-responsive" />
			<p>
				It's a simple example of one manu, tastes good!
			</p>
			<Link to="/simple-menu" className="btn btn-block btn-success">Check Sample Menu</Link>
		</div>
  </div>
);

export default Index;
