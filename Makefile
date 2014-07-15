TESTS = test/test.js
REPORTER = spec

test:
	./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--bail \
		$(TESTS)

.PHONY: test
