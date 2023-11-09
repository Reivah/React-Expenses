
import './ExpensesList.css'
import ExpensesElements from './ExpensesElements'
const ExpensesList = (props) => {

    

    if(props.filterExpensesArray.length === 0){
        return <h2 className='expenses-list'>No expenses found</h2>
    }
    
    return props.filterExpensesArray.map(expense => (
        <ExpensesElements key={expense.id} title={expense.title} price={expense.price} date={expense.date} />
        
    ))

    

    
   
}

export default ExpensesList