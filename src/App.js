import React from 'react';
import './App.css';
import Collapsible from './components/Collapsible';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        "version": "v0.0.0",
        "palettes": [
          {
            "name": "Tardis Blue",
            "from": "Doctor Who",
            "colors": [
              "003A6E",
              "9B9A99",
              "000000",
              "FFFFFF",
              "6F4500"
            ]
          },
          {
            "name": "Millenium Falcon",
            "from": "Star Wars",
            "colors": [
              "B6B6BE",
              "D8D7D4",
              "413A31",
              "746C66",
              "A32D2C"
            ]
          },
          {
            "name": "Battlestar Galactica",
            "from": "Battlestar Galactica",
            "colors": [
              "080F19",
              "1B2E3F",
              "364269",
              "3D6973",
              "E5635F"
            ]
          },
          {
            "name": "Serenity",
            "from": "Firefly",
            "colors": [
              "3C5375",
              "7285A6",
              "96AABF",
              "F1DB7E",
              "0C0C0C"
            ]
          },
          {
            "name": "Nostromo",
            "from": "Alien",
            "colors": [
              "08070C",
              "F4F3F5",
              "121828",
              "464F75",
              "9ABEF2"
            ]
          }
        ]
      },
      cid: null
    };
    this.handleCollapsible = this.handleCollapsible.bind(this);
  }

  handleCollapsible(event) {
    const newCid = event.currentTarget.getAttribute('data-id');
    this.setState(prevState => {
      if (newCid === prevState.cid) {
        return {
          cid: null
        }
      } else {
        return {
          cid: newCid
        }
      }
    });
  }

  render() {
    return (
      <div className="App">
          {this.state.data.palettes.map((item, index) => {
            return (
              <Collapsible 
                id={`c0${index}`}
                key={`c0${index}`}
                name={item.name}
                tv={item.from}
                cidState={this.state.cid}
                action={this.handleCollapsible}
              />
            );
          })}

      </div>
    );
  }
}

export default App;
