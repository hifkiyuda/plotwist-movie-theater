/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import displayMovies from './display-movies.js';

class Movies {
  static getNowPlayingMovies() {
    const apiKey = 'you can get your own keys on TMDb website';
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((responseJson) => {
        displayMovies(responseJson.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static getTopRatedMovies() {
    const apiKey = 'you can get your own keys on TMDb website';
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((responseJson) => {
        displayMovies(responseJson.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static getPopularMovies() {
    const apiKey = 'you can get your own keys on TMDb website';
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((responseJson) => {
        displayMovies(responseJson.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static getUpcomingMovies() {
    const apiKey = 'you can get your own keys on TMDb website';
    return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((responseJson) => {
        displayMovies(responseJson.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default Movies;
