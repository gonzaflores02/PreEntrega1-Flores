import "./itemlistcontainer.css";
import { products } from "../../../../produtcs";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { categoria } = useParams();
  const [items, setItems] = useState([]);

  if (categoria) {
    useEffect(() => {
      const getProducts = new Promise((resolve) => {
        resolve(products);
      });
      getProducts.then((res) => {
        setItems(res.filter((filtro) => filtro.category === categoria));
      });
    }, [categoria]);
  } else {
    useEffect(() => {
      const getProducts = new Promise((resolve) => {
        resolve(products);
      });
      getProducts.then((res) => {
        setItems(res);
      });
    }, [categoria]);
  }

  return <ItemList items={items} />;
};
