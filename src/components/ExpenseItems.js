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

}


export default ExpenseItems