// Settings
const proxy = 'http://localhost:3000';

// Elements
const mainContent = document.querySelector('div.main-content');
const dataUrlLinks = document.querySelectorAll('[data-view]');

const getData = path => {
  fetch(`${proxy}/api/${path}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      mainContent.innerHTML = JSON.stringify(data);
    })
    .catch(err => console.log('getData: ', err));
};

const getView = path => {
  fetch(`${proxy}/view/${path}`)
    .then(data => data.text())
    .then(data => {
      console.log(data);
      mainContent.innerHTML = data;
    })
    .catch(err => console.log('getView: ', err));
};

/**
 * EventListeners
 */

dataUrlLinks.forEach(link => {
  link.addEventListener('click', e => {
    let view = e.target.getAttribute('data-view');
    console.log(view);
    getView(view);
  });
});
