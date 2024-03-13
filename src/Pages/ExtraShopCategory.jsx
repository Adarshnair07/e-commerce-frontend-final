import React, { useEffect, useLayoutEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";
import { Link, useParams } from "react-router-dom";

const ExtraShopCategory = (props) => {
const {category} = useParams();
  const [allproducts, setAllProducts] = useState([]);
  const [banner, setBanner] = useState('');

  const fetchInfo = () => { 
    fetch('http://localhost:4000/allproducts') 
            .then((res) => res.json()) 
            .then((data) => setAllProducts(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])
  const fetchCatInfo = () => { 
    fetch('http://localhost:4000/category/'+category) 
            .then((res) => res.json()) 
            // .then((res) => setBanner(res[0].banner))
            .then((res) => setBanner(res[0].banner))
    }

    useEffect(() => {
        fetchCatInfo();
    })
    
  return (
    <div className="shopcategory">
      <img src={banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-indexSort">
        <p><span>Showing 1 - 12</span> out of 54 Products</p>
       
      </div>
      <div className="shopcategory-products">
        {allproducts.map((item,i) => {
            if(category===item.category)
            {
              return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>;
            }
            else
            {
              return null;
            }
        })}
      </div>
      <div className="shopcategory-loadmore">
      <Link to='/' style={{ textDecoration: 'none' }}>Explore More</Link>
      </div>
    </div>
  );
};

export default ExtraShopCategory;
