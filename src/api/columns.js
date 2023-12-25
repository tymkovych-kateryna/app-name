import axios from "axios";

export const getColumns = async () => {
  try {
    const response = await axios.get("/columns");
    return response.data;
  } catch (error) {
    console.log(`Error fetching columns: ${error}`);
    throw error;
  }
};

export const getColumn = async (id) => {
  try {
    const response = await axios.get(`/columns/${id}`);
    return response.data;
  } catch (error) {
    console.log(`Error fetching column: ${error}`);
    throw error;
  }
};

export const createColumn = async (data) => {
  try {
    const response = await axios.post(`/columns`, data);
    console.log("Successfuly created");
    return response.data;
  } catch (error) {
    console.log(`Error creating column: ${error}`);
    throw error;
  }
};

export const updateColumn = async ({ id, data }) => {
  try {
    const response = await axios.put(`/columns/${id}`, { ...data });
    console.log("Successfuly updated");
    return response.data;
  } catch (error) {
    console.log(`Error updating column: ${error}`);
    throw error;
  }
};

export const deleteColumn = async (id) => {
  try {
    const response = await axios.delete(`/columns/${id}`);
    console.log("Successfuly deleted");
    return response.data;
  } catch (error) {
    console.log(`Error deleting column: ${error}`);
    throw error;
  }
};
