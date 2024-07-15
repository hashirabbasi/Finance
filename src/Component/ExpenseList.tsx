import React from 'react';
import { Expense } from '../types/Expense';
import ExpenseItem from './ExpenseItem';
import styled from 'styled-components';
import { space, layout, color, typography } from 'styled-system';

const ListWrapper = styled.div`
  ${space}
  ${layout}
  ${color}
  ${typography}
`;

interface ExpenseListProps {
  expenses: Expense[];
  onEdit: (expense: Expense) => void;
  onDelete: (id: string) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onEdit, onDelete }) => {
  return (
    <ListWrapper>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ListWrapper>
  );
};

export default ExpenseList;
