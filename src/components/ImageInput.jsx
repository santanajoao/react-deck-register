import React, { Component } from 'react';
import linkIcon from '../images/link.svg';
import ValidationIcon from './ValidationIcon';

export default class ImageInput extends Component {
  render() {
    return (
      <label htmlFor="image-input">
        <span>Imagem</span>
        <input type="text" name="cardImage" id="image-input" />
        <img src={ linkIcon } alt="" />
        <ValidationIcon conditionalVariable={ false } />
      </label>
    );
  }
}
