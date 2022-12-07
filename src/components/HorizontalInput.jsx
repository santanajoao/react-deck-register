import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ValidationIcon from './ValidationIcon';
import style from '../styles/HorizontalInput.module.css';

export default class HorizontalInput extends Component {
  render() {
    const { content, id, name, onChange, type, value } = this.props;
    const commonProps = { content, id, name, onChange, type, value };

    let validationStatus = false;
    let input;
    const maxAttr = 90;

    if (type === 'number') {
      input = <input min="0" max="90" data-testid={ id } { ...commonProps } />;

      const number = Number(value);
      validationStatus = number >= 0 && number <= maxAttr && value !== '';
    } else {
      input = (
        <input data-testid={ id } { ...commonProps } />
      );

      validationStatus = value.replaceAll(' ', '') !== '';
    }

    return (
      <label htmlFor={ id } className={ style.HorizontalInput }>
        <span>{ content }</span>
        <div>
          { input }
          <ValidationIcon validationStatus={ validationStatus } />
        </div>
      </label>
    );
  }
}

HorizontalInput.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
