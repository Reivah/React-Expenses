import React from 'react'
import { useState } from 'react'
import './FormExpenses.css'
const FormExpenses = () => {



    return (
        <form>
            <div className='form-main'>
                <div className='form-main__box'>
                   <label type='text'>Expense name</label>
                   <input type='text' placeholder='Description'/>
                </div>
                <div className='form-main__box'>
                   <label type='number'>Price</label>
                   <input type='number' placeholder='Value'/>
                </div>
                <div className='form-main__box'>
                   <label type='date'>Date</label>
                   <input type='date'/>
                </div>
            </div>
            <div className='button-box'>
                <button type='submit'>Apply</button>
            </div>
        </form>
    )
}

export default FormExpenses