# React Application
![Linting](https://github.com/james-jenkinson/react-typescript-webpack-template/workflows/Linting/badge.svg)
![Testing](https://github.com/james-jenkinson/react-typescript-webpack-template/workflows/Testing/badge.svg)
![Deployment](https://github.com/james-jenkinson/react-typescript-webpack-template/workflows/Deployment/badge.svg)

## About this project
Add some information here about this application

## Development
This is a react project written in typescript, and bundled via webpack. Css styling can be imported directly in component files to apply component styling. Continuous integration / deployment is handled with Github actions.

* [See here for getting started with React](https://reactjs.org/docs/getting-started.html)
* [See here for getting started with Typescript](https://www.typescriptlang.org/docs)
* [See here for help with webpack](https://webpack.js.org)
* [See here for information on github actions](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions)

## Running locally
### Using npm
```
npm install
npm start
```

### Using docker
```
docker-compose up
```

Application will be served from localhost:8080.

In both cases the application will support hot reloading on changes to the source code.

## Tests

```
npm test
```

## Linting
```
npm run lint
```

## Continuous Integration
Continuous integration checks are run via Github actions. On each commit there run checks for:
* Unit test failures
* Lint errors

## Deployment
The application is deployed to the corresponding Github pages site of this repository (https://[owner].github.io/[repository])

### Continuous deployment
The application uses Github actions to deploy the code. When a commit is pushed to master the deployment workflow is triggered, and will deploy the site.

### Manual deployment
For deploying a specific branch, outside of the continuous deployment workflow (for exaple when wanting to test a specific feature live) you can trigger the manual deployment workflow. Go to Actions > Manual Deployment > Run Workflow, and select the branch you want to deploy from the dropdown.
