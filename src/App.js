import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import discover from './api/discover'
import Grid from './components/grid';
import 'tachyons';
import styles from'./styles.css'
import Bar from './components/bar';
import Trending from './components/Trending';
import TopRated from './components/TopRated';
import Searchbyname from './components/Searchbyname';
import Detail from './components/Detail';
import Recommendation from './components/recommendation';
import Latest from './components/latest';
import ByGenre from './components/Bygenre';

function App() {


  return (
    <Router>
    <div>

    <Bar current="Trending"/>

    <Switch>
      <Route exact path='/' component={Trending}></Route>
      <Route exact path='/toprated' component={TopRated}></Route>
      <Route exact path='/show/:id' render={({match}) => (
          <Detail
            id={match.params.id}
          />)}></Route>

    <Route exact path='/recommend/:id' render={({match}) => (
          <Recommendation
            id={match.params.id}
          />)}></Route>    
    <Route exact path='/latest' component={Latest}></Route>      
    <Route exact path='/bygenre' component={ByGenre}></Route>      

    </Switch>


    </div>
    </Router>
  );

  
}

export default App;
