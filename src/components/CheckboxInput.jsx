import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/CheckboxInput.module.css';

export default class CheckboxInput extends React.Component {
  render() {
    const {
      id, name, onInputChange, checked, hasTrunfo,
    } = this.props;

    if (hasTrunfo) {
      return <p>Você já tem um Super Trunfo em seu baralho</p>;
    }

    return (
      <label htmlFor={ id } className={ styles.CheckboxInput }>
        <input
          type="checkbox"
          onChange={ onInputChange }
          name={ name }
          id={ id }
          data-testid={ id }
          checked={ checked }
        />
        <span>Super Trybe Trunfo</span>
      </label>
    );
  }
}

CheckboxInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
