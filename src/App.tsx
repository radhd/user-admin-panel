import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./helpers/theme/theme";
import Typography from "@mui/material/Typography";

export function App() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}
