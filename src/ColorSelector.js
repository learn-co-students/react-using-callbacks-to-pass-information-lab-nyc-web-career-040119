import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx}
        id={str}
        className="color-swatch"
        style={{backgroundColor: str}}
        onClick={this.handleClick}/>
    })
  )

  handleClick = e => {
    this.props.changeSelectedColor(e.target.id)
  }

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
