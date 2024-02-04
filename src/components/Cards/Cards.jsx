import "./Cards.css";

const Cards = ({ item, handleClick }) => {
  const { title, author, img, price } = item;

  return (
    <section>
      <div className="cards">
        <div className="image_box">
          <img src={img} alt="image" />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>{author}</p>
          <p>Price : {price} Rs</p>
          <button onClick={() => handleClick(item)}>Add To Cart</button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
