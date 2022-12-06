import React from 'react';
import PropTypes from 'prop-types';

export default class CheckboxInput extends React.Component {
  render() {
    const { onInputChange, cardTrunfo } = this.props;
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
  onInputChange: PropTypes.func.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
