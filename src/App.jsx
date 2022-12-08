import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Title from './components/Title';
import Form from './components/Form';
import Card from './components/Card';
import Filters from './components/Filters';
import CardList from './components/CardList';

const INITIAL_STATE = {
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardDescription: '',
  cardImage: '',
  cardName: '',
  cardTrunfo: false,
  cardRare: 'normal',
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  state = {
    ...INITIAL_STATE,
    hasTrunfo: false,
    nameFilter: '',
    rareFilter: '',
    savedCards: [],
    trunfoFilter: false,
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

  generateKey = () => {
    const letters = 'abcdefghijklmnoprstuvwxyz';
    const numbers = '0123456789';
    const simbols = '!@#$%&_-~';
    const all = letters + numbers + simbols + letters.toUpperCase();
    const keyLength = 5;
    let key = '';
    while (key.length < keyLength) {
      const randomIndex = Math.floor(Math.random() * all.length);
      key += all[randomIndex];
    }
    return key;
  };

  onSaveButtonClick = () => {
    this.setState((prevState) => {
      const {
        cardAttr1, cardAttr2, cardAttr3, cardDescription,
        cardImage, cardName, cardRare, cardTrunfo, hasTrunfo,
      } = prevState;

      const newCard = {
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardDescription,
        cardImage,
        cardName,
        cardRare,
        cardTrunfo,
        id: this.generateKey(),
      };

      return {
        savedCards: [...prevState.savedCards, newCard],
        hasTrunfo: cardTrunfo || hasTrunfo,
      };
    }, () => this.setState(INITIAL_STATE));
  };

  removeCardFromList = ({ target }) => {
    this.setState(({ savedCards, hasTrunfo }) => {
      let removedWasTrunfo;
      const updatedCards = savedCards.filter(({ id, cardTrunfo }) => {
        if (id === target.id) {
          removedWasTrunfo = cardTrunfo;
        }
        return id !== target.id;
      });

      return {
        savedCards: updatedCards,
        hasTrunfo: removedWasTrunfo ? false : hasTrunfo,
      };
    });
  };

  render() {
    const { nameFilter, rareFilter, savedCards, trunfoFilter } = this.state;
    return (
      <div className={ styles.App }>
        <Header />

        <article className={ styles.formAndPreview }>
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />

          <section>
            <Title content="Adicione nova carta" color="green" />
            <Card { ...this.state } />
          </section>
        </article>
        <section className={ styles.filterAndCardList }>
          <Title content="Todas as cartas" color="white" />

          <Filters
            trunfoFilter={ trunfoFilter }
            rareFilter={ rareFilter }
            onInputChange={ this.onInputChange }
            nameFilter={ nameFilter }
          />

          <CardList
            savedCards={ savedCards }
            removeCardFromList={ this.removeCardFromList }
            onInputChange={ this.onInputChange }
            nameFilter={ nameFilter }
            rareFilter={ rareFilter }
            trunfoFilter={ trunfoFilter }
          />
        </section>
      </div>
    );
  }
}

export default App;
