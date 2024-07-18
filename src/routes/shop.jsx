import { useEffect, useState } from 'react';
import Items from './items';

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
    <div className="shop">
      <h1 className='Shop mainConentTitle roboto-regular-italic'>Shop</h1>
      <hr />
      <Items products={products} />
    </div>
  )
}
