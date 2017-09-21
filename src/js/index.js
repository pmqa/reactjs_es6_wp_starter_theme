import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <h1>This is a React.js component. Edit /src/js/index.js to change this.</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react-div')
);
