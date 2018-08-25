import React, { Component } from 'react';
import { Header, ContactList } from 'components';

class App extends Component {

  constructor() {
    super();
    this.appTitle = 'Contact Details';
  }
  render() {
    return (
      <div>
        <Header heading={this.appTitle} />
        <ContactList />
      </div>
    );
  }
}

export default App;
