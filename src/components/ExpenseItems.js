import { useState } from 'react'
import ExpensesElements from './ExpensesElements'
import ExpenseYearSearch from './ExpenseYearSearch'
const ExpenseItems = props => {
	const [selectedYear, setSelectedYear] = useState('2023')

	const selectedYearValue = yearValue => {
		const year = yearValue
		setSelectedYear(year)
	}

	const filterExpenses = props.expensesArray.filter(expense => expense.date.getFullYear().toString() === selectedYear)

	return (
		<div>
			<ExpenseYearSearch onSelectedYear={selectedYear} onSelectedYearValue={selectedYearValue} />
			{filterExpenses.map(expense => (
				<ExpensesElements key={expense.id} title={expense.title} price={expense.price} date={expense.date} />
			))}
		</div>
	)
}

export default ExpenseItems
