import React from 'react';
class App extends React.Component {

  state = {
    value: null
  }

  handleKeyPress = e =>{
      let {value} = e.target
      this.setState({
        value: value
      })
  }


  render() {
    const {value} = this.state
    let length = value ? value.length : 0
     return (
        <div className="container">
          <textarea rows="3" onChange={this.handleKeyPress}></textarea>
          <div className="counter">{length}</div>
        </div>
    )
   
  }
}

export default App;
