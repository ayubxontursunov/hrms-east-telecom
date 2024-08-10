import axios from 'axios';

const API_URL = 'https://e575-80-80-208-186.ngrok-free.app';

// Example of a GET request
export const getData = async () => {
  try {
    const response = await axios.get(`${API_URL}/endpoint`); // Replace /endpoint with the actual endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

// Example of a POST request
export const postData = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/endpoint`, data); // Replace /endpoint with the actual endpoint
    return response.data;
  } catch (error) {
    console.error('Error posting data', error);
    throw error;
  }
};
