#Makefile
install:
	npm ci

brain-gcd:
	bin/brain-gcd.js

brain-games:
	bin/brain-games.js

brain-even:
	bin/brain-even.js

brain-calc:
	bin/brain-calc.js

publish: 
	npm publish --dry-run

lint:
	npx eslint .
