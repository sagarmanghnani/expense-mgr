import React, { Component } from 'react';

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
                            return(<div>{message.title}</div>)
                        })}
                    </div>
                )
            }
            
        
    
}
export default ShowExpense;