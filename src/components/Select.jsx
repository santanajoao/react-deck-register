import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.css';

export default class Select extends Component {
  render() {
    const { content, id, name } = this.props;
    return (
      <label htmlFor={ id } className={ styles.Select }>
        <span>{ content }</span>
        <select name={ name } id={ id }>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
