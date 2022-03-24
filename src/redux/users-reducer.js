import { actionTypes } from "../types";

const initialState = {
  users: [],
  pageSize: 4,
  totalUserCount: 0,
  currentPage: 1,
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
        users: action.users,
      };
    case actionTypes.SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.page };
    }
    case actionTypes.SET_TOTAL_USER_COUNT:
      return { ...state, totalUserCount: action.totalUserCount };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: actionTypes.FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: actionTypes.UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: actionTypes.SET_USERS, users });
export const setCurrentPageAC = (page) => ({
  type: actionTypes.SET_CURRENT_PAGE,
  page,
});
export const setTotalUserCountAC = (totalUserCount) => ({
  type: actionTypes.SET_TOTAL_USER_COUNT,
  totalUserCount,
});

export default usersReducer;
