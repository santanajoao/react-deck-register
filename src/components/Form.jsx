import React, { Component } from 'react';
import styles from './Form.module.css';
import VerticalInput from './VerticalInput';
import HorizontalInput from './HorizontalInput';
import Select from './Select';
import CheckboxInput from './CheckboxInput';

export default class Form extends Component {
  render() {
    return (
      <form className={ styles.Form }>
        <VerticalInput
          type="text"
          name="cardName"
          id="name-input"
          content="Nome"
        />

        <VerticalInput
          type="textarea"
          name="cardDescription"
          id="description-input"
          content="Descrição"
        />

        <HorizontalInput
          type="number"
          name="cardAttr1"
          id="attr1-input"
          content="Attr01"
        />
        <HorizontalInput
          type="number"
          name="cardAttr2"
          id="attr2-input"
          content="Attr02"
        />
        <HorizontalInput
          type="number"
          name="cardAttr3"
          id="attr3-input"
          content="Attr03"
        />

        <HorizontalInput
          type="text"
          name="cardImage"
          id="image-input"
          content="Imagem"
        />

        <Select name="cardRare" id="rare-input" content="Raridade" />

        <div className="checkboxAndButton">
          <CheckboxInput />

          <button type="button" data-testid="save-button">Salvar</button>
        </div>
      </form>
    );
  }
}
