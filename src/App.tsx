import Routes from "./routes";
import "./App.css";
import ThemeProvider from "./theme/index";

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
