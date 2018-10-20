import React, { Component } from 'react';
import Expenselist from './components/Expenselist';
import ShowExpense from './components/ShowExpense';
import './App.css';

class App extends Component {
 constructor()
 {
   super()
   this.state = {
     expenselist:[],
     showModal:false
   }
   this.modal = null;
   this.addExpense = this.addExpense.bind(this);
   this.checkState = this.checkState.bind(this);
   this.viewModal = this.viewModal.bind(this)
}


addExpense()
{ 
  this.title = document.getElementById("title").value;
  this.amount = document.getElementById("expenseMoney").value;
  this.expenseDate = document.getElementById("expenseDate").value;
  this.expenseObject = {
    title: this.title,
    amount: +this.amount,
    date: this.expenseDate
  }
  console.log(this.expenseObject);
  this.setState({
    expenselist: [...this.state.expenselist, this.expenseObject]
  });
}

viewModal = () => {
  this.setState({
    showModal:true
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
    
    if(this.state.showModal)
    {
      this.modal = (
        <Expenselist getDetails = {this.addExpense}/>
      )
    }
    return (
      <div className="App">
        
        <button onClick = {() => {this.checkState()}} >check</button>
        <button onClick = {() => this.viewModal()}>Show Modal</button>
        <ShowExpense giveExpense = {this.state.expenselist}/>
        {this.modal}
      </div>
    );
  }
}

export default App;
