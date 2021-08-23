import { getPeopleList } from '../../service';

export const Character = () => {
  return (dispatch) =>
    new Promise((resolve) => {
        getPeopleList().then((response) => {
        dispatch({ type: 'characterAction', value: response.results });
        resolve(response.results);
      });
    });
};
