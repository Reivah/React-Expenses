import './App.css'
import ExpensesElements from "./components/ExpensesElements";

function App() {
  return (
    <div>
      <h2 className='expenses-title'>Expenses List</h2>
      <ExpensesElements></ExpensesElements>
    </div>
  );
}

export default App;
