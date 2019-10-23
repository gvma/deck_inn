import React, {Component} from 'react';
import Axios from 'axios';
import './App.css';
import Card from './Card.js';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      cardList: []
    };
    Axios.get("https://db.ygoprodeck.com/api/v5/cardinfo.php").then((resp) => this.setState({
      cardList: resp.data.slice(0, 50)
    }));
  }
  render() {
    return (
      <div className="App">
        {
          this.state.cardList.map((value, index) => <Card cardData={value} key={index}/>)
        }
      </div>
    );
  }
}

export default App;
