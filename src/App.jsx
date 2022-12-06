import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardDescription: '',
    cardImage: '',
    cardName: '',
    cardTrunfo: false,
    cardRare: 'normal',
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  isEmpty = (...values) => (
    values.some((value) => value.replaceAll(' ', '') === '')
  );

  isValidAttr = (...values) => {
    const maxAttr = 90;
    const maxSum = 210;
    let sum = 0;
    return values.every((value) => {
      const number = Number(value);
      sum += number;
      return number >= 0 && number <= maxAttr && sum <= maxSum && value !== '';
    });
  };

  executeValidation = () => {
    this.setState(() => {
      const {
        cardAttr1, cardAttr2, cardAttr3, cardDescription, cardImage, cardName,
      } = this.state;

      const empty = this.isEmpty(cardDescription, cardImage, cardName);
      const notValidAttr = !this.isValidAttr(cardAttr1, cardAttr2, cardAttr3);

      return {
        isSaveButtonDisabled: empty || notValidAttr,
      };
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.executeValidation);
  };

  onSaveButtonClick = () => {};

  render() {
    return (
      <div className={ styles.App }>
        <Header />

        <article className={ styles.formAndPreview }>
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card { ...this.state } />
        </article>
      </div>
    );
  }
}

export default App;
