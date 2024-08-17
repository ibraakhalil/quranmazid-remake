import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define your data type
interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  posts: Post[]; // To store fetched posts
  selectedPostId: number | null; // To track selected post
  status: 'idle' | 'loading' | 'succeeded' | 'failed'; // To track fetching status
  error: string | null; // To store any error messages
}

const initialState: PostsState = {
  posts: [],
  selectedPostId: null,
  status: 'idle',
  error: null,
};

// Define an async thunk for fetching posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data as Post[];
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSelectedPostId(state, action: PayloadAction<number | null>) {
      state.selectedPostId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch posts';
      });
  },
});

export const { setSelectedPostId } = postsSlice.actions;

export default postsSlice.reducer;
