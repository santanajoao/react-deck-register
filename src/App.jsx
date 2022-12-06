import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';

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

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  onSaveButtonClick = () => {};

  render() {
    return (
      <div className="App">
        <Header />

        <article className="formAndPreview">
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
