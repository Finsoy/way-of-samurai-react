import { renderEntireTree } from './render';
import state, { addMessage, addPost } from './redux/state';

renderEntireTree(state, addPost, addMessage);
