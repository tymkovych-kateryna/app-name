import { useEffect, useRef, useState } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Calendar from "react-calendar";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

import { Chart } from "react-google-charts";

import Card from "../Task";

import calendar from "../../images/calendar.png";

import { mapOrder } from "../../Utilities/Sorts";
import ConfirmModal from "../../Utilities/ConfirmModal";
import {
  MODAL_ACTION_CLOSE,
  MODAL_ACTION_CONFIRM,
} from "../../Utilities/Constant";

import "react-calendar/dist/Calendar.css";
import "./Column.scss";

const Column = (props) => {
  const { t } = useTranslation();

  const { column, onCardDrop, onUpdateColumn } = props;
  const cards = mapOrder(column.cards, column.cardOrder, "id");

  const [isShowModalDelete, setShowModalDelete] = useState(false);
  const [titleColumn, setTitleColumn] = useState("");
  const [isFirstClick, setFirstClick] = useState(true);
  const inputRef = useRef(null);
  // const [isshowCalendar, setcalendar] = useState('');
  const [isShowAddNewTask, setIsShowAddNewTask] = useState(false);
  const [valueTextArea, setvalueTextArea] = useState("");
  const textAreaRef = useRef(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [chartData, setChartData] = useState(null);
  const [showChart, setShowChart] = useState(false);

  // ! npx json-server --watch db.json --port 8000
  const closeChart = () => {
    setShowChart(false);
    setChartData(null);
  };
  const generateChartData = () => {
    setChartData(data);
    setShowChart(true);
  };
  const data = [
    ["Task", "From all task"],
    ["Done", completedCount],
    ["Undone", cards.length - completedCount],
  ];
  const options = {
    // title: "Done tasks",
    title: t("doneTasks"),
    pieHole: 0.4,
    is3D: false,
  };
  const updateCompletedCount = (isChecked) => {
    setCompletedCount((prevCount) =>
      isChecked ? prevCount + 1 : prevCount - 1
    );
  };
  const handleDateChange = (date) => {
    const today = new Date();
    const selectedDate = date;

    if (selectedDate < today) {
      // alert("The selected date must be at least today!");
      alert(t("dateAlert"));
      return;
    }

    setSelectedDate(date);
    setShowCalendar(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  useEffect(() => {
    if (isShowAddNewTask === true && textAreaRef && textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [isShowAddNewTask]);

  useEffect(() => {
    if (column && column.title) {
      setTitleColumn(column.title);
    }
  }, [column]);

  const toggleModal = () => {
    setShowModalDelete(!isShowModalDelete);
  };

  const onModalAction = (type) => {
    if (type === MODAL_ACTION_CLOSE) {
    }
    if (type === MODAL_ACTION_CONFIRM) {
      const newColumn = {
        ...column,
        _destroy: true,
      };
      onUpdateColumn(newColumn);
    }
    toggleModal();
  };
  const onCalend = (type) => {
    if (type === MODAL_ACTION_CLOSE) {
      closeModal();
    }
    if (type === MODAL_ACTION_CONFIRM) {
      closeModal();
    }
  };

  const selectAllText = (event) => {
    setFirstClick(false);
    if (setFirstClick) {
      event.target.select();
    } else {
      inputRef.current.setSelectionRange(
        titleColumn.length,
        titleColumn.length
      );
    }
  };
  const handleClickOutside = () => {
    setFirstClick(true);
    const newColumn = {
      ...column,
      title: titleColumn,
      _destroy: false,
    };
    onUpdateColumn(newColumn);
  };
  const handleAddNewTask = () => {
    if (!valueTextArea) {
      textAreaRef.current.focus();
      return;
    }
    const newTask = {
      id: uuidv4(),
      boardId: column.boardId,
      columnId: column.id,
      title: valueTextArea,
      image: null,
    };
    let newColumn = { ...column };
    newColumn.cards = [...newColumn.cards, newTask];
    newColumn.cardOrder = newColumn.cards.map((card) => card.id);

    onUpdateColumn(newColumn);
    setvalueTextArea("");
    setIsShowAddNewTask(false);
  };
  const handleCheckboxChange = (isChecked) => {
    if (isChecked) {
      setCompletedCount((prevCount) => prevCount + 1);
    } else {
      setCompletedCount((prevCount) => prevCount - 1);
    }
  };
  const generateChart = () => {
    // alert(`Кількість увімкнених чекбоксів: ${completedCount}`);
    generateChartData();
    setShowChart(true);
  };
  return (
    <>
      <div className="columns">
        <header className="column-drag-handle">
          <div className="column-title">
            <Form.Control
              size={"sm"}
              type="text"
              value={titleColumn}
              className="customize-input-column"
              onClick={selectAllText}
              onChange={(event) => setTitleColumn(event.target.value)}
              spellCheck="false"
              onBlur={handleClickOutside}
              onMouseDown={(e) => e.preventDefault()}
              ref={inputRef}
            />
          </div>
          <div className="column-dropdown">
            <Dropdown>
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                size="sm"
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={generateChart}>
                  {/* Show chart */}
                  {t("showChart")}
                </Dropdown.Item>
                <Dropdown.Item onClick={openModal}>
                  {/* Show project term */}
                  {t("showProjectTerm")}
                </Dropdown.Item>
                <Dropdown.Item onClick={toggleModal}>
                  {/* Remove this column */}
                  {t("removeColumn")}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {showCalendar ? (
            <div className="full-screen-calendar">
              <Calendar
                locale="en-GB"
                onChange={handleDateChange}
                value={selectedDate}
              />
            </div>
          ) : (
            <img
              src={calendar}
              className="img-calendar"
              onClick={toggleCalendar}
            />
          )}
        </header>
        <div className="card-list">
          <Container
            groupName="col"
            onDrop={(dropResult) => onCardDrop(dropResult, column.id)}
            getChildPayload={(index) => cards[index]}
            dragClass="card-ghost"
            dropClass="card-ghost-drop"
            dropPlaceholder={{
              animationDuration: 150,
              showOnTop: true,
              className: "card-drop-preview",
            }}
            dropPlaceholderAnimationDuration={200}
          >
            {/* <Card /> */}
            {cards &&
              cards.length > 0 &&
              cards.map((card, index) => {
                return (
                  <Draggable key={card.id}>
                    <Card card={card} onCheckboxChange={updateCompletedCount} />
                  </Draggable>
                );
              })}
          </Container>
          {chartData && (
            <>
              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                className="chart"
              />
              <button className="chart-btn" onClick={closeChart}>
                {/* Close chart */}
                {t("closeChart")}
              </button>
            </>
          )}
          {isShowAddNewTask === true && (
            <div className="add-new-task">
              <textarea
                rows="2"
                className="form-control"
                // placeholder="Enter task"
                placeholder={t("enterTask")}
                ref={textAreaRef}
                value={valueTextArea}
                onChange={(event) => setvalueTextArea(event.target.value)}
              ></textarea>
              <div className="group-btn">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleAddNewTask()}
                >
                  {/* Add task */}
                  {t("addTask")}
                </button>
                <i
                  className="fa fa-times icon"
                  onClick={() => setIsShowAddNewTask(false)}
                ></i>
              </div>
            </div>
          )}
        </div>
        {isShowAddNewTask === false && (
          <footer>
            <div
              className="footer-action"
              onClick={() => setIsShowAddNewTask(true)}
            >
              <i className="fa fa-plus icon"></i>
              {/* Add task */}
              {t("addTask")}
            </div>
          </footer>
        )}
      </div>
      <ConfirmModal
        show={isShowModalDelete}
        // title={"Remove a column"}
        title={t("removeColumn")}
        // content={`Are you sure yo remove this column: ${column.title}`}
        content={`${t("removeColumnConfirmal")} ${column.title}?`}
        onAction={onModalAction}
      />
      <ConfirmModal
        // title={"Term of project"}
        title={t("termOfProject")}
        show={isModalOpen}
        // content={`The project must be completed by:  ${
        content={`${t("mustBeCompleted")} ${
          selectedDate.getDate().toString().padStart(2, "0") +
          "-" +
          (selectedDate.getMonth() + 1).toString().padStart(2, "0") +
          "-" +
          selectedDate.getFullYear()
        }`}
        // date={selectedDate}
        onClose={closeModal}
        onAction={onCalend}
      />
    </>
  );
};
export default Column;
