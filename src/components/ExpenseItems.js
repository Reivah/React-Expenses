import { useState } from 'react'

import ExpenseYearSearch from './ExpenseYearSearch'
import ExpensesList from './ExpensesList'
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
			<ExpensesList filterExpensesArray={filterExpenses}/>
		</div>
	)
}

export default ExpenseItems
