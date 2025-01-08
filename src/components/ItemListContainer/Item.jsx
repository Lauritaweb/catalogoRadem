import {useState} from "react"
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const [expandir, setExpandir] = useState(false);
  const handleMouseOver = () => {
    setExpandir(true)
  };

  const handleMouseLeave = () => {
    setExpandir(false)
  };


  return (
    <div key={product.id} className="card" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <div className="">
        <img className="w-100 card-img-top" src={product.image} alt={product.name} />
      </div>
      <div className="card-body p-3">
        <h2 className="card-title text-uppercase text-black fs-5 fw-light">{product.name}</h2>
        <small className="text-uppercase fw-light">{product.description}</small>
        <div className="mt-3">
          <Link to={`/detail/${product.id}`} className="btn-call-to-action-3">
            <span>
            Ver +
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Item;
