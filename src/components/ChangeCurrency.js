import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
       dispatch({
        type: 'CHG_CURRENCY',
        payload: event.target.value
       })
    }
    return (
        <div className='alert alert-secondary'>
            <label for='currency'>Currency</label>
            <select name="currency" id="currency" value={currency} onChange={handleCurrencyChange}>
                <option value="$">($ Dollar)</option>
                <option value="£">(£ Pound)</option>
                <option value="€">(€ Euro)</option>
                <option value="₹">(₹ Ruppee)</option>
            </select>
        </div>
    );
};
export default ChangeCurrency;