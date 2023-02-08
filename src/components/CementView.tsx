import React, { useEffect, FC, useCallback } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useGetCementsById } from '../repository/get-cement';
import { Cement } from '../types/cements';
import { CEMENT_TABLE_HEADER } from '../types/cement-table-header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CementChart } from './CementChart';

type CementTableProps = {
  id: string;
};

export const CementView: FC<CementTableProps> = ({ id }) => {
  const { data: cements, isLoading } = useGetCementsById(id);

  const tableCements = cements?.slice(0, 4);
  const renderChart = cements && cements.length >= 4;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box width={800}>{renderChart && <CementChart data={cements} />}</Box>
      {isLoading && <Typography>Loading...</Typography>}
      {tableCements && (
        <Box width={800}>
          <h4>Cement Data Table</h4>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {CEMENT_TABLE_HEADER.map((header, index) => (
                    <TableCell key={index} align="right">
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableCements?.map((cement, index) => (
                  <TableRow key={index}>
                    <TableCell align="right">{cement["d'"]}</TableCell>
                    <TableCell align="right">{cement.SO3}</TableCell>
                    <TableCell align="right">{cement['Cl-']}</TableCell>
                    <TableCell align="right">
                      {cement['comp. str. 28d']}
                    </TableCell>
                    <TableCell align="right">{cement.CO2}</TableCell>
                    <TableCell align="right">{cement.TiO2}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
};
