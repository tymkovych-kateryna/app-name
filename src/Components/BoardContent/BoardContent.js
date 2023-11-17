import "./BoardContent.scss";
import Column from "../Column/Column";
import { initData } from "../../Actions/initData";
import { useState, useEffect } from "react";
import _ from 'lodash';
import { mapOrder } from "../../Utilities/Sorts";
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
                <Column 
                key={column.id}
                column={column}
                />
              )


          })}
        {/* <Column/> */}
       
      </div>
    </>
)

}
export default BoardContent;