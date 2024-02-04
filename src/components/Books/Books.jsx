import "./Books.css";
import list from "../../data";
import Cards from "../Cards/Cards";

const Books = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Books;
