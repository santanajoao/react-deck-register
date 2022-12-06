import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ValidationIcon from './ValidationIcon';
import styles from '../styles/HorizontalInput.module.css';

export default class HorizontalInput extends Component {
  render() {
    const { content, id, name, onInputChange, type, value } = this.props;

    let input;
    if (type === 'number') {
      input = (
        <input
          value={ value }
          type="number"
          onChange={ onInputChange }
          name={ name }
          min="0"
          max="90"
          id={ id }
          data-testid={ id }
        />
      );
    } else {
      input = (
        <input
          value={ value }
          type="text"
          onChange={ onInputChange }
          name={ name }
          id={ id }
          data-testid={ id }
        />
      );
    }

    return (
      <label htmlFor={ id } className={ styles.label }>
        <span>{ content }</span>
        { input }
        <ValidationIcon conditionalVariable={ false } />
      </label>
    );
  }
}

HorizontalInput.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
