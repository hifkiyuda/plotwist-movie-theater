const displayMovies = (movies) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w300/';
  const mainContent = document.querySelector('main-content');
  const { moviesList } = mainContent;

  moviesList.innerHTML = '';

  movies.forEach((movie) => {
    moviesList.innerHTML += `
            <div class="movie-item">
                <img class="poster-path" src="${baseUrl}${movie.poster_path}" alt="${movie.title}">
            </div>
        `;
  });
};

export default displayMovies;
