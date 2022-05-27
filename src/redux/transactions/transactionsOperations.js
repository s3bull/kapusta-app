import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAllUserInfo,
  fetchDeleteTransaction,
  fetchExpenseStats,
  fetchExpenseTransaction,
  fetchIncomeStats,
  fetchIncomeTransaction,
  fetchSetBalance,
} from '../../utils/backendApi';

export const setBalance = createAsyncThunk(
  'transactions/setBalance',
  async (newBalance, { rejectWithValue }) => {
    try {
      const { data } = await fetchSetBalance(newBalance);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const incomeTransaction = createAsyncThunk(
  'transactions/incomeTransaction',
  async (transactionObject, { rejectWithValue }) => {
    try {
      const { data } = await fetchIncomeTransaction(transactionObject);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const expenseTransaction = createAsyncThunk(
  'transactions/expenseTransaction',
  async (transactionObject, { rejectWithValue }) => {
    try {
      const { data } = await fetchExpenseTransaction(transactionObject);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await fetchDeleteTransaction(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const allUserInfo = createAsyncThunk(
  'transactions/allUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchAllUserInfo();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getIncomeStats = createAsyncThunk(
  'transactions/getIncomeStats',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchIncomeStats();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getExpenseStats = createAsyncThunk(
  'transactions/getExpenseStats',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchExpenseStats();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
