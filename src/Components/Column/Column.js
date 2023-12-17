import "./Column.scss";
import Card from "../Task/Card";
import frog from "../../images/frog.png";
import { mapOrder } from "../../Utilities/Sorts";
import { Container, Draggable } from "react-smooth-dnd";
import Dropdown from 'react-bootstrap/Dropdown';
import ConfirmModal from "../../Utilities/ConfirmModal";
import Form from "react-bootstrap/Form";
import {v4 as uuidv4} from 'uuid';
import Calendar from 'react-calendar';
import { useEffect, useRef, useState } from "react";
import { MODAL_ACTION_CLOSE,MODAL_ACTION_CONFIRM } from "../../Utilities/Constant";

const Column = (props) => {
  const { column, onCardDrop,onUpdateColumn } = props;
  const cards = mapOrder(column.cards, column.cardOrder, "id");
  
  const [isShowModalDelete, setShowModalDelete] = useState(false);
  const [titleColumn, setTitleColumn] = useState("");
  const [isFirstClick, setFirstClick] = useState(true);
  const inputRef = useRef(null);
  const [isshowCalendar, setcalendar] = useState("");
  const [isShowAddNewTask, setIsShowAddNewTask] = useState(false);
  const [valueTextArea, setvalueTextArea] = useState("");
  const textAreaRef = useRef(null);

  useEffect(()=>{
    if(isShowAddNewTask === true && textAreaRef && textAreaRef.current){
      textAreaRef.current.focus();
    }

  },[isShowAddNewTask])

  useEffect(()=>{
    if(column && column.title){
      setTitleColumn(column.title);
    }
  },[column])

  const toggleModal = () =>{
    setShowModalDelete(!isShowModalDelete);
  }

  const onModalAction = (type) => {
    if(type === MODAL_ACTION_CLOSE){

    }
    if(type === MODAL_ACTION_CONFIRM){
        const newColumn = {
          ...column,
          _destroy: true
        }
        onUpdateColumn(newColumn);
    }
    toggleModal();

  }
 
const selectAllText = (event) => {
  setFirstClick(false);
  if(setFirstClick){
    event.target.select();

  } else {
    inputRef.current.setSelectionRange(titleColumn.length,titleColumn.length);
  }
  // event.target.focus();
  
}
const handleClickOutside = () => {
  setFirstClick(true);
  const newColumn = {
    ...column,
    title: titleColumn,
    _destroy: false
  }
  onUpdateColumn(newColumn);
}
const handleAddNewTask = () => {
  if(!valueTextArea){
    textAreaRef.current.focus();
    return;
  }
  const newTask = {
    id: uuidv4(),
    boardId: column.boardId,
    columnId: column.id,
    title: valueTextArea,
    image: null,
  }
  let newColumn = {...column};
  newColumn.cards = [...newColumn.cards, newTask];
  newColumn.cardOrder = newColumn.cards.map(card => card.id);

  onUpdateColumn(newColumn);
  setvalueTextArea("");
  setIsShowAddNewTask(false);
}
  return (
    <>
      <div className="columns">
        <header className="column-drag-handle">
          <div className="column-title">

          {/* {column.title} */}
          <Form.Control 
          size={"sm"}
          type="text"
          value={titleColumn}
          className="customize-input-column"
          onClick={selectAllText}
          onChange={(event)=> setTitleColumn(event.target.value)}
          spellCheck="false"
          onBlur={handleClickOutside}
          onMouseDown={(e) => e.preventDefault()}
          ref={inputRef}
          />
          </div>
          <div className="column-dropdown">

          <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" size="sm">
        {/* Dropdown Button */}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/* <Dropdown.Item href="#">Add task</Dropdown.Item> */}
        <Dropdown.Item onClick={toggleModal}>Calendar</Dropdown.Item>
        <Dropdown.Item onClick={toggleModal}>Remove this column</Dropdown.Item>

        {/* <Dropdown.Item href="#"></Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
          </div>
          </header>
        <div className="card-list">

        <Container


                    groupName="col"
                    onDrop={(dropResult) => onCardDrop(dropResult, column.id)}
                    getChildPayload={index => cards[index]}
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    dropPlaceholder={{                      
                      animationDuration: 150,
                      showOnTop: true,
                      className: 'card-drop-preview' 
                    }}
                    dropPlaceholderAnimationDuration={200}
                  >



          {/* <Card /> */}
          {cards && cards.length > 0 && cards.map((card, index) => {
            return(
              <Draggable key={card.id}>

               <Card card={card}/>
               
              </Draggable>
            )

          })}
          {/* <li>
              <img src={frog} alt="smth"></img>
              First task
            </li> */}
         </Container>
        {/* </div> */}

          {isShowAddNewTask === true &&
        <div className="add-new-task">
        
            <textarea
            rows="2"
            className="form-control" 
            placeholder="Enter task"
            ref={textAreaRef}
            value={valueTextArea}
            onChange={(event) => setvalueTextArea(event.target.value)}
            >  
            </textarea>
            <div className="group-btn">

            <button type="button" 
            className="btn btn-primary" 
            onClick={()=> handleAddNewTask()}
            >Add task</button>
            <i className="fa fa-times icon" onClick={()=> setIsShowAddNewTask(false)}></i>
            </div>
            </div>
}
        </div>
        {isShowAddNewTask === false &&
        <footer>
          <div className="footer-action"  onClick={()=> setIsShowAddNewTask(true)}>

         <i 
         className="fa fa-plus icon" 
        ></i> Add task
          </div>
          </footer>
}
      </div>
      <ConfirmModal
      show={isShowModalDelete}
      title={"Remove a column"}
      content={`Are you sure yo remove tjis column: ${column.title}`}
      onAction={onModalAction}
      />
    </>
  );
};
export default Column;
