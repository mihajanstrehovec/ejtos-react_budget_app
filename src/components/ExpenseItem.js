import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, deleteExpense } from '../context/AppContextRedux';

const ExpenseItem = (props) => {
    const currency = useSelector((state) => state.budget.currency)
    const dispatch = useDispatch()

    const handleDeleteExpense = (name) => {
        dispatch(deleteExpense(name))
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch(addExpense(expense))

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button style={{outline: 'none', border: 'none', background: 'none'}} onClick={event=> increaseAllocation(props.name)}><img src='https://img.icons8.com/?size=100&id=63650&format=png&color=000000' width='25px'/></button></td>
            <td><button style={{outline: 'none', border: 'none', background: 'none'}} onClick={event=> handleDeleteExpense(props.name)}><img src='https://img.icons8.com/?size=100&id=12386&format=png&color=000000' width='25px'/></button></td>
        </tr>
    );
};

export default ExpenseItem;
