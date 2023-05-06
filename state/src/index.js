import React from 'react';
import ReactDOM from 'react-dom';

class State extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      date : new Date()
    }
  }
  
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    ); 
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date : new Date()
    })
  }
  render(){
    return (<h1>{this.state.date.toString()}</h1>);
  };
}

ReactDOM.render(
  <State name="Rashmi Bharti"/>,
  document.getElementById("root")
);