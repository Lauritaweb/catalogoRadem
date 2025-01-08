import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import db from "../../db/db";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subCategoryFilter, setSubCategoryFilter] = useState('');
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
      setProducts(data.sort((a, b) => a.name.localeCompare(b.name)));
      setLoading(false);
    } catch (error) {
      console.log("Error obteniendo productos:", error);
      setLoading(false);
    }
  };

  const getProductsByCategory = async () => {
    try {
      let q = query(collection(db, "products"), where("category", "==", idCategory));
      if (subCategoryFilter) {
        q = query(collection(db, "products"), where("category", "==", idCategory), where("subcategory", "==", subCategoryFilter));
      }
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProducts(data.sort((a, b) => a.name.localeCompare(b.name)));
      setLoading(false);
    } catch (error) {
      console.log(`Error obteniendo productos por categoría (${idCategory}):`, error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategory, subCategoryFilter]);

  const handleSubCategoryChange = (subCat) => {
    setSubCategoryFilter(subCat);
  };

  const getSubCategories = () => {
    switch (idCategory) {
      case "bano":
        return ['Jaboneras', 'Porta Cepillos', 'Perchas', 'Porta Rollos', 'Toalleros', 'Organizadores'];
      case "cocina":
        return ['Ganchos', 'Estantes', 'Porta Rollos', 'Barral'];
      case "muebles":
        return ['Manijas', 'Rejillas', 'Patas', 'Mensulas', 'Estantes'];
      case "puertas":
        return ['Manijones', 'Accesorios', 'Manijas', 'Bisagras', 'Buzones', 'Letras/Números'];
      default:
        return [];
    }
  };

  const subCategories = getSubCategories();

  return (
    <div className="item-list-container mt-3">
      <h2 className="text-center fs-1 text-uppercase fw-light text-main mb-3">{getCategoryTitle()}</h2>
      {/* Botones de subcategorías para desktop */}
      {subCategories.length > 0 && (
        <div className="container d-none d-md-block"> {/* Ocultar en mobile */}
          {subCategories.map(subCat => (
            <button
              key={subCat}
              onClick={() => handleSubCategoryChange(subCat.toLowerCase())} // Convierte a minúsculas para coincidir con Firebase
              className={`btn ${subCategoryFilter === subCat.toLowerCase() ? 'btn-outline-danger' : 'btn-outline-dark'} m-1`}
            >
              {subCat}
            </button>
          ))}
          <button
            onClick={() => handleSubCategoryChange('')}
            className={`btn ${subCategoryFilter === '' ? 'btn-outline-danger' : 'btn-outline-dark'} m-1`}
          >
            Todos
          </button>
        </div>
      )}
      {/* Select de subcategorías para mobile */}
      {subCategories.length > 0 && (
        <div className="container d-md-none"> {/* Mostrar solo en mobile */}
          <select
            className="form-select mb-2"
            value={subCategoryFilter}
            onChange={(e) => handleSubCategoryChange(e.target.value)}
          >
            <option value="">Todos</option>
            {subCategories.map(subCat => (
              <option key={subCat} value={subCat.toLowerCase()}>{subCat}</option>
            ))}
          </select>
        </div>
      )}
      {loading ? <div>Cargando productos...</div> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
