import CodeEditor from "./components/CodeEditor";
import ThemeSwitcher from "./components/ThemeSwitcher";


function App() {
  return (
    <div className="main">
      <h1>
        react-simple-code-editor
      </h1>
      <p>
        A simple no-frills code editor with syntax highlighting.
      </p>
      <ThemeSwitcher/>
      <CodeEditor/>
    </div>
  )
}

export default App;
