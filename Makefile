install: #установка зависимостей
	npm ci

brain-games: #запуск приложения brain-games
	node bin/brain-games.js

brain-even: #запуск приложения brain-even
	node bin/brain-even.js

brain-calc: #запуск приложения brain-calc
	node bin/brain-calc.js

brain-gcd: #запуск приложения brain-gcd
	node bin/brain-gcd.js

brain-progression: #запуск приложения brain-progression
	node bin/brain-progression.js

publish: #публикация приложения
	npm publish --dry-run

lint: #линтинг
	npx eslint .



