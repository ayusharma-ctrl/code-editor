import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/themeSlice';

// Array of theme options
const themes = [
    { id: 1, name: 'Dracula', theme: 'dracula' },
    { id: 2, name: 'Okaidia', theme: 'okaidia' },
    { id: 3, name: 'Github', theme: 'github' },
    { id: 4, name: 'One Light', theme: 'oneLight' },
    { id: 5, name: 'VS Dark', theme: 'vsDark' },
];

const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const selectedTheme = useSelector((state) => state.theme.theme); // Access the current selected theme from the Redux store

    // Function to handle button click and dispatch the setTheme action
    const handleButtonClick = (theme) => {
        dispatch(setTheme(theme));
    };

    return (
        <div style={{margin: "20px 5px"}}>
            <h4>Select Theme</h4>
            <div className='theme-switcher'>
                {/* Map over the themes array and create a button for each theme */}
                {themes.map((theme) => (
                    <button
                        key={theme.id}
                        onClick={() => handleButtonClick(theme.theme)}
                        disabled={selectedTheme === theme.theme}
                    >
                        {theme.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ThemeSwitcher;