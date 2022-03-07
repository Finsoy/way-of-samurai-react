import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import './App.scss';

const App = ({ appState, addPost, addMessage, updateNewPostText, updateNewMessageText }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={appState.sideBar} />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          children={<Dialogs state={appState.dialogsPage} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />}
        />
        <Route
          path="/profile"
          children={<Profile profilePage={appState.profilePage} addPost={addPost} updateNewPostText={updateNewPostText} />}
        />
        <Route path="/news" children={<News />} />
        <Route path="/music" children={<Music />} />
        <Route path="/settings" children={<Settings />} />
      </div>
    </div>
  );
};

export default App;
