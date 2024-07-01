import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, setBudget } from '../context/AppContextRedux';

const Budget = () => {
    // const { budget, currency, expenses } = useContext(AppContext);
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total = total + item.cost);
    // }, 0); // 0 is the initial value of the acumulator (total)
    // console.log("lalalla", totalExpenses)
    // const [newBudget, setNewBudget] = useState(budget);
    // const handleBudgetChange = (event) => {
    //     if(event.target.value > 20000){
    //         alert("Max budget is 20.000"+currency)
    //     } else if(event.target.value < totalExpenses ){
    //         alert('You cannot reduce the budget value lower than the current spending!')
    //     } 
    //     else setNewBudget(event.target.value);
    // }

    const budget = useSelector((state) => state.budget.budget)
    const currency = useSelector((state) => state.budget.currency)
    const dispatch = useDispatch()

    const handleBudgetChange = (event) => {
        if(event.target.value > 20000){
            alert("Max budget is 20.000"+currency)
        } 
        else {
            dispatch(setBudget(event.target.value));
        } 
    }
    

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;