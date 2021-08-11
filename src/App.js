import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {

    return (
        <BrowserRouter>
            <div className='wrapper'>
                <div className='wrapper-header'><Header/></div>
                <div className='wrapper-navBar'><NavBar/></div>

                <div className='wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={props.state.postPage.posts}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs messagesPage={props.state.messagesPage}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
