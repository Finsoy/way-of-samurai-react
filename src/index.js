import { renderEntireTree } from './render';
import state, { addMessage, addPost, updateNewPostText } from './redux/state';

renderEntireTree(state, addPost, addMessage, updateNewPostText);
