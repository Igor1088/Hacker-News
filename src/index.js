import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import './index.css';
import NewStories from './NewStories';
import TopStories from './TopStories';
import ShowStories from './ShowStories';
import AskStories from './AskStories';
import JobsStories from './JobStories';
import User from './User';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TopStories} />
      <Route path="new" component={NewStories} />
      <Route path="show" component={ShowStories} />
      <Route path="ask" component={AskStories} />
      <Route path="jobs" component={JobsStories} />
      <Route path="user/:id" component={User} />
    </Route>
  </Router>,
  document.getElementById('root')
);
