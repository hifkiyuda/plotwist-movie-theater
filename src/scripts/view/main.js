import darkLightMode from './dark.js';
import clock from './clock.js';
import Movies from '../data/movies.js';
import '../components/header-nav.js';

const main = () => {
  darkLightMode();
  clock();
  const headerNav = document.querySelector('header-nav');
  const mainContent = document.querySelector('main-content');

  const { nowPlaying } = headerNav;
  const { topRated } = headerNav;
  const { popular } = headerNav;
  const { upcoming } = headerNav;

  Movies.getNowPlayingMovies();

  nowPlaying.addEventListener('click', () => {
    mainContent.contentHeading.innerHTML = 'Now Playing';
    mainContent.contentText.innerHTML = 'Find out what movies are showing right now.';
    Movies.getNowPlayingMovies();
  });

  topRated.addEventListener('click', () => {
    mainContent.contentHeading.innerHTML = 'Top Rated';
    mainContent.contentText.innerHTML = 'This is a list of the most top rated movies.';
    Movies.getTopRatedMovies();
  });

  popular.addEventListener('click', () => {
    mainContent.contentHeading.innerHTML = 'Popular';
    mainContent.contentText.innerHTML = 'Take a look at the list of most popular movies.';
    Movies.getPopularMovies();
  });

  upcoming.addEventListener('click', () => {
    mainContent.contentHeading.innerHTML = 'Upcoming';
    mainContent.contentText.innerHTML = 'You can also see upcoming movies.';
    Movies.getUpcomingMovies();
  });
};

export default main();
