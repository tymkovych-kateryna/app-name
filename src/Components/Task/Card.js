import "./Card.scss";
import { mapOrder } from "../../Utilities/Sorts";
import frog from "../../images/frog.png";
const Card = (props) => {
  const { card } = props;
//   const cards = mapOrder(card.image, card.cardOrder, 'id');

  return (
    <>
      <li>
            {card.image && <img src={card.image}/>}
                {/* Hello */}
                {card.title}
      </li>
    </>
  );
};

export default Card;
