/* eslint-disable array-callback-return */
import React from 'react';

import { Container } from './styles';
import { ProductsItems } from '../../pages/Store/index';
import CartItem from '../CartItem';

import { formatPrice } from '../../util/format';

type IProps = {
  cartItems: ProductsItems[];
  addToCart: (selectedItem: ProductsItems) => void;
  removeFromCart: (productId: string) => void;
};

const Cart: React.FC<IProps> = ({ cartItems, addToCart, removeFromCart }) => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const cartTotal = (items: ProductsItems[]) =>
    items.reduce((prod: number, item) => prod + item.amount * item.price, 0);
  return (
    <Container>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <h2 id="cartEmptyInfo">Your cart is empty!</h2>
      ) : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          items={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <div id="cartFooter">
        <button type="submit">Checkout</button>
        <h2>Total: {formatPrice(cartTotal(cartItems))}</h2>
      </div>
    </Container>
  );
};

export default Cart;
