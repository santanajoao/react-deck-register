import React, { Component } from 'react';
import logo from '../images/logo.svg';
import styles from '../styles/Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <header className={ styles.Header }>
        <img src={ logo } className={ styles.logo } alt="logo tryunfo" />
      </header>
    );
  }
}
