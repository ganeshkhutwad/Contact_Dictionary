import React, { Component } from 'react';
import { Header } from 'components';
import { List } from 'containers';

class App extends Component {

  constructor() {
    super();
    this.appTitle = 'Contact Details';
  }
  render() {
    return (
      <div>
        <Header heading={this.appTitle} />
        <List />
      </div>
    );
  }
}

export default App;
