import React from 'react';

import { ProductsItems } from '../../pages/Store/index';

import { formatPrice } from '../../util/format';

import { ProductsCard } from './styles';

type IProps = {
  items: ProductsItems;
  handleAddToCart: (selectedItem: ProductsItems) => void;
};

const StoreItem: React.FC<IProps> = ({ items, handleAddToCart }) => {
  return (
    <ProductsCard key={items.id}>
      <h3 id="productTitle">{items.name}</h3>
      <img src={items.picUrl} alt={items.name} />
      <h5>{items.description}</h5>
      <h6>{formatPrice(items.price)}</h6>
      <button type="submit" onClick={() => handleAddToCart(items)}>
        Add to Cart
      </button>
    </ProductsCard>
  );
};

export default StoreItem;
