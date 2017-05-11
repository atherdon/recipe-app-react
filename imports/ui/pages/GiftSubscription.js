import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';

const GiftSubscription = () => (
  <div className="GiftSubscription">
    <Jumbotron className="text-center">
      <h2>Gift Subscription Page</h2>
      <p>Most epic subscriptions only now and only for 9.99$</p>
      <p><Link className="btn btn-success" to="/GiftSubscription" role="button">Read the Documentation</Link></p>
    </Jumbotron>
  </div>
);

export default GiftSubscription;