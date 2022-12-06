import React from 'react';
import PropTypes from 'prop-types';

export default class CheckboxInput extends React.Component {
  render() {
    const { onInputChange, cardTrunfo, hasTrunfo } = this.props;
    if (hasTrunfo) {
      return <p>Você já tem um Super Trunfo em seu baralho</p>;
    }

    return (
      <label htmlFor="trunfo-input">
        <input
          type="checkbox"
          onChange={ onInputChange }
          name="cardTrunfo"
          id="trunfo-input"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
        />
        <span>Super Trybe Trunfo</span>
      </label>
    );
  }
}

CheckboxInput.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
