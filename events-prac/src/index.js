import React from 'react'
import ReactDOM from 'react-dom'

class Toggle extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isToggleOn : true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(
      {isToggleOn : !this.state.isToggleOn}
    )
    console.log(this.state.isToggleOn);
  }


  render(){
    return (
      <h1><button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button> </h1>
    )
  }
}

ReactDOM.render(
  <Toggle/>,
  document.getElementById('root')
);