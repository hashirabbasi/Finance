import React, { useState } from 'react';
import { Expense } from '../types/Expense';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
  border-bottom: 1px solid #ccc;
`;

const Button = styled.button`
  margin-left: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

interface ExpenseItemProps {
  expense: Expense;
  onEdit: (expense: Expense) => void;
  onDelete: (id: string) => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExpense, setEditedExpense] = useState<Expense>(expense);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleEditSubmit = () => {
    onEdit(editedExpense);
    setIsEditing(false);
  };

  return (
    <ItemWrapper>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="title"
            value={editedExpense.title}
            onChange={handleEditChange}
          />
          <input
            type="number"
            name="amount"
            value={editedExpense.amount}
            onChange={handleEditChange}
          />
          <input
            type="date"
            name="date"
            value={editedExpense.date}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="description"
            value={editedExpense.description}
            onChange={handleEditChange}
          />
          <Button onClick={handleEditSubmit}>Save</Button>
        </div>
      ) : (
        <div>
          <h3>{expense.title}</h3>
          <p>{expense.description}</p>
        </div>
      )}
      <div>
        <p>${expense.amount.toFixed(2)}</p>
        <p>{new Date(expense.date).toLocaleDateString()}</p>
        <Button onClick={() => setIsEditing((prev) => !prev)}>
          {isEditing ? 'Cancel' : 'Edit'}
        </Button>
        <Button onClick={() => onDelete(expense.id)}>Delete</Button>
      </div>
    </ItemWrapper>
  );
};

export default ExpenseItem;
