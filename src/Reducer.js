export const reducerMovie = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        movieLoading: true,
      };

    case "SET_MOVIES":
      return {
        ...state,
        movieLoading: false,
        movie: action.payload,
      };

    default:
      return state;
  }
};


