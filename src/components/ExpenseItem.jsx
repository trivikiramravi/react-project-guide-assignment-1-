import "./ExpenseItem.css";
import ExpensesDate from "./ExpensesDate";
function ExpenseItem(props) {
  
  return (
    <div className="expense-item">
    <ExpensesDate date={props.date}/>
    <div className="expense-item__description">
    <h2>{props.title}</h2>
    </div>
    <div className="expense-item__price">{props.amount}Rs</div>
    </div>
  );
}

export default ExpenseItem;
