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

  const filteredExpenses = props.items.filter(expenses => {
    return expenses.date.getFullYear() === parseInt(filterYear);
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filterYear}
          onChangeDropdown={filterChangeHandler}
        />
        {filteredExpenses
          // props.items
          // .filter((elem) => elem.date.getFullYear() === parseInt(filterYear)) <---myAnswer
          .map((elem) => (
            <ExpenseItem
              key={elem.id}
              title={elem.title}
              amount={elem.amount}
              date={elem.date}
            />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
