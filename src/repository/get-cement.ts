import { useQuery } from 'react-query';
import { Cement, CementList } from '../types/cements';
import { BASE_URL } from './contstants';

const getCements = async (): Promise<CementList> =>
  fetch(`${BASE_URL}/cements`).then((res) => res.json());

const getCementsById = async (id: string): Promise<Cement[]> => {
  return fetch(`${BASE_URL}/cements/${id}`).then((res) => res.json());
};

export const useGetCements = () => {
  return useQuery(['CEMENTS'], getCements);
};

export const useGetCementsById = (id: string) => {
  return useQuery(['CEMENTS_BY_ID', id], () => getCementsById(id));
};
