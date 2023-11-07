import { useState } from 'react'
import './ExpensesList.css'
import ExpensesElements from './ExpensesElements'
const ExpensesList = (props) => {

    if(props.filterExpenses.length === 0){
        <h2 className='expense-list'>No expenses found</h2>
    }


    

    props.filterExpenses.map(expense => (
        <ExpensesElements key={expense.id} title={expense.title} price={expense.price} date={expense.date} />
    ))
    
   
}

export default ExpensesList