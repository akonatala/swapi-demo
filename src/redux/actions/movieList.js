import { getMovie } from '../../service';

export const MovieList = (filmUrlArray) => {
  return (dispatch) =>
    // eslint-disable-next-line array-callback-return
    filmUrlArray.map( x => {
      new Promise((resolve) => {
        getMovie(x).then((response) => {
          dispatch({ type: 'movieAction', value: response });
          resolve(response);
        });
      });
    })
};
