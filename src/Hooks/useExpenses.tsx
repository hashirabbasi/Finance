import { useState, useEffect } from "react";
import { Expense } from "../types/Expense";
import {
  fetchExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
} from "../Utils/Api";

export const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const data = await fetchExpenses();
        setExpenses(data);
      } catch (error) {
        setError("Failed to fetch expenses.");
      } finally {
        setLoading(false);
      }
    };

    loadExpenses();
  }, []);

  const addExpense = async (expense: Expense) => {
    try {
      const newExpense = await createExpense(expense);
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    } catch (error) {
      setError("Failed to add expense.");
    }
  };

  const editExpense = async (expense: Expense) => {
    try {
      const updatedExpense = await updateExpense(expense);
      setExpenses((prevExpenses) =>
        prevExpenses.map((e) => (e.id === expense.id ? updatedExpense : e))
      );
    } catch (error) {
      setError("Failed to update expense.");
    }
  };

  const removeExpense = async (id: string) => {
    try {
      await deleteExpense(id);
      setExpenses((prevExpenses) => prevExpenses.filter((e) => e.id !== id));
    } catch (error) {
      setError("Failed to delete expense.");
    }
  };

  return { expenses, loading, error, addExpense, editExpense, removeExpense };
};
