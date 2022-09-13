import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 4, 5),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 4, 9) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 245.24,
      date: new Date(2022, 7, 14),
    },
    {
      id: 'e4',
      title: 'New Desk (Motion Desk)',
      amount: 450,
      date: new Date(2022, 8, 22),
    },
  ];


  const addExpenseHandler = (expenseData) => {
    const newExpense = {
      ...expenseData
    }
    console.log(newExpense, "in app");
    expenses.push(newExpense);
    console.log(expenses);
  }

  return (
    

    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
