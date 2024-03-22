import Routes from "./routes";
import "./App.css";
import ThemeProvider from "./theme/index";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
