import frog from "../images/frog.png";
export const initData = {
  boards: [
    {
      id: "board-1",
      columnOrder: ["column-1", "column-2","column-3"],
      columns: [
        {
          id: "column-1",
          boardId: "board-1",
          title: "Todo 1",
          cardOrder: ["card-1", "card-2", "card-3"],
          // ? самі карточки
          cards: [
            {
              id: "card-1",
              boardId: "board-1",
              columnId: "column-1",
              title: "title of task 1",
              image:  frog ,
            },
            {
              id: "card-2",
              boardId: "board-2",
              columnId: "column-2",
              title: "title of task 2",
              image: frog,
            },
            {
              id: "card-3",
              boardId: "board-3",
              columnId: "column-3",
              title: "title of task 3",
              image: null,
            },
          ],
        },
        {
            id: 'column-2',
            boardId: 'board-2',
            title: 'Todo 2',
            cardOrder: ['card-4','card-5','card-6'],
            cards:[
                {
                    id: 'card-4',
                    boardId: 'board-4',
                    columnId: 'column-4',
                    title: 'title of task 4',
                    image: null
                },
                {
                    id: 'card-5',
                    boardId: 'board-5',
                    columnId: 'column-5',
                    title: 'title of task 5',
                    image: frog
                },
                {
                    id: 'card-6',
                    boardId: 'board-6',
                    columnId: 'column-6',
                    title: 'title of task 6',
                    image: null
                }
            ]
        },
        {
          id: 'column-3',
          boardId: 'board-3',
          title: 'Todo 3',
          cardOrder: ['card-7','card-8','card-9'],
          cards:[
              {
                  id: 'card-7',
                  boardId: 'board-7',
                  columnId: 'column-7',
                  title: 'title of task 7',
                  image: null
              },
              {
                  id: 'card-8',
                  boardId: 'board-8',
                  columnId: 'column-8',
                  title: 'title of task 8',
                  image: null
              },
              {
                  id: 'card-9',
                  boardId: 'board-9',
                  columnId: 'column-9',
                  title: 'title of task 9',
                  image: frog
              }
          ]
      },
      ],
    },
  ],
};
