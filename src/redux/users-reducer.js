import { actionTypes } from "../types";

const initialState = {
  users: [],
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
