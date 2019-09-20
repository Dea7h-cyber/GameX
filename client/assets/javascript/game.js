import { getData } from './fetch.js';

// Elements
//const gameContainer = document.querySelector('.game-container');

export class Game {
  constructor() {
    this.container = document.querySelector('.main-content');
  }

  async init() {
    const responseData = await getData('game');
    const gameData = await responseData.json();

    const response = await getData('objects');
    const objectsData = await response.json();
    const objects = this.createObjects(objectsData, gameData);

    this.container.innerHTML = this.createGameContainer(objects, gameData);
  }

  createGameContainer(objects, { cells }) {
    return `<div class='game-container' style='width: ${cells.amount.x *
      cells.size.width}px; height: ${cells.amount.y * cells.size.height}px;'>${objects}</div>`;
  }

  createObjects({ objects }, { cells }) {
    let cell = cells.size;
    let result = '';

    for (let object of objects) {
      let width, height;

      if (object.direction === 'x') {
        // Direction X
        width = object.size * cell.width;
        height = cell.height;
      } else if (object.direction === 'y') {
        // Direction Y
        width = cell.width;
        height = object.size * cell.height;
      } else {
        // Big Area both X and Y
        width = object.size.x * cell.width;
        height = object.size.y * cell.height;
      }

      // let width = object.direction === 'x' ? object.size * cell.width : cell.width;
      // let height = object.direction === 'y' ? object.size * cell.height : cell.height;
      let posX = object.x * cell.width - cell.width;
      let posY = object.y * cell.height - cell.height;
      let background;

      switch (object.type) {
        case 'win':
          background = `url('./assets/images/star.png') no-repeat center center/${cell.width}px ${cell.height}px`;
          break;
        case 'lava':
          background = `url('./assets/images/lava.gif') repeat center center/${cell.width}px ${cell.height}px`;
          break;
        case 'mob':
          background = `url('./assets/images/mob3.gif') repeat center center/${cell.width}px ${cell.height}px`;
          break;
        case 'hero':
          background = `url('./assets/images/hero.gif') repeat center center/${cell.width}px ${cell.height}px`;
          break;
        default:
          background = '#522c0e';
          // background = `url('./assets/images/wall.png') repeat center center/${cell.width}px ${cell.height}px`;
          break;
      }

      result += `<div class='object' style="left: ${posX}px; bottom: ${posY}px; width: ${width}px; height: ${height}px; background: ${background};"></div>`;
    }

    return result;
  }
}
