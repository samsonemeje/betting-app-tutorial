import React, { Component } from 'react';
export const BetContext = React.createContext();

class BetContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      lightTheme: true,
      lightOption: {
        modeFont: '#022c43',
        backgroundHex: '#b590ca',
        buttonHex: '#fdfdf6',
      },
      darkOption: {
        modeFont: '#222831',
        backgroundHex: '#0f4c81',
        buttonHex: '#e9e1cc',
      },
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme = () => {
    this.setState({
      lightTheme: !this.state.lightTheme
    })
  }

  render() {
    return (
      <div>
        <BetContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
          {this.props.children}
        </BetContext.Provider>
      </div>
    );
  }
}

export default BetContextProvider;
