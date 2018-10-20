import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Expenselist extends Component {
  static propTypes = {

  }
  
  render() {
    return (
      <div className = "expenseList">
        <div className = "title">
          <label>Add Title</label>
          <input type = "text" name = "title"/>
        </div>

        <div className = "expenseAmount">
          <label>Add Expense money</label>
          <input type = "number" name = "expenseMoney"/>
        </div>

        <div className = "expenseCreatedDate">
          <label>Add Created Date</label>
          <input type = "date" name = "expenseDate"/>
        </div>
        
      </div>
    )
  }
}

export default Expenselist
