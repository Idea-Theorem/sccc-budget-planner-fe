# Budget Planner

## Installation
Follow these steps to clone and run the project on your local machine.

### Prerequisites
Make sure you have NodeJS and Yarn installed on your machine.
- NodeJs: [Download](https://nodejs.org)
- Yarn: `npm install -g yarn`

### Clone the repository
```bash
git clone -b dev https://IdeaTheorem-dev@dev.azure.com/IdeaTheorem-dev/budget-planner-fe/_git/budget-planner-fe
```

### Navigate to project directory
```bash
cd budget-planner-fe
```

### Install dependencies
```bash
yarn install
```

## Usage
After installing the dependencies, you can start the development server using the following command:
```bash
yarn dev
```
This will run your project in development mode. Open your browser and visit [http://localhost:5173](http://localhost:5173) to see the application.

## Build
To build the project for production, run the following command:
```bash
yarn build
```
This will generate optimized production-ready files in the 'dist' directory.

## Deployment
Make any changes in required files and push them to dev branch. Pipelines are setup to ship and deploy changes to server.