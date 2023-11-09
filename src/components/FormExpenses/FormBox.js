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

    const [isShowingExpenseInput, setIsShowingExpenseInput] = useState(false)

    const showExpenseBox = () => {
        setIsShowingExpenseInput(true)
    }

    const closeExpenseBox = () => {
        setIsShowingExpenseInput(true)
    }

    return (
        <div className='form-box__main'>
            <FormExpenses onEnteredDataExpenses={enteredDataExpenses}/>
        </div>
    )
}

export default FormBox