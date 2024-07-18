import { useCart } from 'react-use-cart';
import { useState } from 'react';

export default function Items({ products }) {
  const [addedItems, setAddedItems] = useState([]);
  const { addItem } = useCart();

  const addToCart = (element) => {
    addItem(element);
    setAddedItems([...addedItems, element.id])
  }
  return (
    <div id="contentGrid">
      {products.map((elem) => (
        <div className='box' key={elem.id}>
          <img src={elem.image} alt="item" />
          <hr />
          <div className='description'>
            <h3 className='roboto-regular-italic'>{elem.title}</h3>
            <p className='roboto-regular-italic'>${elem.price}</p>
            <button
             id='addCartBtn' 
             className='item-btn roboto-regular-italic' 
             onClick={()=> addToCart(elem)} 
             type="button" 
             style={{background: addedItems.includes(elem.id) ? 'green' : 'rgb(142, 122, 255)'}}
             >{addedItems.includes(elem.id) ? 'Added to cart' : 'Add to cart'}
             </button>
          </div>
        </div>
      ))}
    </div>
  );
}
