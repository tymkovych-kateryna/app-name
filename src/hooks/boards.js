import { useQuery, useQueryClient, useMutation } from "react-query";
import {
  getBoards,
  updateBoard,
  deleteBoard,
  createBoard,
  getBoard,
} from "../api/boards";

export const useBoards = () => {
  return useQuery("boards", getBoards);
};

export const useBoardById = (id) => {
  return useQuery(["boards", id], () => getBoard(id), { enabled: !!id });
};

export const useUpdateBoard = () => {
  const queryClient = useQueryClient();

  return useMutation(updateBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries("boards");
    },
  });
};

export const useCreateBoard = () => {
  const queryClient = useQueryClient();

  return useMutation(createBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries("boards");
    },
  });
};

export const useDeleteBoard = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries("boards");
    },
  });
};
