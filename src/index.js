import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/state';
import './index.scss';

let renderEntireTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          appState={store.getState()}
          addPost={store.addPost.bind(store)}
          addMessage={store.addMessage.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
          updateNewMessageText={store.updateNewMessageText.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderEntireTree(store);

store.subscribe(renderEntireTree);
