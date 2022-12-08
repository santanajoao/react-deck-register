import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Trunfo.module.css';

export default class Trunfo extends Component {
  render() {
    const { cardTrunfo } = this.props;
    if (cardTrunfo) {
      return (
        <span data-testid="trunfo-card" className={ styles.Trunfo }>
          Super Trunfo
        </span>
      );
    }
    return null;
  }
}
Trunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
};
