import React, { useEffect, useState } from 'react';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

interface ProductsItems {
  id: string;
  name: string;
  pack: string;
  group: string;
  description: string;
  price: number;
  picUrl: string;
}

let productsCart: string;
let arrayOfProducts: string[];

export async function addCartProducts(productId: string): Promise<void> {
  productsCart = productId;
}

const Cart: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<ProductsItems[]>([]);

  console.log(arrayOfProducts);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      if (productsCart) {
        await api
          .get('products/productbyid', {
            params: {
              productId: productsCart,
            },
          })
          .then(response => {
            setCartProducts([...cartProducts, response.data]);
          });
      }
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th style={{ color: 'transparent' }}>Image</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th style={{ color: 'transparent' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts &&
            cartProducts.map(products => (
              <tr key={products.id}>
                <td>
                  <img src={products.picUrl} alt="product" />
                </td>
                <td>
                  <strong>{products.name}</strong>
                  <span>{formatPrice(products.price)}</span>
                </td>
                <td>
                  <div>
                    <button type="button">
                      <MdRemoveCircleOutline size={20} color="#c3272b" />
                    </button>

                    <input type="number" value="1" />

                    <button type="button">
                      <MdAddCircleOutline size={20} color="#c3272b" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{formatPrice(99)}</strong>
                </td>
                <td>
                  <button type="button">
                    <MdDelete size={20} color="#c3272b" />
                  </button>
                </td>
              </tr>
            ))}

          {/* <tr>
            <td>
              <img src="" alt="product" />
            </td>
            <td>
              <strong>Product1</strong>
              <span>{formatPrice(99)}</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#c3272b" />
                </button>

                <input type="number" value="1" />

                <button type="button">
                  <MdAddCircleOutline size={20} color="#c3272b" />
                </button>
              </div>
            </td>
            <td>
              <strong>{formatPrice(99)}</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#c3272b" />
              </button>
            </td>
          </tr> */}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Checkout</button>

        <Total>
          <span>Estimated Total</span>
          <strong> 99 </strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
