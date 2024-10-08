import { privateAxios } from '../../utils/api/axios'; 

const API_URL = import.meta.env.VITE_API_URL;

export const fetchRiffle = async () => {
  const response = await privateAxios.get(`${API_URL}/Riffles/getAllRiffles`); 
  const { status, code, data } = response.data;

  if (!status || code !== 200) {
    throw new Error('Error fetching riffle');
  }

  return data;
};

export const createRiffle = async (riffleData) => {
  const response = await privateAxios.post(`${API_URL}/Riffles/createRiffle`, riffleData);
  const { status, code, data } = response.data;

  if (!status || code !== 201) {
    throw new Error('Error creating riffle');
  }

  return data;
};

export const getRiffleById = async (id) => {
  const response = await privateAxios.get(`${API_URL}/Riffles/getRiffle/${id}`);
  const { status, code, data } = response.data;

  if (!status || code !== 200) {
    throw new Error(`Error fetching riffle with ID ${id}`);
  }

  return data;
};

export const deleteRiffle = async (id) => {
  const response = await privateAxios.delete(`${API_URL}/Riffles/deleteRiffle/${id}`);
  const { status, code } = response.data;

  if (!status || code !== 200) {
    throw new Error(`Error deleting riffle with ID ${id}`);
  }

  return true; 
};

export const editRiffle = async (id, riffleData) => {
  const response = await privateAxios.put(`${API_URL}/Riffles/updateRiffle/${id}`, riffleData);
  const { status, code, data } = response.data;

  if (!status || code !== 200) {
    throw new Error('Error updating riffle');
  }

  return data;
};
