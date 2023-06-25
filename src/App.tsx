import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { LightThme } from './shared/themes/light';


export const App = () => {
  return (
    <ThemeProvider theme={LightThme}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>
  );
};
