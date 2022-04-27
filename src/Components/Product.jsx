const Product = (props) => {
  return (
    <div className="product">
      <div className="grad"></div>
      <img src={props.img} alt={props.alt} />
      <h3 className="product-amount">${props.amount}</h3>
      <p className="product-des">{props.des}</p>
    </div>
  );
};

export default Product;
