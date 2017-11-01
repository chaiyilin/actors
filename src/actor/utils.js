import { groupBy } from 'lodash';

function flattenMovies(movies) {
  const flattenedMovies = [];
  movies.forEach(movie => {
    if (movie.name) {
      movie.roles.forEach(role => {
        if (role.name && role.actor) {
          flattenedMovies.push({
            movie: movie.name,
            character: role.name,
            actor: role.actor
          });
        }
      });
    }
  });
  return flattenedMovies;
}

export default function transform(movies) {
  const flattenedMovies = flattenMovies(movies);
  const groupedActors = groupBy(flattenedMovies, movie => movie.actor);
  Object.keys(groupedActors).forEach(actor => {
    groupedActors[actor] = groupedActors[actor].sort(
      flattenedMovie => flattenedMovie.movie
    );
  });
  return groupedActors;
}
