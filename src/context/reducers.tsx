export const ACTIONS = {
  INIT_USER: 'init-user',
  CREATE_GAME: 'create-game',
  JOIN_GAME: 'join-game',
  ADD_PLAYER: 'add-player',
  ADD_RESTAURANT: 'add-restaurant',
  START_RESTAURANT_PHASE: 'start-restaurant',
  START_VOTE: 'start-vote',
  END_GAME: 'end-game',
};
export const gameReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INIT_USER:
      return { ...state, userID: action.payload.id };
    case ACTIONS.CREATE_GAME: {
      console.log('inside reducer');
      return {
        ...state,
        gameID: action.payload.gameID,
        players: action.payload.players,
      };
    }
    case ACTIONS.JOIN_GAME:
      return {
        ...state,
        gameID: action.payload.gameID,
        players: action.payload.players,
      };
    default:
      return { ...state };
  }
};
