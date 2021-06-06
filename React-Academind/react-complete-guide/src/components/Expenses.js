import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props){
    return (
        <div className="expenses">
        <ExpenseItem 
        title={props.expensesProp[0].title}
        amount={props.expensesProp[0].amount}
        date={props.expensesProp[0].date}F
        />
        <ExpenseItem 
        title={props.expensesProp[1].title}
        amount={props.expensesProp[1].amount}
        date={props.expensesProp[1].date}
        />
        <ExpenseItem 
        title={props.expensesProp[2].title}
        amount={props.expensesProp[2].amount}
        date={props.expensesProp[2].date}
        />
        <ExpenseItem 
        title={props.expensesProp[3].title}
        amount={props.expensesProp[3].amount}
        date={props.expensesProp[3].date}
        />
        </div>
    );
}

export default Expenses;