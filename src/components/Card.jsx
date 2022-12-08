import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Card.module.css';
import Trunfo from './Trunfo';

export default class Card extends Component {
  render() {
    const {
      cardAttr1, cardAttr2, cardAttr3, cardDescription,
      cardImage, cardName, cardRare, cardTrunfo,
    } = this.props;

    return (
      <div className={ styles.Card }>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img src={ cardImage } data-testid="image-card" alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        <ul>
          <li data-testid="attr1-card">
            <h3>Attr01</h3>
            <span>{ cardAttr1 }</span>
          </li>
          <li data-testid="attr2-card">
            <h3>Attr02</h3>
            <span>{ cardAttr2 }</span>
          </li>
          <li data-testid="attr3-card">
            <h3>Attr03</h3>
            <span>{ cardAttr3 }</span>
          </li>
        </ul>
        <div>
          <span data-testid="rare-card" className={ styles.cardRare }>
            { cardRare }
          </span>
          <Trunfo cardTrunfo={ cardTrunfo } />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardRare: PropTypes.string.isRequired,
};
