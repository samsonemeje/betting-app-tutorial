import React, { Component } from 'react';
import './index.css';
import { BetContext } from './BetContext';

class DisplayBoard extends Component {
  constructor() {
    super();
    this.state = {
      stakes: 4,
      unit: 32.08,
      bet_price: 0,
      winning_average: 22,
    };
    this.handlePrice = this.handlePrice.bind(this);
    this.handleStake = this.handleStake.bind(this);
    this.clearPrice = this.clearPrice.bind(this);
    this.clearStake = this.clearStake.bind(this);
  }
  // event handler for stake clicks
  handleStake() {
    this.setState({
      stakes: this.state.stakes * 2,
    });
  }
  // event handler for price clicks
  handlePrice() {
    this.setState({
      bet_price: this.state.bet_price + this.state.unit,
    });
  }
  // event for clearing price
  clearPrice() {
    this.setState({
      bet_price: this.state.bet_price * 0,
    });
  }
  // event for clearing stake
  clearStake() {
    this.setState({
      stakes: this.state.stakes * 0 + 4,
    });
  }

  static contextType = BetContext;

  render() {
    const { lightTheme, lightOption, darkOption } = this.context;
    const applyTheme = lightTheme ? lightOption : darkOption;
    return (
      <div className='main-div' style={{ backgroundColor: applyTheme.backgroundHex }} >
        <div className="info-btns">
          <button style={{ color: applyTheme.modeFont, backgroundColor: applyTheme.buttonHex, }} className='my-button' > {this.state.stakes} </button>
          <button style={{ color: applyTheme.modeFont, backgroundColor: applyTheme.buttonHex, }} className='my-button' > Bet price: {this.state.winning_average}
          </button>
          <button style={{ color: applyTheme.modeFont, backgroundColor: applyTheme.buttonHex, }} className='my-button' > Unit price: {this.state.unit}
          </button>
          <button style={{ color: applyTheme.modeFont, backgroundColor: applyTheme.buttonHex, }} className='my-button' > {this.state.bet_price} </button>
        </div>
        <div className='sub-div'>
          <button style={{ color: applyTheme.modeFont, backgroundColor: applyTheme.buttonHex, }} className='event-buttons' onClick={this.handleStake} > Add Stakes </button>
          <button style={{ color: applyTheme.modeFont, backgroundColor: applyTheme.buttonHex, }} className='event-buttons' onClick={this.clearStake} > Clear Stakes </button>
          <button style={{ color: applyTheme.modeFont, backgroundColor: applyTheme.buttonHex, }} className='event-buttons' onClick={this.handlePrice} > Add Price </button>
          <button style={{ color: applyTheme.modeFont, backgroundColor: applyTheme.buttonHex, }} className='event-buttons' onClick={this.clearPrice} > Clear Price </button>
        </div>
      </div>
    );
  }
}

export default DisplayBoard;
