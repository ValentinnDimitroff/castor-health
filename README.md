# Getting Started with Castor Health

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What and Why I have choosen as packages

### Used packages
- *react-jss*
    - fast and easy way to provide theming
    - optimizing and rendering only used classes
    - provides safety against overlapping class names
    - supports nesting rules
- *react-router-dom*
    - easy and efficient routing
- **react-redux* - not utilzed for managing the state because of lack of time

### Folders structure
- *theme.js* - configurations of the theme
- *components* - stores all react based components
    - *design*
        - stores all generic components styled according to the Desgin System
        - exports everything at root level to allow changes to the structure inside without affecting the rest of the imports in the pages'components
    - *layout* 
        - stores the layout components
    - *metrics* 
        - the different metrics views ordered according to the urls available
    - *shared* 
        - common base components used at more than one route

### Important files
- *theme.js* - configurations of the theme
- *Routes.js* - configurations of the routes

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.