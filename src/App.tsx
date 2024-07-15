import React, { useState } from 'react';
import Header from './Component/Header';
import ExpenseForm from './Component/ExpenseForm';
import ExpenseList from './Component/ExpenseList';
import { Expense } from './types/Expense';
import styled from 'styled-components';
import { space, layout, color, typography } from 'styled-system';

const AppWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
  ${space}
  ${layout}
  ${color}
  ${typography}
`;

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (newExpense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const handleEditExpense = (updatedExpense: Expense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) => (expense.id === updatedExpense.id ? updatedExpense : expense))
    );
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <AppWrapper>
      <Header />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} onEdit={handleEditExpense} onDelete={handleDeleteExpense} />
    </AppWrapper>
  );
};

export default App;
