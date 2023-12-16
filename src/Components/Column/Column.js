import "./Column.scss";
import Card from "../Task/Card";
import frog from "../../images/frog.png";
import { mapOrder } from "../../Utilities/Sorts";
import { Container, Draggable } from "react-smooth-dnd";


const Column = (props) => {
  const { column } = props;
  const cards = mapOrder(column.cards, column.cardOrder, "id");
  const onCardDrop = (dropResult) => {
      console.log('>>> inside onCardDrop',dropResult);

  }
  return (
    <>
      <div className="columns">
        <header className="column-drag-handle">{column.title}</header>
        <div className="card-list">

        <Container

// onDragStart={e => console.log("drag started", e)}
// onDragEnd={e => console.log("drag end", e)}
// onDragEnter={() => {
//   console.log("drag enter:", column.id);
// }}
// onDragLeave={() => {
//   console.log("drag leave:", column.id);
// }}
// onDropReady={p => console.log('Drop ready: ', p)}
                    groupName="col"
                    onDrop={onCardDrop}
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
        <footer>Add task</footer>
      </div>
    </>
  );
};
export default Column;
