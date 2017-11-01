import 'isomorphic-fetch';
import transform from './utils';

export default async function fetchMovies() {
  const data = await (await fetch('/api/Movies')).json();

  return transform(data);
}
