import axios from "axios";
import { successToast, errorToast } from "../helpers/notifications";

export const getColumns = async () => {
  try {
    const response = await axios.get("/columns");
    return response.data;
  } catch (error) {
    errorToast(`Error fetching columns: ${error}`);
    throw error;
  }
};

export const getColumn = async (id) => {
  try {
    const response = await axios.get(`/columns/${id}`);
    return response.data;
  } catch (error) {
    errorToast(`Error fetching column: ${error}`);
    throw error;
  }
};

export const createColumn = async (data) => {
  try {
    const response = await axios.post(`/columns`, data);
    successToast("Successfuly created");
    return response.data;
  } catch (error) {
    errorToast(`Error creating column: ${error}`);
    throw error;
  }
};

export const updateColumn = async ({ id, data }) => {
  try {
    const response = await axios.put(`/columns/${id}`, { ...data });
    successToast("Successfuly updated");
    return response.data;
  } catch (error) {
    errorToast(`Error updating column: ${error}`);
    throw error;
  }
};

export const deleteColumn = async (id) => {
  try {
    const response = await axios.delete(`/columns/${id}`);
    successToast("Successfuly deleted");
    return response.data;
  } catch (error) {
    errorToast(`Error deleting column: ${error}`);
    throw error;
  }
};
