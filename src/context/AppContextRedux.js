import { createSlice } from "@reduxjs/toolkit";

const initialStateRedux = {
    budget: 2000,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
    ],
    currency: '£'
}

export const budgetSlice = createSlice({
    name: 'budget',
    initialState: initialStateRedux,
    reducers:{
        addExpense: (state, action) => {
            console.log("adding budget")
            let totalBudget = state.expenses.reduce((prevExpense, currExpense) => {
                return prevExpense.cost + currExpense.cost
            }, 0)
            if(totalBudget > state.budget){
                alert("Cannot increase the allocation! Out of funds")
            } else {
                state.expenses.map((expense) => {
                    if(expense.name === action.payload.name){
                        expense.cost += action.payload.cost 
                    }
                    return expense
                })
            }
        },
        reduceExpense: (state, action) => {
            state.expenses.map((expense) => {
                if(expense.name === action.payload.name){
                    expense.cost -= action.payload.cost 
                    state.budget += action.payload.cost 
                }
                return expense
            }) 
        },
        deleteExpense: (state, action) => {
            state.expenses.map((expense) => {
                if(expense.name === action.payload){
                    expense.cost = 0
                    console.log(state.expenses)
                }
                return expense
            })
        },
        setBudget: (state, action) => {
            
            state.budget = action.payload
            console.log("hahaha", state.budget)
        },
        changeCurrency: (state, action) => {
            state.currency = action.payload
        }
    }
})

export const { addExpense, reduceExpense, deleteExpense, setBudget, changeCurrency } = budgetSlice.actions
export default budgetSlice.reducer