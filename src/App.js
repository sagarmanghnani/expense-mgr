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
   this.viewModal = this.viewModal.bind(this);
   this.hideModal = this.hideModal.bind(this);
}


todayDate()
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}
addExpense()
{ 
  let todayDates
  this.title = document.getElementById("title").value;
  this.amount = document.getElementById("expenseMoney").value;
  this.expenseDate = document.getElementById("expenseDate").value;

  // needed when server date is not set to today date and date provided is null
  if(this.expenseDate == "")
  {
    todayDates = this.todayDate();
  }
  else
  {
    todayDates = this.expenseDate;
  }
//ends here
  this.expenseObject = {
    title: this.title,
    amount: +this.amount,
    date: todayDates
  }
  
  console.log(this.expenseObject);
  this.setState({
    expenselist: [...this.state.expenselist, this.expenseObject]
  });
}

viewModal = () => {
  this.setState({
    showModal:!this.state.showModal
  });
}

hideModal = ()=>{
  this.setState({
    showModal:false
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
    else{
      this.modal = null;
    }
    return (
      <div className="App">
        
        <button onClick = {() => {this.checkState()}} >check</button>
        <button onClick = {() => this.viewModal()}>Show Modal</button>
        <button onClick = {() => {this.hideModal()}}>Hide Modal</button>
        <ShowExpense giveExpense = {this.state.expenselist}/>
        {this.modal}
      </div>
    );
  }
}

export default App;
