import { Button, Icon, ToggleButton } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/context';

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <><Button variant="contained" onClick={toggleDrawerOpen}>
              Open
          </Button>
          <ToggleButton onClick={toggleDrawerOpen} value="list" aria-label="list">
            <Icon>list</Icon>
          </ToggleButton>
          </>
        }
      />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
