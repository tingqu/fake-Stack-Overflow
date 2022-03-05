import React from 'react';
import Model from '../models/model.js';
import Header from './Header/Header.js';

// Create the new object for model
export default class FakeStackOverflow extends React.Component{
  render() {
    // the new model
    const model = new Model()
    // The state that control the appearance of each page 
    return (
      <>
      <Header  model={model}/>
      </>
    )
  }
}
