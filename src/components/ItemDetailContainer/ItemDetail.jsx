import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalGateway, Modal } from 'react-images';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ product }) => {
  const { cart, addToCart } = useContext(CartContext);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
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

  // URL de WhatsApp
  const whatsappLink = `https://wa.me/5491150458044?text=Hola,%20me%20interesa%20el%20producto%20${product.code}.`;

  return (
    <div className="container itemDetail">
      <nav aria-label="breadcrumb" className='mt-5'>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="http://www.radem.com.ar/" className='text-black'>Home</a></li>
          <li className="breadcrumb-item"><Link to={`/category/${product.category}`} className='text-black'>{transformCategory(product.category)}</Link></li>
        </ol>
      </nav>
      <div className="row pt-4 wow fadeInLeft">
        <div className="col-md-5">
          <h1 className="text-main fs-4 fw-light text-uppercase">{product.name}</h1>
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
              <span className='text-uppercase fw-bold'>Medidas </span> <span className='fw-bold'>en mm: </span> 
              {product.dimensions}
            </li>
            <li>
              <span className='text-uppercase fw-bold text-lowercase'>Acabado: </span>
              {product.variants}
            </li>
          </ul>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-success whatsapp-btn d-flex align-items-center mt-3 me-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-whatsapp me-1" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
            Quiero hablar con un representante
          </a>
          <div className='mt-1'>
            <small>⚠️
              <i>
            Solo para distribuidores mayoristas
              </i>
            </small>
          </div>
        </div>
        <div className="col-md-7">
          <div>
            {images.map((image, index) => (
              <div 
                key={index} 
                className={`f-${index + 1}`} 
              >
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
