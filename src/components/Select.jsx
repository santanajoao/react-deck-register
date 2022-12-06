import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './Select.module.css';

export default class Select extends Component {
  render() {
    return (
      <label htmlFor="rare-input" className={ styles.Select }>
        <span>Rarirade</span>
        <select name="cardRare" id="rare-input" data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </label>
    );
  }
}
