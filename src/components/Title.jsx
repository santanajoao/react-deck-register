import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Title.module.css';

export default class Title extends Component {
  render() {
    const { content, color } = this.props;
    if (color === 'green') {
      return <h1 className={ styles.Title }>{ content }</h1>;
    }
    return <h1 className={ `${styles.Title} ${styles.white}` }>{ content }</h1>;
  }
}

Title.propTypes = {
  color: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
