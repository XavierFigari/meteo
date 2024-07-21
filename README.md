# Meteo Node.js Application

## Project Overview

This project is an utterly simple Node.js application that displays in the terminal the weather for a specified location and the current date. It uses the `weather-js` package to fetch weather data.

The goal is to demonstrate the use of Node.js and external packages to build a small application that performs a specific task.

The application can be run locally on your machine by executing "npm run today" or "npm run weather" in the terminal. This will launch the Node server to serve the requests and display the output in the terminal (using `console.log()` statements). In real life, this application could be deployed to a server to serve requests from multiple users, again by running a node server. Of course, a better user interface would be needed.

## How does Node.js compare to JavaScript?

Node.js is a **_runtime environment_** that allows you to run JavaScript code outside of a web browser. It is mainly used for server-side programming, but it can also be used for building command-line tools and desktop applications.

The syntax of Node.js is very similar to that of JavaScript because Node.js is built on top of the Google Chrome V8 JavaScript engine. This means that Node.js can interpret and execute JavaScript code, and it supports most of the same language features and syntax as JavaScript.

However, Node.js provides additional built-in modules and APIs that are not available in client-side JavaScript. These modules and APIs allow you to perform server-side tasks, such as file I/O, networking, and database access, that are not possible with client-side JavaScript.

Node.js also provides a module system that allows you to organize your code into separate modules and import them into other modules (using `npm`, the Node.js package manager). This is different from client-side JavaScript, which typically uses global variables and functions.

## Files

### `weather.js`
This file fetches and logs the weather information for Valence, France.

### `today.js`
This file logs the current date.

### `package.json`
This file contains metadata about the project and its dependencies. It also defines scripts to run the application.

## `package.json` Explanation

The `package.json` file is a crucial part of any Node.js project. It serves several purposes:

- **Metadata**: Provides information about the project such as its name, version, description, and author.
- **Dependencies**: Lists the packages that the project depends on. In this case, the project depends on the `weather-js` package.
- **Scripts**: Defines custom commands that can be run using `npm run <script-name>`. This project has three scripts:
    - `test`: A placeholder script that currently does nothing but print an error message.
    - `today`: Runs the `today.js` script to display the current date.
    - `weather`: Runs the `weather.js` script to display the weather information.

Here is the content of the `package.json` file:
```json
{
  "name": "meteo",
  "version": "1.0.0",
  "description": "Affiche la météo",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "today": "node today.js",
    "weather": "node weather.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "weather-js": "^2.0.0"
  }
}
```

## How to Run the Application

1. **Install Dependencies**: Before running the application, you need to install the required dependencies. Run the following command in the project directory:
   ```sh
   npm install
   ```

2. **Run the Today Script**: To display the current date, run:
   ```sh
   npm run today
   ```

3. **Run the Weather Script**: To display the weather information for Valence, France, run:
   ```sh
   npm run weather
   ```

By following these steps, you can successfully run the application and see the desired outputs.

If the application is deployed to a server, it can serve multiple users simultaneously and provide weather information for different locations based on user input. The same npm scripts can be used to run the application on the server.