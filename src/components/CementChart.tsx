import React, { FC, useContext } from 'react';
import { Box } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { Cement } from '../types/cements';
import { transformCementsData } from '../utils/transform-cements-data';
import SettingsContext from '../context/settings-context';

type Props = {
  data: Cement[];
};

export const CementChart: FC<Props> = ({ data }) => {
  const { value: colorSettings } = useContext(SettingsContext);

  const graphData = transformCementsData(data);

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'scatter',
      zoom: {
        enabled: true,
        type: 'xy',
      },
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter: function (val) {
          return parseFloat(val).toFixed(1);
        },
      },
    },
    yaxis: {
      tickAmount: 7,
    },
    colors: [colorSettings['2d'], colorSettings['7d'], colorSettings['28d']],
  };
  const series = [
    {
      name: '2 Days',
      data: graphData['2d'],
    },
    {
      name: '7 Days',
      data: graphData['7d'],
    },
    {
      name: '28 Days',
      data: graphData['28d'],
    },
  ];
  return (
    <Box>
      <h4>Compressive Strength </h4>
      <ReactApexChart
        options={options}
        series={series}
        type="scatter"
        height={350}
      />
    </Box>
  );
};
