import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';

const Blog = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>Blog</h2>
      <p>Here you can check our latest news</p>
      <Link to="/gift-subscription">Gift</Link>
    </Jumbotron>
  </div>
);

export default Blog;
