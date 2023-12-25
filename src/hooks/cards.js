import { useQuery, useQueryClient, useMutation } from "react-query";
import {
  getCards,
  updateCard,
  deleteCard,
  createCard,
  getCard,
} from "../api/cards";

export const useCards = () => {
  return useQuery("cards", getCards);
};

export const useCardById = (id) => {
  return useQuery(["cards", id], () => getCard(id), { enabled: !!id });
};

export const useUpdateCard = () => {
  const queryClient = useQueryClient();

  return useMutation(updateCard, {
    onSuccess: () => {
      queryClient.invalidateQueries("cards");
    },
  });
};

export const useCreateCard = () => {
  const queryClient = useQueryClient();

  return useMutation(createCard, {
    onSuccess: () => {
      queryClient.invalidateQueries("cards");
    },
  });
};

export const useDeleteCard = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteCard, {
    onSuccess: () => {
      queryClient.invalidateQueries("cards");
    },
  });
};
