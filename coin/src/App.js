import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
    this.coin = this.coin.bind(this);
  }
  coin() {
    this.setState(() => {
      if (Math.random() < 0.5) {
        this.setState({ result: "heads" });
        console.log("head");
      } else {
        this.setState({ result: "tails" });
        console.log("tail");
      }
    });
  }
  



  render() {
    return (
      <div className="App">
      <div id="coin" className={this.state.result} key={+new Date()}>
          <div className="side1">
          </div>
          <div className="side2">
          </div>
        </div>
        <h1>Flip Coin</h1>
      <button className="btn" onClick={this.coin}>Please Click</button>
      </div>
    )
  }
}


export default App
