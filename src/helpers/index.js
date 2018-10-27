import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export const truncate = text => {
  const textLength = text.length;
  if (textLength > 170) {
    return text.slice(0, 170) + '...';
  }
  return text;
};

const filterGenres = (genre_ids, genres) => {
  const moviesGenres = [];

  genre_ids.forEach(genre_id => {
    const movieGenre = genres.find(genre => genre.id === genre_id);

    if (movieGenre) {
      moviesGenres.push(movieGenre);
    }
  });

  return moviesGenres;
};

export const assembleGenres = (movie, allGenres) => {
  if (movie.genres) {
    return movie.genres;
  }
  if (movie.genre_ids) {
    return filterGenres(movie.genre_ids, allGenres);
  }
};

export const renderGenres = (genres) => {
  const genreNames = genres.map(genre => genre.name);
  return genreNames.join(', ');
};

const compileCountriesIntoString = (countries) => {
  const countryNames = countries.map(country => country.name);
  return countryNames.join(', ');
};

export const renderCountries = (countries) => {
  if (countries.length === 1) {
    return <span><b>Country:</b> {countries[0].name}</span>
  } else {
    return (
        <span><b>Countries:</b> {compileCountriesIntoString(countries)}</span>
    );
  }
};

export const formatUserData = (user, favoriteMovies) => {
  const { uid, email, displayName } = user;

  return {
    isLoggedIn: true,
    userId: uid,
    email,
    displayName,
    favoriteMovies
  };
};

export const formatMoney = (money) => {
  if (money !== 0) {
    return `$${money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
  }
  return 'N/A'
};

export const formatDate = (releaseDate) => {
  const date = new Date(releaseDate);
  return date.toLocaleDateString();
};

export const GithubIcon = (props) => (
    <SvgIcon {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58
      1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
      0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27
      1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54
      1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </SvgIcon>
);

