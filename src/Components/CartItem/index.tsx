import React from 'react';

import { Button } from '@material-ui/core';
import { Container } from './styles';

import { formatPrice } from '../../util/format';

import { ProductsItems } from '../../pages/Store/index';

type IProps = {
  items: ProductsItems;
  addToCart: (selectedItem: ProductsItems) => void;
  removeFromCart: (productId: string) => void;
};

const CartItem: React.FC<IProps> = ({ items, addToCart, removeFromCart }) => {
  return (
    <Container>
      <div>
        <h4>{items.name}</h4>
        <h6>{items.description}</h6>
        <div className="information">
          <p id="cartPrice">Price: {formatPrice(items.price)}</p>
          <p id="cartTotal">Total: {formatPrice(items.amount * items.price)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(items.id)}
          >
            -
          </Button>
          <p id="itemAmount">{items.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(items)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={items.picUrl} alt={items.name} />
    </Container>
  );
};

export default CartItem;
