// jest.setup.js
global.IntersectionObserver = class IntersectionObserverMock {
  constructor(callback, options) {}
  root = null;
  rootMargin = '0px';
  thresholds = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
};