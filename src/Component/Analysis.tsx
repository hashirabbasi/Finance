import React from 'react';
import { Expense } from '../types/Expense';
import styled from 'styled-components';

const AnalysisWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

interface ExpenseAnalysisProps {
  expenses: Expense[];
}

const ExpenseAnalysis: React.FC<ExpenseAnalysisProps> = ({ expenses }) => {
  const totalSpent = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const averageSpent = (totalSpent / expenses.length).toFixed(2);

  return (
    <AnalysisWrapper>
      <h2>Expense Analysis</h2>
      <p>Total Spent: ${totalSpent.toFixed(2)}</p>
      <p>Average Spent: ${averageSpent}</p>
    </AnalysisWrapper>
  );
};

export default ExpenseAnalysis;
