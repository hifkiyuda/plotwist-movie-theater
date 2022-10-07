/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import displayMovies from './display-movies.js';

class Movies {
  static getApiKey() {
    return '2d6a7d40db46bbb6a9cf20f941cdc4a3';
  }

  static getNowPlayingMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.getApiKey()}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((responseJson) => {
        displayMovies(responseJson.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static getTopRatedMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.getApiKey()}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((responseJson) => {
        displayMovies(responseJson.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static getPopularMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.getApiKey()}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((responseJson) => {
        displayMovies(responseJson.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static getUpcomingMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.getApiKey()}&language=en-US&page=1`)
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
