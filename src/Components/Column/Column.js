import "./Column.scss";
import Card from "../Task/Card";
import frog from "../../images/frog.png";
import { mapOrder } from "../../Utilities/Sorts";
import { Container, Draggable } from "react-smooth-dnd";
import Dropdown from 'react-bootstrap/Dropdown';


const Column = (props) => {
  const { column, onCardDrop } = props;
  const cards = mapOrder(column.cards, column.cardOrder, "id");
  
  
 
  return (
    <>
      <div className="columns">
        <header className="column-drag-handle">
          <div className="column-title">

          {column.title}
          </div>
          <div className="column-dropdown">

          <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" size="sm">
        {/* Dropdown Button */}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Add task</Dropdown.Item>
        <Dropdown.Item href="#">Remove this column</Dropdown.Item>
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
        </div>
        <footer>
          <div className="footer-action">

         <i className="fa fa-plus icon"></i> Add task
          </div>
          </footer>
      </div>
    </>
  );
};
export default Column;
