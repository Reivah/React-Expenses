import { useState} from 'react'
import './FormBox.css'
import FormExpenses from './FormExpenses'
const FormBox = (props) => {

    const enteredDataExpenses = (expenses) => {
        const dataExpenses = {
            ...expenses,
            id: Math.random().toString()
        }
        props.onDataExpenseHandler(dataExpenses)
        
    }

    const [isShowing, setIsShowing] = useState(false)


    const showExpenseBox = () => {
        setIsShowing(true)
    }

    const closeExpenseBox = () => {
        setIsShowing(true)
    }

    return (
        <div className='form-box__main'>
            <button className='form-box__btn'>Add New Expense</button>
            <FormExpenses onEnteredDataExpenses={enteredDataExpenses}/>
        </div>
    )
}

export default FormBox