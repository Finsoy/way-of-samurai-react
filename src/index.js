import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import state, {
  addMessage,
  addPost,
  updateNewMessageText,
  updateNewPostText,
  subscribe,
} from './redux/state';
import './index.scss';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          appState={state}
          addPost={addPost}
          addMessage={addMessage}
          updateNewPostText={updateNewPostText}
          updateNewMessageText={updateNewMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderEntireTree(state);

subscribe(renderEntireTree)