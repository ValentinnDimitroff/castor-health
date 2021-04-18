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
    - extra dependency which could be escaped with using a context but improves readabilty
---
###### after 4-th hour
- *react-redux*
    - extract common state and provides out of the box optimizations
    - again extra dependency which could be managed by a context but:
    - in the long term offers easy way to integrate sagas or thunks to implement complex asynchronius workflows
- *redux/toolkit*
    - cuts out a lot of boilerplate code around managing state using redux
    - built-in immutability but allows to interact with the state as a mutuble object - removes a lot of uglyness inside the reducers
    - easier to manage and make changes to reducers structure
    - encourages using of the "Colocation" pattern around each piece of the state
- *material-ui/icons* 
    - rich set of icons offering native use
    - on build - bundle-size efficient
    
### Folders structure
- *theme.js* - configurations of the theme
- *components* - stores all react based components
    - *design*
        - stores all generic components styled according to the Desgin System
        - exports everything at root level to allow changes to the structure inside without affecting the rest of the imports in the pages'components
        - acts as a fascade for third party imported components in case they need to be changed or modified
    - *layout* 
        - stores the layout components
    - *metrics* 
        - the different metrics views ordered according to the urls available
    - *shared* 
        - common base components used at more than one route

### Important files
- *theme.js* - configurations of the theme
- *Routes.js* - configurations of the routes

## Improvements after 4-th hour
- added state mangement using redux and redux/toolkit
- improved editing by retrieving data directly from the store and allows refreshing without loosing data
- added create pages for all metrics
- added average calculations
- added trend calculations and icons for better visualization

## Summary
Overall I had difficulty in choosing between more complex or a simple approach for some tasks because I didn't have the exact scope of the whole application. So in many cases I decided to choose something in the middle - not overcomplicating too much and extracting all possible common pieces of logic. \
But still I tried to make sure that once the app gets extended (e.g. with more types of metrics added) or the common logic needs to be altered, it will happen at minimal costs.

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