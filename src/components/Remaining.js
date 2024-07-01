import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useSelector } from 'react-redux';
const Remaining = () => {
    // const { expenses, budget, currency } = useContext(AppContext);
    const expenses = useSelector((state) => state.budget.expenses)
    const budget = useSelector((state) => state.budget.budget)
    const currency = useSelector((state) => state.budget.currency)
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
