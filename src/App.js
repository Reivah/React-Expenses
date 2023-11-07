import { useState } from 'react'
import './App.css'
import ExpenseItems from './components/ExpenseItems'
import FormBox from './components/FormExpenses/FormBox'

const expenseArray = [
	{
		id: '1',
		title: 'Gaming computer',
		price: 5999.5,
		date: new Date(2022, 5, 20),
	},
	{
		id: '2',
		title: 'OLED TV',
		price: 2500.9,
		date: new Date(2022, 7, 10),
	},
	{
		id: '3',
		title: 'Food',
		price: 80.99,
		date: new Date(2023, 1, 15),
	},
	{
		id: 4,
		title: 'Books',
		price: 230.99,
		date: new Date(2023, 2, 10),
	},
]

function App() {
	const [expense, setExpenses] = useState(expenseArray)

	const dataExpenseHandler = expenses => {
		setExpenses(prevExpense => {
			return [expenses, ...prevExpense]
		})
	}

	return (
		<div>
			<h2 className='expenses-title'>Expenses List</h2>
			<div className='app-main'>
				<FormBox onDataExpenseHandler={dataExpenseHandler} />
				<ExpenseItems expensesArray={expense}></ExpenseItems>
			</div>
		</div>
	)
}

export default App
