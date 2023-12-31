import React from 'react'
import { useState } from 'react'
import './FormExpenses.css'
const FormExpenses = (props) => {

const [expenseName, setExpenseName] = useState('')
const [price, setPrice] = useState('')
const [date, setDate] = useState('')


const inputHandlers = (input, value) => {
    if(input === 'Expense name'){
        setExpenseName(value)
    }else if(input === 'Price'){
        setPrice(value)
    }else {
        setDate(value)
    }
}

const expenseInfoHandlers = event => {
    event.preventDefault()
    const expenseInfo = {
        title: expenseName,
        price: price,
        date: new Date(date)
    }
    props.onEnteredDataExpenses(expenseInfo)
    setExpenseName('')
    setPrice('')
    setDate('')
    
}

    return (
        <form onSubmit={expenseInfoHandlers}>
            <div className='form-main'>
                <div className='form-main__box'>
                   <label type='text'>Expense name</label>
                   <input type='text' placeholder='Description' onChange={(event) => {inputHandlers('Expense name', event.target.value)}}  />
                </div>
                <div className='form-main__box'>
                   <label type='number'>Price</label>
                   <input type='number' placeholder='Value' onChange={(event) => {inputHandlers('Price', event.target.value)}}  />
                </div>
                <div className='form-main__box'>
                   <label type='date'>Date</label>
                   <input type='date' onChange={(event) => {inputHandlers('Date', event.target.value)}} />
                </div>
            </div>
            <div className='button-box'>
                <button type='submit'>Apply</button>
                <button onClick={props.onCloseExpenseBox} type='button'>Cancel</button>
            </div>
        </form>
    )
}


export default FormExpenses