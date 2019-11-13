# SMSGlobal Messaging App 
This app allows you to send messages using SMSGlobal REST API. It is built with:

* React 16.11.0 and React Hooks
* Redux and Redux Saga
* Styled Components
* Jest / Enzyme

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Show me the app

Follow these instructions to run it locally:
1. You will need Node.js and npm installed on your machine. I have built and tested the application using Node.js version 10.16.3 and npm version 6.9.0. Download link is here https://nodejs.org/download/release/v10.16.3/. Do you want to use yarn? I'm sure you can.
2. Open a terminal and switch to project directory
3. Install dependencies using `npm install`
4. Run `npm start` and go to http://localhost:3000 in browser
5. Run `npm test` and press `a` to see test results

Further details about available scripts and tests are mentioned below.

## Available Scripts
 
In the project directory, you can run:

### `npm install`

You should run this first to install project dependencies using npm.

### `npm start`

Runs the app in the development mode.<br />
Your browser should start automatically by default. If it doesn't, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
Press `a` to run all tests. You should see the output of the tests from there.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
Polyfills for IE11 are not currently included. Please use latest version of Google Chrome, Mozilla Firefox or Microsoft Edge browsers.

## What has been done
* You can do following with this app:
  * Save your API settings
  * Send a message
  * See last 5 outgoing message history and stats
* Have added custom hooks that allow us to integrate REST API and business logic with views
* Have added some unit tests for Redux to showcase testing approach
* Have added just enough UI components and styles to make the app useful
* Have added UI Library for base level user interface components
* Have plugged Redux and Saga for managing application state
* Have added ES6 modules in lib for shared functionality and logic

## Approach
* You might find the business logic approach a bit unusual as compared to most production React apps at the moment. The solution relies on React Hooks to provide the props and callbacks the views can 'use'. This is done specifically to improve code composition and follow better functional programming pattern while avoiding classes.
* My focus was to showcase React app architecture and building business logic in React using Hooks. You will notice a lot of emphasis on functional programming patterns.  
* Form inputs are controlled and do not store any local state
* App is using prop-types for props validation
* Code styling and formatting options can be seen in eslint and prettier config
* Have used simple constants for colours instead of theme (Not required for this simple app)
* Have used axios for network requests and preferred it over fetch due to ease and good browser support
* Have added a Layout component to render common UI components like Header
* Have used React Router for routing
* Have used React Lazy and Suspense for code splitting based on routes. This is enough when we do not need server side rendering.
* Have used Local Storage to save API keys in browser
* Have limited From input in Send Message form to alphabets only. Read more about it in the Future section below
* Have created a notify state in redux to handle notifications nicely. A hook is added to manage it.
* Have preferred named exports to follow components easily (either with linter, debugger or just looking at it)
* Have kept styled components in respective `styles.js` to avoid clutter in main components

## Architecture

Some important bits about how I built the app are here.

### Views
You can think of views as pages. However a view may be used for more than a page. One common scenario would be a view using sub routes for multiple pages. Views are connected directly to Routes from React Router.
* Views are great to have a top level component to do high level tasks for example blocking access to a page or avoiding cascading renders when the data is not yet ready.
* This also provides an easy way to provide SSR support if needed.

### Redux
It provides all components necessary for managing state with Redux. <br />

* **Actions:** These include Redux action creator. Convention is to provide pure functions as action creators. A note that this is not the place to handle async requests.<br />
* **Reducers:** These includes all Redux reducers that are combined using a helper from Redux. These are also pure functions.<br />
* **Selectors:** These are resolver functions that can be used with `useSelector` hook to fetch state from Redux store<br />
* **Sagas:** We are using Redux Saga for async logic with Redux. This is where we have wait for the actions requiring async functionality and initiate API requests as needed<br />

### Lib
These are essentially ES6 modules that we can use for specific functionality like making network requests, handling storage and creating API requests.

### Constants
Anything like strings that we can need to use across the app can be put here.

### Hooks
You will notice that hooks are extensively used for managing business logic throughout the app. The approach is to add hooks that views can access to either get data or get callback handlers. <br />
Some points to note about hooks are below:
* This pattern allows the code to read better, allows for awesome functional composition and will lead to better unit testing
* One other important benefit is decoupling and scalability hooks pattern provides. We can refactor code more easily and we can build more custom logic while *reusing* existing hooks

### UI Library
These are simply dumb UI components that should be reused and linked off to a design system.

### Components
Components can be defined as building blocks of our views. Components use parts from UI library to create a useful interface. Components can 'use' any hook to get appropriate props and handler functions to render UI as well as make it interactive.

## What's there for future
This app is not ready for production use. Following points make it clear:

* Have not done much work on responsive styling. Can do more there with grid, typography and overall styles
* Can add tests throughout the app especially around hooks, sagas and integration tests
* Project is using create-react-app tool for development and build. While this is easy to use, it may not be feasible option in an environment where we need customisations to build steps for CI/CD. A custom webpack configuration would be needed otherwise.
* UI Library should be linked to components in design system with storybook or something similar.
* Animations can be added as required
* Fonts can be locally hosted
* Accessibility can be improved
* Form validation can be improved to take into consideration blur events for instant validation without waiting for form submission
* Phone number should be validated either with Google phone lib or something similar
* Message character length may need to be revisited to take into account Unicode characters
* Send Message form requires interactive input validation
* From input in Send Message form should integrate with REST API for number suggestions that a user can select
* Reports page should use pagination and allow for better statistics reporting using charts and using data over longer period of time
* Can add loading states on Send Message form
* Can avoid using `display: none` using React conditional rendering based on a viewport
* Can namespace keys in Local Storage
* REST API integration is using HTTP which should be changed to HTTPS
* You will notice one Saga is not using action creators, instead it is putting actions directly. This can be improved
