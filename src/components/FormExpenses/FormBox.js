import './FormBox.css'
import FormExpenses from './FormExpenses'
const FormBox = () => {

    const enteredDataExpenses = (expenses) => {
        const dataExpenses = {
            ...expenses,
            id: Math.random().toString()
        }
    }

    return (
        <div className='form-box__main'>
            <FormExpenses/>
        </div>
    )
}

export default FormBox