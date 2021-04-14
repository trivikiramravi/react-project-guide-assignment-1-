import Expenses from "../Expenses";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesNew.css";
function ExprensesNew(){
    return(<div className="Expenses">
    {Expenses.map((expense)=>(
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
      }  
      </div>    
      );
    
}
export default ExprensesNew;