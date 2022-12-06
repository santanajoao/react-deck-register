import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/VerticalInput.module.css';
import ValidationIcon from './ValidationIcon';

export default class VerticalInput extends Component {
  render() {
    const { content, id, name, onInputChange, type, value } = this.props;

    let input;
    if (type === 'text') {
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
    } else {
      input = (
        <textarea
          value={ value }
          onChange={ onInputChange }
          name={ name }
          id={ id }
          data-testid={ id }
        />
      );
    }

    return (
      <label htmlFor={ id }>
        <span>{ content }</span>
        <div className={ styles.inputAndIcon }>
          { input }
          <ValidationIcon conditionalVariable={ false } />
        </div>
      </label>
    );
  }
}

VerticalInput.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
