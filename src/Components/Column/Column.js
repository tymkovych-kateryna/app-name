import "./Column.scss";
import Card from "../Task/Card";
import frog from "../../images/frog.png";
import { mapOrder } from "../../Utilities/Sorts";
const Column = (props) => {
  const { column } = props;
  const cards = mapOrder(column.cards, column.cardOrder, "id");
  
  return (
    <>
      <div className="columns">
        <header>{column.title}</header>
        <ul>
          {/* <Card /> */}
          {cards && cards.length > 0 && cards.map((card, index) => {
            return(
              <Card key={card.id} card={card}/>
            )

          })}
          {/* <li>
              <img src={frog} alt="smth"></img>
              First task
            </li> */}
         
        </ul>
        <footer>Add task</footer>
      </div>
    </>
  );
};
export default Column;
