import React from "react";
import styled from "styled-components";
import ExpenseForm from "../Component/ExpenseForm";
import ExpenseList from "../Component/ExpenseList";
import ExpenseAnalysis from "../Component/Analysis";
import { useExpenses } from "../Hooks/useExpenses";

const PageWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
`;

const HomePage: React.FC = () => {
  const { expenses, addExpense, editExpense, removeExpense, loading, error } =
    useExpenses();

  const handleAddExpense = (data: any) => {
    addExpense({ ...data, id: Date.now().toString() });
  };

  const handleEditExpense = (expense: any) => {
    editExpense(expense);
  };

  const handleDeleteExpense = (id: string) => {
    removeExpense(id);
  };

  return (
    <PageWrapper>
      <h2>Home Page</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ExpenseForm onSubmit={handleAddExpense} />
      <ExpenseList
        expenses={expenses}
        onEdit={handleEditExpense}
        onDelete={handleDeleteExpense}
      />
      <ExpenseAnalysis expenses={expenses} />
    </PageWrapper>
  );
};

export default HomePage;
