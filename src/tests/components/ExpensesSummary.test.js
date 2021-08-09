import React from 'react';
import { ExpensesSummary } from "../../components/ExpenseSummary";
import { shallow } from 'enzyme';

test('should correctly render expenses summary with one expense', () => {
const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal = {235}/>)
expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses summary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {23} expensesTotal = {23512340987}/>)
expect(wrapper).toMatchSnapshot();
});