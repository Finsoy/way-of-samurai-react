import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const posts = [
  {id: 1, message: 'Hi', likesCount: 0},
  {id: 2, message: 'How are you', likesCount: 56},
]

const dialogs = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Vadim'},
  {id: 3, name: 'Diana'},
  {id: 4, name: 'Lera'},
  {id: 5, name: 'Anton'},
]

const messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you'},
  {id: 3, message: 'My friend'},
  {id: 4, message: 'BEEEP!'},
  {id: 5, message: 'dance!'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);
