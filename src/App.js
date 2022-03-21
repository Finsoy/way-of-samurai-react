import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = ({ appState }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={appState.sideBar} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer />}>
            <Route path=":id" element={<DialogsContainer />} />
          </Route>

          <Route path="/profile" element={<Profile />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="*" element={<Navigate to="/profile" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
