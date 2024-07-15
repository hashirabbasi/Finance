import React, { useState } from 'react';
import styled from 'styled-components';
import { space, layout, color, typography } from 'styled-system';
import { motion } from 'framer-motion';
import { Expense } from '../types/Expense';

const FormWrapper = styled(motion.form)`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid #ccc;
  border-radius: 8px;
  ${space}
  ${layout}
  ${color}
  ${typography}
`;

const Input = styled.input`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1)};
  border: 1px solid #ccc;
  border-radius: 4px;
  ${space}
  ${layout}
  ${color}
  ${typography}
`;

const Button = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  ${space}
  ${layout}
  ${color}
  ${typography}
`;

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newExpense: Expense = {
      id: Date.now().toString(),
      title,
      amount: parseFloat(amount),
      date,
      description,
    };

    onAddExpense(newExpense);
    setTitle('');
    setAmount('');
    setDate('');
    setDescription('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit" whileHover={{ scale: 1.1 }}>
        Add Expense
      </Button>
    </FormWrapper>
  );
};

export default ExpenseForm;
