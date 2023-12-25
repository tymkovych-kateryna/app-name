import axios from "axios";

export const getCards = async () => {
  try {
    const response = await axios.get("/cards");
    return response.data;
  } catch (error) {
    console.log(`Error fetching cards: ${error}`);
    throw error;
  }
};

export const getCard = async (id) => {
  try {
    const response = await axios.get(`/cards/${id}`);
    return response.data;
  } catch (error) {
    console.log(`Error fetching card: ${error}`);
    throw error;
  }
};

export const createCard = async (data) => {
  try {
    const response = await axios.post(`/cards`, data);
    console.log("Successfuly created");
    return response.data;
  } catch (error) {
    console.log(`Error creating card: ${error}`);
    throw error;
  }
};

export const updateCard = async ({ id, data }) => {
  try {
    const response = await axios.put(`/cards/${id}`, { ...data });
    console.log("Successfuly updated");
    return response.data;
  } catch (error) {
    console.log(`Error updating card: ${error}`);
    throw error;
  }
};

export const deleteCard = async (id) => {
  try {
    const response = await axios.delete(`/cards/${id}`);
    console.log("Successfuly deleted");
    return response.data;
  } catch (error) {
    console.log(`Error deleting card: ${error}`);
    throw error;
  }
};
