import React from 'react';

class App extends React.Component {
  state = {
    num1 : null,
    num2 : null,
    result: null
  }

  somar = () => {
    const result = parseInt(this.state.num1) + parseInt(this.state.num2)
    this.setState({result : result})
  }

  render(){
    return(

      <div>
        <label>Primeiro número:</label>
        <br/>
        <input
          type="text"
          value={this.state.num1}
          onChange={(e) => this.setState({num1 : e.target.value})}
        />
        <br/>
        <label>Segundo número:</label>
        <br/>
        <input
          type="text"
          value={this.state.num2}
          onChange={(e) => this.setState({num2 : e.target.value})}
        />
        <br/>
        O resultado é: {this.state.result}
        <br/>
        <button onClick={(this.somar)} >Somar</button>
      </div>
    )
  }
}

export default App;
