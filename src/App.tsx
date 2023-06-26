import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppDrawerProvider, AppThemeProvider } from './shared/context/';
import { MenuLateral } from './shared/components/menu-lateral/MenuLateral';

export const App = () => {
  return (
    <AppThemeProvider>
      <AppDrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </AppDrawerProvider>
    </AppThemeProvider>
  );
};
