import "./BoardContent.scss";
import Column from "../Column/Column";
import { initData } from "../../Actions/initData";
import { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { mapOrder } from "../../Utilities/Sorts";
import { Container, Draggable } from "react-smooth-dnd";
import { v4 as uuidv4 } from "uuid";
import { applyDrag } from "../../Utilities/DragDrop";
import Navbar from "../Navbar/Navbar";
const BoardContent = () => {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  const [isShowAddList, setIsShowAddList] = useState(true);
  const inputRef = useRef(null);
  const [valueInput, setValueInput] = useState("");
  // * робить щоб можливо було скролити сторінку на малих екранах
  const cleanClasses = () => {
    document.body.className = "";
  };

  document.addEventListener("touchend", cleanClasses, false);

  useEffect(() => {
    if (isShowAddList === false && inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isShowAddList]);
  useEffect(() => {
    const boardInitData = initData.boards.find((item) => item.id === "board-1");
    if (boardInitData) {
      setBoard(boardInitData);

      // ! сортування карточок

      setColumns(
        mapOrder(boardInitData.columns, boardInitData.columnOrder, "id")
      );
    }
  }, []);

  const onColumnDrop = (dropResult) => {
    let newColumns = [...columns];
    newColumns = applyDrag(newColumns, dropResult);

    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map((column) => column.id);
    newBoard.columns = newColumns;

    setColumns(newColumns);
    setBoard(newBoard);
  };
  const onCardDrop = (dropResult, columnId) => {
    console.log(">>> inside onCardDrop", dropResult);

    let newColumns = [...columns];
    let currentColumn = newColumns.find((column) => column.id === columnId);

    currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
    currentColumn.cardOrder = currentColumn.cards.map((card) => card.id);

    setColumns(newColumns);
  };

  if (_.isEmpty(board)) {
    return <>{/* <div className="not-found">Board not found</div> */}</>;
  }

  const handleAddList = () => {
    if (!valueInput) {
      if (inputRef && inputRef.current) inputRef.current.focus();
      return;
    }
    const _columns = _.cloneDeep(columns);
    _columns.push({
      id: uuidv4(),
      boardId: board.id,
      title: valueInput,
      cards: [],
    });

    setColumns(_columns);
    setValueInput("");
    inputRef.current.focus();

    // console.log('check ', valueInput)
  };

  const onUpdateColumn = (newColumn) => {
    const columnIdUpdate = newColumn.id;
    let ncols = [...columns];
    let index = ncols.findIndex((item) => item.id === columnIdUpdate);
    if (newColumn._destroy) {
      ncols.splice(index, 1);
    } else {
      ncols[index] = newColumn;
    }
    setColumns(ncols);
  };

  // console.log(columns);

  return (
    <>
      {/* <Navbar/> */}
      <div className="board-columns">
        <Container
          //  onClick={cleanClasses}
          orientation="horizontal"
          onDrop={onColumnDrop}
          getChildPayload={(index) => columns[index]}
          dragHandleSelector=".column-drag-handle"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "column-drop-preview",
          }}
        >
          {columns &&
            columns.length > 0 &&
            columns.map((column, index) => {
              return (
                <Draggable key={column.id}>
                  <Column
                    // key={column.id}

                    column={column}
                    onCardDrop={onCardDrop}
                    onUpdateColumn={onUpdateColumn}
                  />
                </Draggable>
              );
            })}
          {/* <Column/> */}
          {/* </Container> */}
          {isShowAddList ? (
            <div
              className="add-new-column"
              onClick={() => setIsShowAddList(false)}
            >
              <i className="fa fa-plus icon"></i>Add another column
            </div>
          ) : (
            <div className="content-add-column">
              <input
                type="text"
                className="form-control"
                ref={inputRef}
                value={valueInput}
                onChange={(event) => setValueInput(event.target.value)}
              />
              <div className="group-btn">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => handleAddList(false)}
                >
                  Add list
                </button>
                <i
                  className="fa fa-times icon"
                  onClick={() => setIsShowAddList(true)}
                ></i>
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};
export default BoardContent;
