import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-sm-6 col-md-3 mb-2">
            <Item product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
