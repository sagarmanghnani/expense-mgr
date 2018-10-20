import React, { Component } from 'react';
import Expenselist from './components/Expenselist';
import './App.css';

class App extends Component {
 constructor()
 {
   super()
   this.state = {
     expenselist:[]
   }
   this.addExpense = this.addExpense.bind(this);
   this.checkState = this.checkState.bind(this);
}


addExpense()
{ 
  this.title = document.getElementById("title").value;
  this.amount = document.getElementById("expenseMoney").value;
  this.expenseDate = document.getElementById("expenseDate").value;
  this.expenseObject = {
    title: this.title,
    amount: this.amount,
    date: this.expenseDate
  }
  console.log(this.expenseObject);
  this.setState({
    expenselist: [...this.state.expenselist, this.expenseObject]
  });
}


checkState()
{
  // this.setState({
  //   expenselist: [...this.state.expenselist, "hello"]
  // })
  console.log(this.state.expenselist);
}

  render() {
    return (
      <div className="App">
        <Expenselist getDetails = {this.addExpense}/>
        <button onClick = {() => {this.checkState()}} >check</button>
      </div>
    );
  }
}

export default App;
