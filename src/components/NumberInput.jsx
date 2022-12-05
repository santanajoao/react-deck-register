import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ValidationIcon from './ValidationIcon';
import styles from './NumberInput.module.css';

export default class NumberInput extends Component {
  render() {
    const { content, id, name } = this.props;
    return (
      <label htmlFor={ id } className={ styles.label }>
        <span>{ content }</span>
        <input type="number" min="0" max="90" name={ name } id={ id } />
        <ValidationIcon conditionalVariable={ false } />
      </label>
    );
  }
}

NumberInput.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
