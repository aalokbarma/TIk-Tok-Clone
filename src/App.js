import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './Video';
import db from './firebase';
import DownLinks from './DownLinks';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home'; 
import User from './Pages/User'; 
import Create from './Pages/Create'; 
import Search from './Pages/Search'; 
import Notification from './Pages/Notification'; 
import AppHeader from './AppHeader';
// import User from './Pages/User';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => 
      setVideos(snapshot.docs.map(doc => doc.data()))
      )

  }, [videos])

  return (
    <>
    <Router>
    <Switch>
    <Route exact path = '/user'>
      <User />
    </Route>
    <Route exact path = "/">
      <Home />
    </Route>
    <Route exact path = "/search">
      <Search />
    </Route>
    <Route exact path = "/create">
      <Create />
    </Route>
    <Route exact path = "/notification">
      <Notification />
    </Route>
    </Switch>

    </Router>
    <div className="app">
      <AppHeader />
      <div className = "app__videos">
        {videos.map(
          ({url, channel, description, song1, likes, messages, shares}) => (
          <Video 
          url = {url}
          channel= {channel}
          description = {description}
          song1 ={song1}
          likes = {likes}
          messages = {messages}
          shares = {shares} />
          )
        )}
        

      </div>
      <DownLinks />
      {/* DownLinks */}
    </div>
    </>
  );
}


export default App;
