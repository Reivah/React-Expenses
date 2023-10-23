import './ExpensesElements.css'
import Date from './Date'
const ExpensesElements = props => {
	return (
		<div className='expenses-elements'>
			<div className='expenses-elements__date'>
				<Date date={props.date}></Date>
			</div>
			<div className='expenses-elements__items'>
				<h1>{props.title}</h1>
				<div className='expeneses-elements__price'>{props.price}$</div>
			</div>
		</div>
	)
}

export default ExpensesElements
