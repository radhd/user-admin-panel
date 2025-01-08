import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme } from "@mui/material/styles";
import { CUSTOM_TYPOGRAPHY_VARIANTS, TYPOGRAPHY } from "../constants/constants";

export const theme = createTheme({
  palette: {},
  typography: {
    ...CUSTOM_TYPOGRAPHY_VARIANTS,
    htmlFontSize: TYPOGRAPHY.DEFAULT_HTML_FONT,
    fontFamily: TYPOGRAPHY.DEFAULT_FAMILY_FONT,
  },
});
