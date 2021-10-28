import React, { Component } from 'react'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'

class AgeComputer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
  }

  handleChange(date, dateString) {
    console.log(date)
    console.log(dateString)
    let newAge = ''
    if (dateString) {
      let temp = (
        new Date().getFullYear() -
        parseInt(dateString.substring(0, 4))
      ).toString()
      if (temp < '18') {
        newAge = '不到18歲'
      } else {
        newAge = temp
      }
    } else {
      newAge = ''
    }
    this.setState({
      age: newAge,
    })
  }

  handleChange2(e) {
    console.log('e.target.value:' + e.target.value)
    let newAge = e.target.value.toString()
    this.setState({
      age: newAge,
    })
    console.log('this.state.age' + this.state.age)
  }
  render() {
    return (
      <div>
        <span>出生日期</span>
        <DatePicker
          onChange={this.handleChange}
        ></DatePicker>
        <span style={{ marginLeft: '50px' }}>Age</span>
        <input
          type="text"
          value={this.state.age}
          onChange={this.handleChange2}
        ></input>
        {/* <span>{this.state.age}</span> */}
      </div>
    )
  }
}
export default AgeComputer
