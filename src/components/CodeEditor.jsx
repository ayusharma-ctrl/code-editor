import React, { useEffect, useState } from "react"
import { Highlight, themes } from "prism-react-renderer"
import { useSelector } from "react-redux";

// Initial code block to be displayed in the editor
const codeBlock = `const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
    return (
    <div>
        <h2>{item.name}</h2>
        <p>Price: {item.price}</p>
        <p>Quantity: {item.quantity}</p>
    </div>
    );
}`

// Shared styles for the editor and highlighted code
const sharedStyles = {
    fontFamily: 'Consolas, Monaco, Lucida Console, Liberation Mono, Menlo, Courier, monospace, Inter',
    fontSize: '12px',
    lineHeight: '20px',
};

// Mapping theme names to prism-react-renderer themes
const themeMap = {
    dracula: themes.dracula,
    okaidia: themes.okaidia,
    github: themes.github,
    oneLight: themes.oneLight,
    vsDark: themes.vsDark,
};

const CodeEditor = () => {
    const [code, setCode] = useState(codeBlock); // Local state for the code being edited
    const selectedTheme = useSelector((state) => state.theme.theme); // Get the selected theme from the Redux store
    const [currentTheme, setCurrentTheme] = useState(themeMap[selectedTheme]); // Local state for the current theme to be applied to the code highlighting

    // Update the current theme whenever the selected theme in the store changes
    useEffect(() => {
        setCurrentTheme(themeMap[selectedTheme]);
    }, [selectedTheme]);

    return (
        <div>
            <div style={{ position: 'relative', width: '100%', minHeight: '100%', minWidth: '30vw' }}>
                {/* Textarea for the code input */}
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Type your code..."
                    style={{
                        ...sharedStyles,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        outline: 'none',
                        resize: 'none',
                        overflow: 'hidden',
                        background: 'transparent',
                        color: 'transparent',
                        caretColor: 'gray',
                        zIndex: 2,
                        padding: '10px',
                    }}
                />
                {/* Highlight component to render the syntax-highlighted code */}
                <Highlight
                    theme={currentTheme}
                    code={code}
                    language="tsx"
                >
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre
                            style={{
                                ...style,
                                ...sharedStyles,
                                margin: 0,
                                padding: '10px',
                                pointerEvents: 'none',
                                zIndex: 1,
                            }}
                        >
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })}>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </div>
        </div>
    );
};

export default CodeEditor;