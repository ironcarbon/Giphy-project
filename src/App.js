import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/landing/Landing';
import SearchResults from './components/searchResults/SearchResults';


const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route path="/search/:id" component={SearchResults} />
        </Switch>
      </Fragment>
    </Router>

  );
}

export default App;
