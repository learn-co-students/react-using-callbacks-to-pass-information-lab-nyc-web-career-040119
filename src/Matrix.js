import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()

    this.state = {
      currentColor:""
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell
    key={idx}
    color={val}
    currentColor={this.state.currentColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  selectedColor = (e) => {
    this.setState({currentColor: e.target.id})
  }

  render() {
    return (
      <div id="app">
        <ColorSelector color={this.selectedColor}/>
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
