import { Box } from '@mui/material';
import React from 'react';
import { Main } from './components/Main';
import { Settings } from './components/Settings';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SettingsContextProvider } from './context/settings-context';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SettingsContextProvider>
        <Box px={5}>
          <Box display="flex" justifyContent="space-between">
            <h1 data-testid="content" style={{ marginBottom: '30px' }}>
              Alcemy Challenge
            </h1>
            <Settings />
          </Box>
          <Main />
        </Box>
      </SettingsContextProvider>
    </QueryClientProvider>
  );
};
