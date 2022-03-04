import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';

import state, { addPost } from './redux/state';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App appState={state} addPost={addPost} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
