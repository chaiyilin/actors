import fetchMovies from './service';
import movies from './service.test.json';
import transform from './utils';

// https://github.com/facebook/jest/issues/238
// https://stackoverflow.com/questions/36571357/difference-between-unmock-and-dontmock-in-jest
// http://facebook.github.io/jest/docs/en/manual-mocks.html, last section
jest.unmock('./service.test.json');

describe('service', () => {
  beforeEach(() => {
    fetch.mockReturnValue(movies);
  });

  it('should fetch and transformed', async () => {
    const data = await fetchMovies();
    expect(transform).toBeCalledWith(data);
  });

  afterEach(() => {
    fetch.resetMocks();
  });
});
