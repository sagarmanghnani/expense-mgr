import React from 'react';
import ShowExpensecomp from './ShowExpensecomp';
function ShowExpense(props)
{
    
        
            if(!props.giveExpense[0])
            {
                return(<div>No expense to show</div>)
            }
            else{
                return(
                   <div className = "showExpense">
                        {props.giveExpense.map((message, index) => {
                            return (<ShowExpensecomp expenseObj = {message} key = {index}/>)
                        })}
                    </div>
                )
            }
            
        
    
}
export default ShowExpense;