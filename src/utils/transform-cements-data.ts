import { Cement } from '../types/cements';
import { GraphData } from '../types/graph-data';

export const transformCementsData = (cements: Cement[]) => {
  const graphData: GraphData = {
    '2d': [],
    '7d': [],
    '28d': [],
  };

  for (const cement of cements) {
    graphData['2d'].push([cement['comp. str. 2d'], cement['comp. str. 2d']]);
    graphData['7d'].push([cement['comp. str. 7d'], cement['comp. str. 2d']]);
    graphData['28d'].push([cement['comp. str. 28d'], cement['comp. str. 2d']]);
  }

  return graphData;
};
