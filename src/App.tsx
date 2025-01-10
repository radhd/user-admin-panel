import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./helpers/theme/theme";
import { Router } from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./services/setupStore";

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}
