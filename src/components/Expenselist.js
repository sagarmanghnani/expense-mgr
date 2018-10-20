import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Expenselist extends Component {
  static propTypes = {

  }

  provideDetails()
  {

  }

  render() {
    return (
      <div className = "expenseList">
        <div className = "title">
          <label>Add Title</label>
          <input type = "text"  id="title"/>
        </div>

        <div className = "expenseAmount">
          <label>Add Expense money</label>
          <input type = "number" id = "expenseMoney"/>
        </div>

        <div className = "expenseCreatedDate">
          <label>Add Created Date</label>
          <input type = "date" id = "expenseDate"/>
        </div>
        
        <button onClick = {() => this.props.getDetails()}>Submit</button>
      </div>
    )
  }
}

export default Expenselist
