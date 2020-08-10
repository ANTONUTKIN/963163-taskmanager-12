import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createBoardTemplate} from "./view/board.js";
import {createTaskEditTemplate} from "./view/task-edit.js";
import {createTaskTemplate} from "./view/task.js";
import {createLoadMoreButtonTemplate} from "./view/load-more-button.js";
import {generateTask} from "./mock/task.js";

const TASK_COUNT = 3;

const tasks = new Array(TASK_COUNT).fill().map(generateTask);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// Вставляет в разметку меню заданий, фильтров и форму доски заданий
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

// Вставляет в разметку доски форму редактирования задания
const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(taskListElement, createTaskEditTemplate(), `beforeend`);

// Вставляет в разметку доски 3 карточки задания
for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(tasks[i]), `beforeend`);
}

// Вставляет в разметку кнопку 'Загрузить еще'
render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
