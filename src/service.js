import axios from 'axios';

export async function getPeopleList() {
  const response = await axios.get(`https://swapi.dev/api/people`);
  return response.data;
}

export async function getMovie(filmUrl) {
    const response = await axios.get(`${filmUrl}`);
    return response.data;
  }

