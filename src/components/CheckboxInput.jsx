import React from 'react';

export default class CheckboxInput extends React.Component {
  render() {
    return (
      <label htmlFor="trunfo-input">
        <input type="checkbox" name="cardTrunfo" id="trunfo-input" />
        <span>Super Trybe Trunfo</span>
      </label>
    );
  }
}
