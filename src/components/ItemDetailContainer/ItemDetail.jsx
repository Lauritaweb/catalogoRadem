import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalGateway, Modal } from 'react-images';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ product }) => {
  const { cart, addToCart } = useContext(CartContext);
  const [clickAdd, setClickAdd] = useState(false);
  const [count, setCount] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  const images = [
    { src: product.image, alt: product.name },
    { src: product.image2, alt: product.name },
    { src: product.image3, alt: product.name },
    { src: product.image4, alt: product.name },
    { src: product.image5, alt: product.name },
  ].filter(image => image.src);

  if (!product || !product.category || !product.name) {
    return <div>Error: Product data is missing.</div>;
  }

  const transformCategory = (category) => {
    const categoryMap = {
      bano: 'baño',
    };
    return categoryMap[category] || category;
  };

  return (
    <div className="container itemDetail">
      <nav aria-label="breadcrumb" className='mt-5'>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="http://www.radem.com.ar/" className='text-black'>Home</a></li>
          <li className="breadcrumb-item"><Link to={`/category/${product.category}`} className='text-black'>{transformCategory(product.category)}</Link></li>
          {/* <li className="breadcrumb-item active" aria-current="page">{product.name}</li> */}
        </ol>
      </nav>
      <div className="row pt-4">
        <div className="col-md-5">
          <h1 className="text-main fs-3 fw-light">{product.name}</h1>
          <ul>
            <li>
              <span className='text-uppercase fw-bold'>Categoría: </span>
              {transformCategory(product.category)}
            </li>
            <li>
              <span className='text-uppercase fw-bold'>Código: </span>
              {product.code}
            </li>
            <li>
              <span className='text-uppercase fw-bold'>Variantes: </span>
              {product.variants}
            </li>
            <li>
              <span className='text-uppercase fw-bold'>Medidas </span> <span className='fw-bold'>en mm: </span> 
              {product.dimensions}
            </li>
          </ul>
        </div>
        <div className="col-md-7">
          <div className="grid">
            {images.map((image, index) => (
              <div key={index} className={`f-${index + 1}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="img-details"
                  onClick={() => handleOpenLightbox(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <ModalGateway>
        {lightboxOpen ? (
          <Modal onClose={handleCloseLightbox}>
            <div className="lightbox">
              <button onClick={handleCloseLightbox} className='lightbox-close'>X</button>
              <img src={images[selectedIndex].src} alt={images[selectedIndex].alt} />
            </div>
          </Modal>
        ) : null}
      </ModalGateway>

      
    </div>
  );
};

export default ItemDetail;
