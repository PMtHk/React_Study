import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2022, 9, 2).toISOString();
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 234.56;

  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
