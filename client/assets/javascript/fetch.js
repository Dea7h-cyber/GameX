import config from './config.js';

const getData = path => {
  return fetch(`${config.proxy}/api/${path}`);
};

const getView = name => {
  return fetch(`${config.local}/views/${name}.html`);
};

export { getData, getView };