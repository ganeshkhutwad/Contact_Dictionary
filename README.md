# Contact Dictionary

Contact Dictionary is a single page CRUD application to manage contact details.

# Features!

  - Get Contacts list.
  - Add Contact
  - Edit Contact
  - Delete Contact.

### Tech

Contact Dictionary uses a number of open source projects to work properly:

* [React](https://reactjs.org/) - JavaScript library for building user interfaces.
* [VSCode Editor](https://code.visualstudio.com/) - awesome text editor.
* [Redux](https://redux.js.org/) - Predictable state container for JavaScript apps.
* [Material-UI](https://material-ui.com/) - The world's most popular React UI framework.
* [Node.js](https://nodejs.org/en/) - evented I/O for the backend
* [Express](https://expressjs.com/) - fast node.js web framework for Node.js
* [Webpack](https://webpack.js.org/) - static module bundler for modern JavaScript applications.

### Browsers Support
  - Tested on Chrome, Mozilla Firefox, and Microsoft Edge Browsers.

### Installation

Contact Dictionary requires [Node.js](https://nodejs.org/en/) v8+ to run.

Steps to run the application.
 - Clone project
```sh
$ cd Contact_Dictionary
$ npm install or yarn install
$ npm run start or yarn start
```

### Folder Structure

    .

    ├── src                       # Source files, It contains client as well as server files.
          ├── client              # Client Files.
                ├── __test__      # It contains all unit test cases.
                ├── actions       # It contains action creators.
                ├── components    # Folder for Presentational/Dumb Components.
                ├── contants      # Application level contants.
                ├── containers    # Container/Smart Components.
                ├── reducers      # Reducers to get new state based on action.
                ├── store         # Setup application store.
                ├── test-report   # Report generated in HTML format when unit test cases executes.
                └── index.js      # Entry point for application.

          ├── server              # Server Files.
                ├── index.js      # Used Built-in middlewares and create HTTP server and run it.
                └── routes        # All routes/REST APIs maintained here.
    └── README.md                 # Guidelines for application setup and details.


### Development

Want to contribute? Great!

Contact Dictionary uses Webpack, Hot reloading module for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ npm run server or yarn server
```

Second Tab:
```sh
$ npm run client or yarn client
```

(optional) Third: To generate unit test report. It also generate report in html format.
```sh
$ npm run test or yarn test
```

(optional) Test coverage
```sh
$ npm run test:coverage or yar test:coverage
```

#### Building for source
For production release:
```sh
$ npm run build or yarn build
```

### Todos

 - Write MORE Tests.
 - Create application document using Storybook.

License
----

MIT


**Free Software, Hell Yeah!**
