import React from 'react';

function ShowExpensecomp(props) {
    return (
        <div>
            <div>{props.expenseObj.title}</div>
            <div>{props.expenseObj.amount}</div>
            <div>{props.expenseObj.expenseDate}</div>
        </div>  
    )
}

export default ShowExpensecomp;
