import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear() === parseInt(filterYear);
  });

  let expensesContent = <p>No Expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((elem) => (
      <ExpenseItem
        key={elem.id}
        title={elem.title}
        amount={elem.amount}
        date={elem.date}
      />
    ));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filterYear}
          onChangeDropdown={filterChangeHandler}
        />
        {/* // props.items */}
        {/* // .filter((elem) => elem.date.getFullYear() === parseInt(filterYear)) <---myAnswer */}
      {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
