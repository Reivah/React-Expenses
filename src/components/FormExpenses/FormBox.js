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

    return (
        <div className='form-box__main'>
            <FormExpenses onEnteredDataExpenses={enteredDataExpenses}/>
        </div>
    )
}

export default FormBox