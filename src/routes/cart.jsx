import { useCart } from 'react-use-cart';

export default function Cart() {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  const handleCheckout = () => {
    alert('checked out!');
    emptyCart();
  };

  return (
    <div>
      <h1 className='mainConentTitle roboto-regular-italic'>Shopping Cart</h1>
      <hr />
      <h1 className='mainConentTitle roboto-regular-italic'>
        {isEmpty? 'Your Cart is Empty' : ''}
      </h1>

        <div>
          {items.map((item, index) => (
            <div key={index} className='cartItem'>

              <div className="imgContainer">
                <img src={item.image} alt="item" />
              </div>
              
              <div className="infoContainer">
                <h2 className='mainConentTitle roboto-regular-thin'>{item.title}</h2>
                <p className='roboto-regular-italic'>${item.price}</p>
                <div className='buttonContainer'>
                  <button className='cart-btn' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className='cart-btn' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                </div>               
                <button className='link mainConentTitle roboto-regular-italic removeButton' onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        {isEmpty? ' ' : 
          <div className='totalNdBtns'>
          <h2 className='roboto-regular-italic'>Total: ${cartTotal}</h2>
          <button className='link mainConentTitle roboto-regular-italic check' onClick={handleCheckout}>Check out</button>
          <button className='link mainConentTitle roboto-regular-italic empty' onClick={emptyCart}>Empty Cart</button>
        </div>
        }    
    </div>
  );
}
