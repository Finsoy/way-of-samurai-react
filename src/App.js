import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = ({appState}) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={appState.sideBar}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' children={<Dialogs state={appState.dialogsPage} />} />
                    <Route path='/profile' children={<Profile state={appState.profilePage}/>} />
                    <Route path='/news' children={<News/>}/>
                    <Route path='/music' children={<Music/>}/>
                    <Route path='/settings' children={<Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
