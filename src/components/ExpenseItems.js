import { useState } from 'react'
import ExpensesElements from './ExpensesElements'
import ExpenseYearSearch from './ExpenseYearSearch'
const ExpenseItems = props => {

	const [selectedYear, setSelectedYear] = useState('2023')

	const selectedYearValue = (yearValue) => {
		const year = yearValue 
		setSelectedYear(year)
		
	}

    return (
	<div>
		<ExpenseYearSearch onSelectedYear={selectedYear} onSelectedYearValue={selectedYearValue}/>
		{props.expensesArray.map(expense => (
			<ExpensesElements key={expense.id} title={expense.title} price={expense.price} date={expense.date} />
		))}
	</div>

    )
    // return (
	// <div>
	// 	<ExpenseYearSearch onSelectedYear={selectedYear} onSelectedYearValue={selectedYearValue}/>
	// 	<ExpensesElements
	// 		title={props.array[0].title}
	// 		price={props.array[0].price}
	// 		date={props.array[0].date}/>
	// 	<ExpensesElements
	// 		title={props.array[1].title}
	// 		price={props.array[1].price}
	// 		date={props.array[1].date}/>
	// 	<ExpensesElements
	// 		title={props.array[2].title}
	// 		price={props.array[2].price}
	// 		date={props.array[2].date}/>
	// 	<ExpensesElements
	// 		title={props.array[3].title}
	// 		price={props.array[3].price}
	// 		date={props.array[3].date}
	// 	/>
	// </div>

    // )
}


export default ExpenseItems