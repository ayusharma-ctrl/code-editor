import { createSlice } from '@reduxjs/toolkit';

// Initial state of the theme slice
const initialState = {
    theme: 'dracula', // default theme
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        // Reducer to set a new theme
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;