import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

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
