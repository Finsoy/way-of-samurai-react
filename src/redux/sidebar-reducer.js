const friends = [
  {
    avatarUrl:
      "https://sun9-76.userapi.com/impg/VERH7wlJ69ujSvDY_nQw1Wn4pA2_hOT8hunAzQ/PShsOZzNM1Y.jpg?size=600x543&quality=95&sign=00a8e9a9b851fcac382bd2def5bb0ab9&type=album",
    name: "Vadim Krylov",
  },
  {
    avatarUrl:
      "https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/W4ahQ_kBCL4pRTe2zyu6biLOKk8vPv7F8Wwd4ytEFDoF-ilqMibxPHKB1_X7Pix863BMNzAEzl8nVxdTE2pIRi4T.jpg?size=50x50&quality=95&crop=110,449,570,570&ava=1",
    name: "Diana Trotskaya",
  },
  {
    avatarUrl:
      "https://sun9-76.userapi.com/impg/VERH7wlJ69ujSvDY_nQw1Wn4pA2_hOT8hunAzQ/PShsOZzNM1Y.jpg?size=600x543&quality=95&sign=00a8e9a9b851fcac382bd2def5bb0ab9&type=album",
    name: "Petr Savich",
  },
];

const initialState = {
  friends,
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
