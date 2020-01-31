# Frontend Repo for [LinkUp](https://jc-task.now.sh/).

## Requirements

For development, you will need Node.js installed on your environement and a text editor.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v12.13.0

    $ npm --version
    6.12.0

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/ORG/PROJECT.git
    $ cd PROJECT
    $ npm install or yarn install

## Start & watch

    $ npm start

## Simple build for production

    $ npm run build

## Languages & tools

### React

- [React](https://reactjs.org/) for making awesome single page apps

### JavaScript

### LESS

- [LESS](http://lesscss.org) Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS.

-[Less Watch Compiler](https://www.npmjs.com/package/less-watch-compiler) Less watch compiler was used to compile less to css