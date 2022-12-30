import Card from "../card/Card.Component";
import "./Card-List.style.css";
import "../card/Card.Component";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
