import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./helpers/theme/theme";

export function App() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}
