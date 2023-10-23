import './App.css'
import ExpensesElements from "./components/ExpensesElements";

function App() {
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
  return (
    <div>
      <h2 className='expenses-title'>Expenses List</h2>
      <ExpensesElements title={expenseArray[0].title} price={expenseArray[0].price} date={expenseArray[0].date}></ExpensesElements>
    </div>
  );
}

export default App;
