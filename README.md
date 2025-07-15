Необходимо сверстать адаптивную страницу со списком фотографий. Использовать TailwindCSS.<br><br>
При клике на фотографии открывается модальное окно с фотографией, списком комментариев и формой добавления комментариев.<br>
Список комментариев в формате: #id, autor, text; ...<br><br>
Комментарий должен сохраняться на бек.
API:<br>
GET http://test-backend.itdelta.agency/api/images - получение списка фотографий.<br>
GET http://test-backend.itdelta.agency/api/image/:imageId - получения большого изображения и списка комментариев.<br>
POST http://test-backend.itdelta.agency/api/image/:imageId/comments - добавление комментария (204 – OK, комментарий не сохраняется).<br>
{ comment: string }<br><br>
Дизайн можно найти здесь
Результат:<br>
приложение будет работать локально после yarn && yarn start;<br>
приложение написано использованием той технологии, которую вы знаете лучше всего (VanilaJS, JQuery, Vue, React, Svelte, Ember);
