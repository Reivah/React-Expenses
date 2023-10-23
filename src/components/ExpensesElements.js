import './ExpensesElements.css'
const ExpensesElements = props => {
	return (
		<div className='expenses-elements'>
			<div className='expenses-elements__date'>
				<div>{props.date.toLocaleString()}</div>
			</div>
			<div className='expenses-elements__items'>
				<h1>{props.title}</h1>
				<div className='expeneses-elements__price'>{props.price}$</div>
			</div>
		</div>
	)
}

export default ExpensesElements
