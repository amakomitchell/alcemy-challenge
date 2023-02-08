import React from 'react';
import { render } from '@testing-library/react';
import { CementView } from '../components/CementView';
import { mockCement } from '../mockData';
import { TestWrapper } from './testConfig';

jest.mock('../repository/get-cement', () => {
  return {
    useGetCementsById: () => {
      return {
        data: mockCement,
        isLoading: false,
        isError: false,
      };
    },
  };
});

describe('CementView', () => {
  it('should render cement table labels', async () => {
    const { findByText } = render(
      <TestWrapper>
        <CementView id="1" />
      </TestWrapper>
    );

    const tableLabelD = await findByText("d'");
    const tableLabelSO3 = await findByText('SO3');
    const tableLabelCl = await findByText('Cl-');
    const tableLabelCompStr28d = await findByText('Comp. str. 28d');
    const tableLabelCO2 = await findByText('CO2');
    const tableLabelTiO2 = await findByText('TiO2');

    expect(tableLabelD).toBeInTheDocument();
    expect(tableLabelSO3).toBeInTheDocument();
    expect(tableLabelCl).toBeInTheDocument();
    expect(tableLabelCompStr28d).toBeInTheDocument();
    expect(tableLabelCO2).toBeInTheDocument();
    expect(tableLabelTiO2).toBeInTheDocument();
  });

  it('should render cement table data', async () => {
    const { findByText } = render(
      <TestWrapper>
        <CementView id="1" />
      </TestWrapper>
    );

    const cement = mockCement[0];

    const tableDataD = await findByText(cement["d'"]);
    const tableDataSO3 = await findByText(cement.SO3);
    const tableDataCl = await findByText(cement['Cl-']);
    const tableDataCO2 = await findByText(cement.CO2);
    const tableDataTiO2 = await findByText(cement.TiO2);

    expect(tableDataD).toBeInTheDocument();
    expect(tableDataSO3).toBeInTheDocument();
    expect(tableDataCl).toBeInTheDocument();
    expect(tableDataCO2).toBeInTheDocument();
    expect(tableDataTiO2).toBeInTheDocument();
  });
});
