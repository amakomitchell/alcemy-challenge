import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { useGetCements } from '../repository/get-cement';
import { CementView } from './CementView';

export const Main = () => {
  const [cementID, setCementID] = React.useState<string>();
  const { data: cementIds } = useGetCements();

  return (
    <Box display="flex" flexDirection="column" width="100%" alignItems="center">
      <Box width="50%" mb={7}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Cement</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Cement"
            value={cementID || ''}
            onChange={(event) => setCementID(event.target.value)}
            fullWidth
          >
            {cementIds?.map((cement) => (
              <MenuItem key={cement.id} value={cement.id}>
                {cement.id}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box></Box>
      <Box>{cementID && <CementView id={cementID} />}</Box>
    </Box>
  );
};
