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

Деплой на GitHub Pages
https://levelup.gitconnected.com/deploy-your-vite-app-to-github-pages-a-lazy-devs-guide-37b0b472fa35

1. Изменить vite.config.js добавить в defineConfig
base: "/light-shop/"

2. Установить gh-pages
npm install gh-pages --save-dev

3. Изменить package.json, секция scripts, добавить

  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist",

4. Изменить package.json, секция root (где "name"), добавить

  "homepage": "https://margkni.github.io/light-shop/"

5. В настройках репозитория указать branch gh-pages