import { useQuery, useQueryClient, useMutation } from "react-query";
import {
  getColumns,
  updateColumn,
  deleteColumn,
  createColumn,
  getColumn,
} from "../api/columns";

export const useColumns = () => {
  return useQuery("columns", getColumns);
};

export const useColumnById = (id) => {
  return useQuery(["columns", id], () => getColumn(id), { enabled: !!id });
};

export const useUpdateColumn = () => {
  const queryClient = useQueryClient();

  return useMutation(updateColumn, {
    onSuccess: () => {
      queryClient.invalidateQueries("columns");
    },
  });
};

export const useCreateColumn = () => {
  const queryClient = useQueryClient();

  return useMutation(createColumn, {
    onSuccess: () => {
      queryClient.invalidateQueries("columns");
    },
  });
};

export const useDeleteColumn = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteColumn, {
    onSuccess: () => {
      queryClient.invalidateQueries("columns");
    },
  });
};
