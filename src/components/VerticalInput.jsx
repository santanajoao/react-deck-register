import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './VerticalInput.module.css';
import ValidationIcon from './ValidationIcon';

export default class VerticalInput extends Component {
  render() {
    const { content, id, name, type } = this.props;

    let input;
    if (type === 'text') {
      input = <input type="text" name={ name } id={ id } />;
    } else {
      input = <textarea name={ name } id={ id } />;
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
  type: PropTypes.string.isRequired,
};
