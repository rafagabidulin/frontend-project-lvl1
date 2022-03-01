install: #установка зависимостей
	npm ci

brain-games: #запуск приложения brain-games
	node bin/brain-games.js

brain-even: #запуск приложения brain-even
	node bin/brain-even.js

publish: #публикация приложения
	npm publish --dry-run

lint: #линтинг
	npx eslint .



