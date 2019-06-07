import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  handleClick = () => {
    console.log(this.state.color)
    this.setState({
      color:this.props.currentColor
    },() => { console.log(this.state)})
  }

  render() {
    return (
      <div
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}
        >
      </div>
    )
  }

}
