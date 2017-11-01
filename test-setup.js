window.matchMedia =
  window.matchMedia ||
  function matchMedia() {
    return {
      matches: false,
      addListener() {},
      removeListener() {}
    };
  };

global.fetch = require('jest-fetch-mock');
