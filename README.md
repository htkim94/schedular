# Interview Scheduler

This is a react app which users can book, edit and cancel interviews. Data is received through scheduler-API server using PostgreSQL. Storybook is used to test components. Jest, Cypress are used for testing throughout the project.

## Final Product
###### Main Page
!["Main Page"](https://github.com/htkim94/schedular/blob/master/docs/scheduler_main_page.jpg)
###### Page responsive to screen size
!["Page responsive to screen size"](https://github.com/htkim94/schedular/blob/master/docs/scheduler_responsive.jpg)
###### Add / Edit interview component
!["Add / Edit interview component"](https://github.com/htkim94/schedular/blob/master/docs/scheduler_show_component.jpg)
###### Validation feature for empty name
!["Validation feature for empty name"](https://github.com/htkim94/schedular/blob/master/docs/scheduler_validation_emptyName.jpg)
###### Validation feature for empty interviewer
!["Validation feature for empty interviewer"](https://github.com/htkim94/schedular/blob/master/docs/scheduler_validation_emptyInterviewer.jpg)
###### Confirmation component when deleting an interview
!["Confirmation component when deleting an interview"](https://github.com/htkim94/schedular/blob/master/docs/scheduler_confirmation_component.jpg)

## Dependencies

- Axios
- Classnames
- Cypress
- Normalize.css
- React
- React-dom
- React-scripts

## Dev-dependencies

- @babel/core
- @storybook/addon-actions
- @storybook/addon-backgrounds
- @storybook/addon-link
- @storybook/addons
- @storybook/react
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/react-hooks
- babel-loader
- node-sass
- prop-types
- react-test-renderer

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
