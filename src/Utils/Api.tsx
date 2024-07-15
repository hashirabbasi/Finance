import axios from 'axios';
import { Expense } from '../types/Expense';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

export const fetchExpenses = async () => {
  const response = await api.get('/expenses');
  return response.data;
};

export const createExpense = async (expense: Expense) => {
  const response = await api.post('/expenses', expense);
  return response.data;
};

