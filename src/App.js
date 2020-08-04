import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MovieList from './componets/MovieList';
import MyList from './componets/MyList';
function App() {
   return(
      <Fragment>
          <BrowserRouter>
          <Switch>
             <Redirect exact from="/" to="/movielist" />
             <Route exact path="/movielist"  component={MovieList} />
             <Route exact path="/mylist"  component={MyList} />
          </Switch>
        </BrowserRouter> 
      </Fragment>
   ) 
  
}

export default App;
