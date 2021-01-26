export const ACTIONS = {
  ADD_PLAYER: 'add-player',
  ADD_RESTAURANT: 'add-restaurant',
  START_RESTAURANT_PHASE: 'start-restaurant',
  START_VOTE: 'start-vote',
  END_GAME: 'end-game',
};
export const gameReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.START_RESTAURANT_PHASE:

    default:
      return state;
  }
};
