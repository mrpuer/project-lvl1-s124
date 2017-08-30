lint:
	npm run eslint src/.
publish:
	npm publish
install:
	npm install
start-b:
	npm run babel-node -- src/bin/brain-balance.js
start-n:
	npm run babel-node -- src/bin/brain-gcd.js
start-c:
	npm run babel-node -- src/bin/brain-calc.js
start-e:
	npm run babel-node -- src/bin/brain-even.js
start:
	npm run babel-node -- src/bin/brain-games.js
