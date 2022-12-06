import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class CardList extends Component {
  render() {
    const { savedCards } = this.props;
    return (
      <ul>
        {
          savedCards.map((cardObj) => (
            <li key={ cardObj.id } id={ cardObj.id }>
              <Card { ...cardObj } />
            </li>
          ))
        }
      </ul>
    );
  }
}

CardList.propTypes = {
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
