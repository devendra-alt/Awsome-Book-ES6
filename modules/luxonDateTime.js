import { DateTime } from '../node_modules/luxon/src/luxon.js';

export const dateTime = DateTime.now();

export const dateTimeGenerater = () => {
  const contentWrapperEl = document.querySelector('.content');
  const dateWrapper = document.createElement('div');
  dateWrapper.id = 'dateTime';
  dateWrapper.innerHTML = `
  <p>${dateTime.toLocaleString(DateTime.DATETIME_MED)}</p>
  `;
  contentWrapperEl.prepend(dateWrapper);
};
