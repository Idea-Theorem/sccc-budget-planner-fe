import Routes from "./routes";
import "./App.css";
import ThemeProvider from "./theme/index";
import AuthProvider from "./contexts/AuthContext";
import { setupAxios } from "./utils/axiosClient";

function App() {
  setupAxios()
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
