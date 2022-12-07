import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/VerticalInput.module.css';
import ValidationIcon from './ValidationIcon';

export default class VerticalInput extends Component {
  render() {
    const { content, id, name, onChange, type, value } = this.props;
    const commonProps = { content, id, name, onChange, value };
    const validationStatus = value.replaceAll(' ', '') !== '';

    let input;
    if (type === 'text') {
      input = (
        <input
          type="text"
          data-testid={ id }
          { ...commonProps }
          className={ styles.input }
        />
      );
    } else {
      input = (
        <textarea
          data-testid={ id }
          { ...commonProps }
          className={ styles.textarea }
        />
      );
    }

    return (
      <label htmlFor={ id } className={ styles.VerticalInput }>
        <span>{ content }</span>
        <div>
          { input }
          <ValidationIcon validationStatus={ validationStatus } />
        </div>
      </label>
    );
  }
}

VerticalInput.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
