import ExpensesElements from './ExpensesElements'
const ExpensesItems = props => {
	<div className='expenses-items'>
		<ExpensesElements
			title={props.expenseArray[0].title}
			price={props.expenseArray[0].price}
			date={props.expenseArray[0].date}/>
		<ExpensesElements
			title={props.expenseArray[1].title}
			price={props.expenseArray[1].price}
			date={props.expenseArray[1].date}/>
		<ExpensesElements
			title={props.expenseArray[2].title}
			price={props.expenseArray[2].price}
			date={props.expenseArray[2].date}/>
		<ExpensesElements
			title={props.expenseArray[3].title}
			price={props.expenseArray[3].price}
			date={props.expenseArray[3].date}
		/>
	</div>
}


export default ExpensesItems