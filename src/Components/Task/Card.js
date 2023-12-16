import "./Card.scss";
import { mapOrder } from "../../Utilities/Sorts";
import frog from "../../images/frog.png";
import { event } from "jquery";
const Card = (props) => {
  const { card } = props;
//   const cards = mapOrder(card.image, card.cardOrder, 'id');

  return (
    <>
      <div className="card-item">
            {card.image && <img src={card.image}
            
            onMouseDown={event => event.preventDefault()}
            
            />}
                {card.title}
      </div>
    </>
  );
};

export default Card;
