import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useSelector } from 'react-redux';
const ExpenseTotal = () => {
    const expenses = useSelector((state) => state.budget.expenses)
    const currency = useSelector((state) => state.budget.currency)
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
