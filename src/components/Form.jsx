import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Form.module.css';
import Title from './Title';
import VerticalInput from './VerticalInput';
import HorizontalInput from './HorizontalInput';
import Select from './Select';
import CheckboxInput from './CheckboxInput';

export default class Form extends Component {
  render() {
    const {
      cardAttr1, cardAttr2, cardAttr3, cardDescription,
      cardImage, cardName, cardTrunfo, cardRare, hasTrunfo,
      isSaveButtonDisabled, onSaveButtonClick, onInputChange,
    } = this.props;

    return (
      <form className={ styles.Form }>
        <Title content="Adicione nova carta" color="green" />
        <VerticalInput
          value={ cardName }
          type="text"
          onChange={ onInputChange }
          name="cardName"
          id="name-input"
          content="Nome"
        />

        <VerticalInput
          value={ cardDescription }
          type="textarea"
          onChange={ onInputChange }
          name="cardDescription"
          id="description-input"
          content="Descrição"
        />

        <HorizontalInput
          value={ cardAttr1 }
          type="number"
          onChange={ onInputChange }
          name="cardAttr1"
          id="attr1-input"
          content="Attr01"
        />
        <HorizontalInput
          value={ cardAttr2 }
          type="number"
          onChange={ onInputChange }
          name="cardAttr2"
          id="attr2-input"
          content="Attr02"
        />
        <HorizontalInput
          value={ cardAttr3 }
          type="number"
          onChange={ onInputChange }
          name="cardAttr3"
          id="attr3-input"
          content="Attr03"
        />

        <HorizontalInput
          value={ cardImage }
          type="text"
          onChange={ onInputChange }
          name="cardImage"
          id="image-input"
          content="Imagem"
        />

        <Select value={ cardRare } onInputChange={ onInputChange } />

        <div className={ styles.checkboxAndButton }>
          <CheckboxInput
            onInputChange={ onInputChange }
            name="cardTrunfo"
            id="trunfo-input"
            hasTrunfo={ hasTrunfo }
            checked={ cardTrunfo }
          />

          <button
            type="button"
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardRare: PropTypes.string.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
