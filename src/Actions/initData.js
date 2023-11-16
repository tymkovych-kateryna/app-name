export const initData={
        boards:[
            {
                    id: 'board-1',
                    columnOrder: ['column-1','column-2','column-3'],
                    columns: [
                        {
                            id: 'column-1',
                            boardId: 'board-1',
                            title: 'Todo 1',
                            taskOrder: ['card-1','card-2','card-3'],
                            cards:[
                                {
                                    id: 'card-1',
                                    boardId: 'board-1',
                                    columnId: 'column-1',
                                    title: 'title of task 1',
                                    image: null
                                }
                            ]
                        }
                    ]

            }


        ]

}