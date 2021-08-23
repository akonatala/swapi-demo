const ActionType = {
  MovieAction: 'movieAction',
  ClearMovieList: 'movieActionClear',
}

const DEFAULT_STATE = {
    movieList: [],
  };

  const MovieList = (state, action) => {
    if (!state) {
        state = DEFAULT_STATE;
      }
      switch (action.type) {
        case ActionType.MovieAction:
          return {
            ...state,
            movieList: [...state.movieList, action.value],
          };
          case ActionType.ClearMovieList:
            return {
              ...state,
              movieList: action.value,
            };
        default:
          return { ...state };
      }
  };

  export default MovieList