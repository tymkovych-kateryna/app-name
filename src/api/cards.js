import axios from "axios";
import { successToast, errorToast } from "../helpers/notifications";

export const getCards = async () => {
  try {
    const response = await axios.get("/cards");
    return response.data;
  } catch (error) {
    errorToast(`Error fetching cards: ${error}`);
    throw error;
  }
};

export const getCard = async (id) => {
  try {
    const response = await axios.get(`/cards/${id}`);
    return response.data;
  } catch (error) {
    errorToast(`Error fetching card: ${error}`);
    throw error;
  }
};

export const createCard = async (data) => {
  try {
    const response = await axios.post(`/cards`, data);
    successToast("Successfuly created");
    return response.data;
  } catch (error) {
    errorToast(`Error creating card: ${error}`);
    throw error;
  }
};

export const updateCard = async ({ id, data }) => {
  try {
    const response = await axios.put(`/cards/${id}`, { ...data });
    successToast("Successfuly updated");
    return response.data;
  } catch (error) {
    errorToast(`Error updating card: ${error}`);
    throw error;
  }
};

export const deleteCard = async (id) => {
  try {
    const response = await axios.delete(`/cards/${id}`);
    successToast("Successfuly deleted");
    return response.data;
  } catch (error) {
    errorToast(`Error deleting card: ${error}`);
    throw error;
  }
};
