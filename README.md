1. Создание проекта React + Vite
create-react-app - устаревший, поэтому используй Vite
 1. Перейди в папку, в которой БУДЕТ проект light-shop, выполни
npm create vite@latest light-shop --template react
Выбираем настройки:
Select a framework: React (выбираем стрелками)
Select a variant: JavaScript (выбираем стрелками)
 2. Перейти в папку проекта
cd light-shop
 3. Установить зависимости
npm install
 4. Установить иконки
npm install react-icons
 5. Запустить сервер разработки
npm run dev
 6. Перейти и проверить работу

 Структура проекта
 src/
├── components/
│   ├── Header.jsx
│   ├── Banner.jsx
│   ├── Categories.jsx
│   ├── Gallery.jsx
│   ├── Footer.jsx
├── App.jsx
├── main.jsx
├── index.css