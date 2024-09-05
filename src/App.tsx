import Routes from "./routes";
import "./App.css";
import ThemeProvider from "./theme/index";
import AuthProvider from "./contexts/AuthContext";
import { setupAxios } from "./utils/axiosClient";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  setupAxios();
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider>
            <ThemeProvider>
              <Routes />
            </ThemeProvider>
          </AuthProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
