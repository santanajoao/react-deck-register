import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CheckboxInput from './CheckboxInput';
import styles from '../styles/Filters.module.css';

export default class Filters extends Component {
  render() {
    const { nameFilter, onInputChange, rareFilter, trunfoFilter } = this.props;
    return (
      <section className={ styles.Filters }>
        <h3>Filtros de busca</h3>

        <input
          value={ nameFilter }
          type="text"
          placeholder="Nome da carta"
          onChange={ onInputChange }
          name="nameFilter"
          disabled={ trunfoFilter }
          data-testid="name-filter"
          className={ styles.nameFilter }
        />

        <select
          value={ rareFilter }
          onChange={ onInputChange }
          name="rareFilter"
          disabled={ trunfoFilter }
          data-testid="rare-filter"
        >
          <option value="todas">Raridade</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>

        <CheckboxInput
          id="trunfo-filter"
          name="trunfoFilter"
          onInputChange={ onInputChange }
          checked={ trunfoFilter }
          hasTrunfo={ false }
        />
      </section>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};
