import React, { Component } from 'react';

// import { Container } from './styles';

export default class App extends Component {
  render() {
    return (
      <div><p>It's running in {process.env.NODE_ENV}</p></div>
    );
  }
}
