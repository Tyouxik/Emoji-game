const CREATE_GAME = "CREATE_GAME";
const SELECT_CARDS = "SELECT_CARD";
const REMOVE_CARDS = "REMOVE_CARDS";

export const gameReducer = (state, action) => {
  switch (action.type) {
    case CREATE_GAME:
      return;
    case SELECT_CARDS:
      return;
    case REMOVE_CARDS:
      return;
    default:
      return state;
  }
};
