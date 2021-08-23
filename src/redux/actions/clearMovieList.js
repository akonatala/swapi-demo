
export const ClearMovieList = () => {
  return (dispatch) =>
  dispatch({ type: 'movieActionClear', value: [] });
};
