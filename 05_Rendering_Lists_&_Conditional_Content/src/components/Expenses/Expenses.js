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

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filterYear}
          onChangeDropdown={filterChangeHandler}
        />
        {props.items
          .filter((elem) => elem.date.getFullYear() === parseInt(filterYear))
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
