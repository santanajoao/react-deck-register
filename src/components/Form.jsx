import React, { Component } from 'react';
import styles from './Form.module.css';
import VerticalInput from './VerticalInput';
import NumberInput from './NumberInput';
import Select from './Select';
import ImageInput from './ImageInput';
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

        <NumberInput name="cardAttr1" id="attr1-input" content="Attr01" />
        <NumberInput name="cardAttr2" id="attr2-input" content="Attr02" />
        <NumberInput name="cardAttr3" id="attr3-input" content="Attr03" />

        <ImageInput />

        <Select name="cardRare" id="rare-input" content="Raridade" />

        <div className="checkboxAndButton">
          <CheckboxInput />
          <button type="button" data-testid="save-button">Salvar</button>
        </div>
      </form>
    );
  }
}
