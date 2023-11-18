import "./BoardContent.scss";
import Column from "../Column/Column";
import { initData } from "../../Actions/initData";
import { useState, useEffect } from "react";
import _ from 'lodash';
import { mapOrder } from "../../Utilities/Sorts";
import { Container, Draggable } from "react-smooth-dnd";


const BoardContent = () => {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);


useEffect(() =>{
  const boardInitData = initData.boards.find(item => item.id === 'board-1');
  if(boardInitData){
    setBoard(boardInitData);

    //!сортування карточок
   
    setColumns(mapOrder(boardInitData.columns, boardInitData.columnOrder, 'id'))
  }
}, []);


const onColumnDrop = (dropResult) => {
  console.log('>>> inside onColumnDrop', dropResult)


}


  if(_.isEmpty(board)){
    return(
      <>
        <div className="not-found">Board not found</div>
      </>
    )
  }

    return(
    <>
    <div className='board-columns'>


    <Container
          orientation="horizontal"
          onDrop={onColumnDrop}
          getChildPayload={index => columns[index]}
          dragHandleSelector=".column-drag-handle"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'column-drop-preview'
          }}
        >
        {/* <div className='columns'>
          <header>Header</header>
          <ul>
            <li>
              <img src={frog} alt="smth"></img>
              First task
            </li>
            <li>Second task</li>
            <li>Third task</li>
          </ul>
          <footer>Add task</footer>
        </div> */}
          {columns && columns.length > 0 && columns.map((column, index)=>{

              return(
                <Draggable key={column.id}>

                <Column 
                // key={column.id}
                column={column}
                />
                </Draggable>
              )


          })}
        {/* <Column/> */}
       
          </Container>

      </div>
    </>
)

}
export default BoardContent;