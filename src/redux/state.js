const posts = [
  { id: 1, message: 'Hi', likesCount: 0 },
  { id: 2, message: 'How are you', likesCount: 56 },
];

const dialogs = [
  {
    id: 1,
    name: 'Dimych',
    imageUrl:
      'https://sun9-76.userapi.com/impg/VERH7wlJ69ujSvDY_nQw1Wn4pA2_hOT8hunAzQ/PShsOZzNM1Y.jpg?size=600x543&quality=95&sign=00a8e9a9b851fcac382bd2def5bb0ab9&type=album',
  },
  {
    id: 2,
    name: 'Vadim',
    imageUrl:
      'https://sun9-76.userapi.com/impg/VERH7wlJ69ujSvDY_nQw1Wn4pA2_hOT8hunAzQ/PShsOZzNM1Y.jpg?size=600x543&quality=95&sign=00a8e9a9b851fcac382bd2def5bb0ab9&type=album',
  },
  {
    id: 3,
    name: 'Diana',
    imageUrl:
      'https://sun9-76.userapi.com/impg/VERH7wlJ69ujSvDY_nQw1Wn4pA2_hOT8hunAzQ/PShsOZzNM1Y.jpg?size=600x543&quality=95&sign=00a8e9a9b851fcac382bd2def5bb0ab9&type=album',
  },
  {
    id: 4,
    name: 'Lera',
    imageUrl:
      'https://sun9-76.userapi.com/impg/VERH7wlJ69ujSvDY_nQw1Wn4pA2_hOT8hunAzQ/PShsOZzNM1Y.jpg?size=600x543&quality=95&sign=00a8e9a9b851fcac382bd2def5bb0ab9&type=album',
  },
  {
    id: 5,
    name: 'Anton',
    imageUrl:
      'https://sun9-76.userapi.com/impg/VERH7wlJ69ujSvDY_nQw1Wn4pA2_hOT8hunAzQ/PShsOZzNM1Y.jpg?size=600x543&quality=95&sign=00a8e9a9b851fcac382bd2def5bb0ab9&type=album',
  },
];

const messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you' },
  { id: 3, message: 'My friend' },
  { id: 4, message: 'BEEEP!' },
  { id: 5, message: 'dance!' },
];

const friends = [
  {
    avatarUrl:
      'https://sun9-76.userapi.com/impg/VERH7wlJ69ujSvDY_nQw1Wn4pA2_hOT8hunAzQ/PShsOZzNM1Y.jpg?size=600x543&quality=95&sign=00a8e9a9b851fcac382bd2def5bb0ab9&type=album',
    name: 'Vadim Krylov',
  },
  {
    avatarUrl:
      'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/W4ahQ_kBCL4pRTe2zyu6biLOKk8vPv7F8Wwd4ytEFDoF-ilqMibxPHKB1_X7Pix863BMNzAEzl8nVxdTE2pIRi4T.jpg?size=50x50&quality=95&crop=110,449,570,570&ava=1',
    name: 'Diana Trotskaya',
  },
  {
    avatarUrl:
      'https://sun9-76.userapi.com/impg/VERH7wlJ69ujSvDY_nQw1Wn4pA2_hOT8hunAzQ/PShsOZzNM1Y.jpg?size=600x543&quality=95&sign=00a8e9a9b851fcac382bd2def5bb0ab9&type=album',
    name: 'Petr Savich',
  },
];

const state = {
  profilePage: {
    posts,
  },
  dialogsPage: {
    messages,
    dialogs,
  },
  sideBar: {
    friends,
  },
};

export default state;
