import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./helpers/theme/theme";
import { Router } from "./router/Router";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}
