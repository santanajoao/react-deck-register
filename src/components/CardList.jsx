import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/CardList.module.css';
import Card from './Card';

export default class CardList extends Component {
  render() {
    const { savedCards, removeCardFromList } = this.props;
    return (
      <ul className={ styles.CardList }>
        {
          savedCards.map((cardObj) => (
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
};
