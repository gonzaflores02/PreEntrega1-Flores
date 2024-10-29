import Card from "../../common/card/Card";

const ItemList = ({ items }) => {
  return (
    <div className="container-products">
      {items.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            stock={item.stock}
            image={item.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
