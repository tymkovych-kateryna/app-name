import axios from "axios";
import { successToast, errorToast } from "../helpers/notifications";

export const getBoards = async () => {
  try {
    const response = await axios.get("/boards");
    return response.data;
  } catch (error) {
    // console.log(`Error fetching boards: ${error}`);
    errorToast(`Error fetching boards: ${error}`);
    throw error;
  }
};

export const getBoard = async (id) => {
  try {
    const response = await axios.get(`/boards/${id}`);
    return response.data;
  } catch (error) {
    errorToast(`Error fetching board: ${error}`);
    throw error;
  }
};

export const getBoardColumns = async (id) => {
  try {
    const response = await axios.get(`/boards/${id}/columns`);
    return response.data;
  } catch (error) {
    errorToast(`Error fetching board columns: ${error}`);
    throw error;
  }
};

export const createBoard = async (data) => {
  try {
    const response = await axios.post(`/boards`, data);
    successToast("Successfuly created");
    return response.data;
  } catch (error) {
    errorToast(`Error creating board: ${error}`);
    throw error;
  }
};

export const updateBoard = async ({ id, data }) => {
  try {
    const response = await axios.put(`/boards/${id}`, { ...data });
    successToast("Successfuly updated");
    return response.data;
  } catch (error) {
    errorToast(`Error updating board: ${error}`);
    throw error;
  }
};

export const deleteBoard = async (id) => {
  try {
    const response = await axios.delete(`/boards/${id}`);
    successToast("Successfuly deleted");
    return response.data;
  } catch (error) {
    errorToast(`Error deleting board: ${error}`);
    throw error;
  }
};
