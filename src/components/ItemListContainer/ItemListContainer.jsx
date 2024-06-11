import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import db from "../../db/db";
import { collection, getDocs, query, where } from "firebase/firestore";
// import "./itemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams();

  const getCategoryTitle = () => {
    switch (idCategory) {
      case "puertas":
        return "Puertas";
      case "muebles":
        return "Muebles";
      case "cocina":
        return "Cocina";
      case "bano":
        return "Baño";
      default:
        return "Nuestros Productos";
    }
  };

  const getProducts = async () => {
    try {
      const dataDb = await getDocs(collection(db, "products"));
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      console.log("All products: ", data); // Log all products
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log("Error obteniendo productos:", error);
      setLoading(false);
    }
  };

  const getProductsByCategory = async () => {
    try {
      const q = query(collection(db, "products"), where("category", "==", idCategory));
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      console.log(`Products in category ${idCategory}: `, data); // Log products by category
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(`Error obteniendo productos por categoría (${idCategory}):`, error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (idCategory) {
      console.log(`Loading products for category: ${idCategory}`);
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategory]);

  return (
    <div className="item-list-container mt-3">
      <h2 className="text-center fs-1 text-uppercase fw-light text-main mb-3">{getCategoryTitle()}</h2>
      {loading ? <div>Cargando productos...</div> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
