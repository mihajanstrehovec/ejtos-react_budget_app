import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import { useSelector } from 'react-redux';

const ExpenseList = () => {
    // const { expenses } = useContext(AppContext);
    const expenses = useSelector((state) => state.budget.expenses)
  console.log(expenses)
    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
            <tbody>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
            ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
