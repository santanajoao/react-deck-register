import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from '../styles/ValidationIcon.module.css';
import errorIcon from '../images/error.svg';
import sucessIcon from '../images/sucess.svg';

export default class ValidationIcon extends Component {
  render() {
    const { validationStatus } = this.props;
    if (validationStatus) {
      return (
        <img
          src={ sucessIcon }
          className={ styles.sucess }
          alt="Ícone de sucesso na validação"
        />
      );
    }
    return (
      <img src={ errorIcon } alt="Ícone de erro na validação" />
    );
  }
}

ValidationIcon.propTypes = {
  validationStatus: PropTypes.bool.isRequired,
};
