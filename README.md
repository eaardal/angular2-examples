# Angular2 Examples
A playground for angular2 examples and concepts, for testing and showing how concepts are implemented.

This repository aims to be a knowledgebase and proof of concept source for figuring out Angular2.

See README.md files under each source folder for more info.

## Dependencies
- [Python 2.7](https://www.python.org/downloads/), required by some npm packages.
- A C++ compiler might also be required by some npm packages.
- `npm i -g live-server, grunt-cli, tsd, typescript, bower`

## Usage
- Just browse the repository's code, or:
- Install dependencies: `npm install`, `bower install`, `tsd install`
- `grunt test`

## Notes
- Karma is currently not working. Run tests with `grunt test` which will start and run the Jasmine tests in `src/unit-tests.html`.

## Troubleshooting
If "failed to locate CL.exe" or similar during npm install:
- [Visual C++ compiler missing StackOverflow issue](http://stackoverflow.com/questions/33239445/could-not-install-prerender-using-npm-failed-to-locate-cl-exe)
