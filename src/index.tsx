import { ThemeProvider, CssBaseline } from "@mui/material";
import { App } from "app";
import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Suspense fallback={<div />}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  </React.StrictMode>,
);
