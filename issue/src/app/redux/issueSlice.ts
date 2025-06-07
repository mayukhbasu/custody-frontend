// issueSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

// Define the Issue type
export interface Issue {
  id: number;
  title: string;
  description: string;
  status: string;
  assignedTo: string;
  createdBy: string;
  assetName?: string | null;
  custodian?: string | null;
  raisedAt?: string;
}

// Define the state type
interface IssueState {
  items: Issue[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state
const initialState: IssueState = {
  items: [],
  status: 'idle',
  error: null,
};

// Async thunk for creating an issue
export const createIssue = createAsyncThunk<Issue, Partial<Issue>>(
  'issue/createIssue',
  async (issueData, thunkAPI) => {
    const response = await axios.post('/api/issues', issueData, {
      headers: {
        Authorization: `Bearer `,
      },
    });
    return response.data;
  }
);

// Create the slice
const issueSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createIssue.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createIssue.fulfilled, (state, action: PayloadAction<Issue>) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(createIssue.rejected, (state, action) => {
        state.status = 'failed';
        state.error = (action.payload as string) ?? 'Unknown error';
      });
  },
});

// Selector (optional)
export const selectIssues = (state: RootState) => state.issues;

// Export reducer
export default issueSlice.reducer;
