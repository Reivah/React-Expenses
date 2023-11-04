import { useState } from 'react'
import './App.css'
import ExpenseItems from './components/ExpenseItems';
import FormBox from './components/FormExpenses/FormBox';

const expenseArray = [
  {
    title: 'Gaming computer',
    price: 5999.50,
    date: new Date(2022,5,20)
  },
  {
    title: 'OLED TV',
    price: 2500.90,
    date: new Date(2022,7,10)
  },
  {
    title: 'Food',
    price: 80.99,
    date: new Date(2023,1,15)
  },
  {
    title: 'Books',
    price: 230.99,
    date: new Date(2023,2,10)
  }]

function App() {
  

    const dataExpenseHandler = (expenses) => {
        console.log(expenses);
        console.log('check ');
    }

  return (
    <div>
      <h2 className='expenses-title'>Expenses List</h2>
      <div className='app-main'>
      <FormBox onDataExpenseHandler={dataExpenseHandler}/>
      <ExpenseItems array={expenseArray}></ExpenseItems>
      </div>
    </div>
  );
}

export default App;
