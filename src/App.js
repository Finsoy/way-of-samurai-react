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

const App = ({posts, dialogs, messages}) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' children={<Dialogs dialogs={dialogs} messages={messages}/>} />
                    <Route path='/profile' children={<Profile posts={posts}/>} />
                    <Route path='/news' children={<News/>}/>
                    <Route path='/music' children={<Music/>}/>
                    <Route path='/settings' children={<Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
