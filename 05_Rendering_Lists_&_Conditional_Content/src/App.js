import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 4, 5),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2019, 4, 9) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 245.24,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e4',
      title: 'New Desk (Motion Desk)',
      amount: 450,
      date: new Date(2021, 8, 22),
    },
  ]);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prev) => [expenseData, ...prev,]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
