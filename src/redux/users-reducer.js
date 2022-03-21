import { actionTypes } from "../types";

const initialState = {
  users: [
    {
      id: 1,
      fullName: "Dmitry",
      status: "i like football",
      location: { city: "Gomel", country: "Belarus" },
      followed: false,
      avatarUrl: "",
    },
    {
      id: 2,
      fullName: "Vadim",
      status: "I am a programmer",
      location: { city: "Gomel", country: "Belarus" },
      followed: true,
      avatarUrl:
        "https://sun9-76.userapi.com/impg/VERH7wlJ69ujSvDY_nQw1Wn4pA2_hOT8hunAzQ/PShsOZzNM1Y.jpg?size=600x543&quality=95&sign=00a8e9a9b851fcac382bd2def5bb0ab9&type=album",
    },
    {
      id: 3,
      fullName: "Dziana",
      status: "i do not like football",
      location: { city: "Grodno", country: "Belarus" },
      followed: false,
      avatarUrl:
        "https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/W4ahQ_kBCL4pRTe2zyu6biLOKk8vPv7F8Wwd4ytEFDoF-ilqMibxPHKB1_X7Pix863BMNzAEzl8nVxdTE2pIRi4T.jpg?size=50x50&quality=95&crop=110,449,570,570&ava=1",
    },
    {
      id: 4,
      fullName: "Oleg",
      status: "i am OLEG",
      location: { city: "New York", country: "USA" },
      followed: true,
      avatarUrl: "",
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: true } : user
        ),
      };
    case actionTypes.UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: false } : user
        ),
      };
    case actionTypes.SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: actionTypes.FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: actionTypes.UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: actionTypes.SET_USERS, users });

export default usersReducer;
