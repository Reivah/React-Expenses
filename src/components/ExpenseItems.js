import './ExpenseItems.css'
import ExpensesElements from './ExpensesElements'
const ExpenseItems = props => {
    return (
	<div className='expenses-items'>
		<ExpensesElements
			title={props.array[0].title}
			price={props.array[0].price}
			date={props.array[0].date}/>
		<ExpensesElements
			title={props.array[1].title}
			price={props.array[1].price}
			date={props.array[1].date}/>
		<ExpensesElements
			title={props.array[2].title}
			price={props.array[2].price}
			date={props.array[2].date}/>
		<ExpensesElements
			title={props.array[3].title}
			price={props.array[3].price}
			date={props.array[3].date}
		/>
	</div>

    )
}


export default ExpenseItems