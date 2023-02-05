import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import { Link } from "react-router-dom";
//import {BrowserRouter} from 'react-router-dom';
//import Navbar from './Components/Navbar';
//import AnimeHome from './Pages/AnimeHome';
import Popular from './Pages/Popular';
import AnimeSearch from './Components/AnimeSearch';
import WatchList from './Pages/WatchList';
import Watched from './Pages/Watched';
/*
let routes;
routes = (
  <Routes>
        <Route path="/" exact>
        <>
      <div className="App">
      <div>
     
    </div>
      <Navbar/>
    </div> 
    </>
        </Route>
       
      </Routes> 
)
*/

function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/" component={WatchList}/>
        <Route path="/watched" component={Watched}/>
        <Route path="/popular" component={Popular}/>
        <Route path="/search" component={AnimeSearch}/>
        </Switch>
    </Router>
    
  );
}

export default App;
