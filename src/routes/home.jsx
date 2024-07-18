import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Items from './items';


export default function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);


  return (
    <div>
      <div className="header">
        <div className='headerText'>
          <h1 className='Luca mainConentTitle roboto-regular-italic'>Luca's Shop</h1>
          <h2 className='mainConentTitle roboto-regular-thin'>This shop is awesome</h2>
          <div className="descrip">
            <p className='mainConentTitle roboto-light'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum. Mattis pellentesque id nibh tortor id aliquet. Arcu odio ut sem nulla pharetra diam sit. Auctor elit sed vulputate mi sit amet mauris commodo quis. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. At imperdiet dui accumsan sit
            </p> 
          </div>
          <button onClick={() => navigate('/shop')} className='btn roboto-regular-thin shopNow'>Shop now</button>

        </div>
        <div className="headerImgContainer">
          <img src="https://www.dogster.com/wp-content/uploads/2021/12/german-shepherd-dog-standing-at-the-park_Bildagentur-Zoonar-GmbH_Shutterstock.jpeg" alt="" />
        </div>
      </div>
      <hr />
      <h2 className='mainConentTitle mainConentTitle roboto-regular-italic'>Featured</h2>
      <Items products={products} />    
    </div>
  );
}
