NODE_LOCAL_BIN=./node_modules/.bin

test:
	@${NODE_LOCAL_BIN}/mocha --reporter spec test/specs/**/*.js

.PHONY: test
