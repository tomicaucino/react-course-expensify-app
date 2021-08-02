import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0],expenses [1], expenses[2] ]);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Shopping Bill',
        note: 'Just Shopping',
        amount: 30000,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[1], expenses[2], action.expense])
});

test('should edit expenses by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{
            description: 'I want to break free',
            note: 'Who are you?'
    }};
    const state = expensesReducer(expenses, action);
    expect(state[1]).toEqual({
        id: expenses[1].id,
        description: 'I want to break free',
        note: 'Who are you?',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    });
});

test('should not edit expenses if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '100',
        updates:{
            description: 'I want to break free',
            note: 'Who are you?'
    }};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});