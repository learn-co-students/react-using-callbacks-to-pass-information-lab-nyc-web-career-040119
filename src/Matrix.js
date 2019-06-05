import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      currentColor: ""
    }
  }

  selectColor = (event) => {
    this.setState({
      currentColor: event.currentTarget.style.backgroundColor
    })
    console.log('Matrix state', this.state)
  }

  changeColor = () => {
    return this.state.currentColor
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} changeColor={this.changeColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector
          selectColor={this.selectColor}
        />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
