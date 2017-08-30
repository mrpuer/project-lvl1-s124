lint:
	npm run eslint src/.
publish:
	npm publish
install:
	npm install
start-c:
	npm run babel-node -- src/bin/brain-calc.js
start-e:
	npm run babel-node -- src/bin/brain-even.js
start:
	npm run babel-node -- src/bin/brain-games.js
