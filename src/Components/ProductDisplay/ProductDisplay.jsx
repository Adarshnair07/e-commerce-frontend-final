// import React, { useContext, useState } from "react";
// import "./ProductDisplay.css";
// import star_icon from "../Assets/star_icon.png";
// import star_dull_icon from "../Assets/star_dull_icon.png";
// import { ShopContext } from "../../Context/ShopContext";

// const ProductDisplay = (props) => {

//   const {product} = props;
//   const {addToCart} = useContext(ShopContext);

//   const [selectedSize, setSelectedSize] = useState(null);

//   const handleSizeClick = (size) => {
//     setSelectedSize(size);
//   };


//   return (
//     <div className="productdisplay">
//       <div className="productdisplay-left">
       
//         <div className="productdisplay-img">
//           <img className="productdisplay-main-img" src={product.image} alt="img" />
//         </div>
//       </div>
//       <div className="productdisplay-right">
//         <h1>{product.name}</h1>
       

        
//         <div className="productdisplay-right-prices">
//           <div className="productdisplay-right-price-old">₹{product.old_price}</div>
//           <div className="productdisplay-right-price-new">₹{product.new_price}</div>
//         </div>
//         <div className="productdisplay-right-description">
//         {product.description}
//         </div>
//         <div className="productdisplay-right-size">
//           <h1>Select Size (UK)</h1>
//           {/* <div className="productdisplay-right-sizes">
//             <div>5</div>
//             <div>6</div>
//             <div>7</div>
//             <div>8</div>
//             <div>9</div>
//           </div> */}
//            <div className="productdisplay-right-sizes">
//             <div onClick={() => handleSizeClick(5)} className={`productdisplay-right-size-option ${selectedSize === 5 ? 'selected' : ''}`}>5</div>
//             <div onClick={() => handleSizeClick(6)} className={`productdisplay-right-size-option ${selectedSize === 6 ? 'selected' : ''}`}>6</div>
//             <div onClick={() => handleSizeClick(7)} className={`productdisplay-right-size-option ${selectedSize === 7 ? 'selected' : ''}`}>7</div>
//             <div onClick={() => handleSizeClick(8)} className={`productdisplay-right-size-option ${selectedSize === 8 ? 'selected' : ''}`}>8</div>
//             <div onClick={() => handleSizeClick(9)} className={`productdisplay-right-size-option ${selectedSize === 9 ? 'selected' : ''}`}>9</div>
//           </div>
//         </div>
//         <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
//         <p className="productdisplay-right-category"><span>Category :</span> Sneakers, Trainers</p>
//         <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;
import React, { useContext, useEffect, useState } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) {
    return <div>Product not found</div>;
  }
  
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₹{product.old_price}</div>
          <div className="productdisplay-right-price-new">₹{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size (UK)</h1>
          <div className="productdisplay-right-sizes">
            <div onClick={() => handleSizeClick(5)} className={`productdisplay-right-size-option ${selectedSize === 5 ? 'selected' : ''}`}>5</div>
            <div onClick={() => handleSizeClick(6)} className={`productdisplay-right-size-option ${selectedSize === 6 ? 'selected' : ''}`}>6</div>
            <div onClick={() => handleSizeClick(7)} className={`productdisplay-right-size-option ${selectedSize === 7 ? 'selected' : ''}`}>7</div>
            <div onClick={() => handleSizeClick(8)} className={`productdisplay-right-size-option ${selectedSize === 8 ? 'selected' : ''}`}>8</div>
            <div onClick={() => handleSizeClick(9)} className={`productdisplay-right-size-option ${selectedSize === 9 ? 'selected' : ''}`}>9</div>
          </div>
        </div>
        <button className="color" onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
        <p className="productdisplay-right-category"><span>SubCategory :</span> {product.subcategory}</p>
        <p className="productdisplay-right-category"><span>Tags :</span> {product.tags}</p>
      </div>
    </div>
  );
};

export default ProductDisplay;