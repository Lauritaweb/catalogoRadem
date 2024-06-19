import { useState, useEffect } from "react";

const ItemDetail = ({ product }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Filtra las propiedades del producto que comiencen con 'image' y las agrega al array de imágenes
    const productImages = Object.keys(product)
      .filter(key => key.startsWith('image'))
      .map(key => product[key]);
    setImages(productImages);
  }, [product]);

  return (
    <div className="container itemDetail">
      <div className="row pt-4">
        <div className="col-md-5">
          <h1 className="text-main fs-3 fw-light">{product.name}</h1>
          <ul>
            <li>Código: {product.code}</li>
            <li>Acabado: {product.finish}</li>
            <li>Dimensiones: {product.dimensions}</li>
            <li>Variantes: {product.variants}</li>
          </ul>
        </div>
        <div className="col-md-7">
          <div className="grid">
            {images.map((image, index) => (
              <div key={index} className={`f-${index + 1}`}>
                <img src={image} className="img-details" alt={`Imagen ${index + 1}`} />
              </div>
            ))}
            {/* Asegura que haya exactamente 5 slots para imágenes, aunque algunas sean vacías */}
            {Array.from({ length: 5 - images.length }).map((_, index) => (
              <div key={`empty-${index}`} className={`f-${images.length + index + 1}`}>
                {/* No se muestra nada si no hay imagen disponible */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
