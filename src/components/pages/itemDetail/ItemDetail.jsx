const ItemDetail = ({ item }) => {
  return (
    <div className="detail-container">
      <img src={item.imageUrl} alt="" />
      <div className="detail-info">
        <h1>{item.title}</h1>
        <h4>{item.description}</h4>
        <h2>${item.price}</h2>

        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
