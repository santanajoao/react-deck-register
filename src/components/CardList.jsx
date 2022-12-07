import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/CardList.module.css';
import Card from './Card';

export default class CardList extends Component {
  render() {
    const {
      nameFilter, removeCardFromList, rareFilter, savedCards, trunfoFilter,
    } = this.props;

    if (savedCards.length === 0) {
      return null;
    }

    let filtered;
    if (trunfoFilter) {
      filtered = savedCards.filter(
        ({ cardTrunfo }) => cardTrunfo === trunfoFilter,
      );
    } else {
      filtered = savedCards.filter(
        ({ cardName }) => cardName.includes(nameFilter),
      ).filter(({ cardRare }) => {
        let filter = rareFilter;
        if (rareFilter === 'todas') filter = '';
        if (rareFilter === 'raro') {
          return cardRare === rareFilter;
        }
        return cardRare.includes(filter);
      });
    }

    return (
      <ul className={ styles.CardList }>
        {
          filtered.map((cardObj) => (
            <li key={ cardObj.id }>
              <Card { ...cardObj } />
              <button
                type="button"
                onClick={ removeCardFromList }
                id={ cardObj.id }
                data-testid="delete-button"
              >
                Excluir
              </button>
            </li>
          ))
        }
      </ul>
    );
  }
}

CardList.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  rareFilter: PropTypes.string.isRequired,
  removeCardFromList: PropTypes.func.isRequired,
  savedCards: PropTypes.arrayOf(
    PropTypes.shape({
      cardAttr1: PropTypes.string.isRequired,
      cardAttr2: PropTypes.string.isRequired,
      cardAttr3: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardImage: PropTypes.string.isRequired,
      cardName: PropTypes.string.isRequired,
      cardRare: PropTypes.string.isRequired,
      cardTrunfo: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};
