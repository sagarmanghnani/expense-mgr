import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/Expenselist.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export class Expenselist extends Component {
  constructor(){
    super()
    this.state = {
      modal: true
    }
    
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

 

 
  render() {
    return (
      <div className = "modal-container">
        <Button color="danger" onClick={this.toggle}>Hello</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}></Modal>
          <ModalHeader>
          <div>{this.state.modal}</div>
            Expense List
          </ModalHeader>
          <ModalBody>
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
            
          </div>
          </ModalBody>
          <ModalFooter>
            <button onClick = {() => this.props.getDetails()}>Submit</button>
            </ModalFooter>
      </div>
    );
  }
}

export default Expenselist
