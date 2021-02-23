/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';

import {
  List,
  RadioGroup,
  FormControlLabel,
  Radio,
  Drawer,
  Badge,
} from '@material-ui/core';

import { AccountCircle, AddShoppingCart, MenuSharp } from '@material-ui/icons';

import { Link } from 'react-router-dom';
import Cart from '../../Components/Cart';
import {
  Container,
  FilterCol,
  ProductsHolder,
  ProductsContainer,
  StyledButton,
  MenuFilterCol,
} from './styles';

import api from '../../services/api';

import ProductsCard from '../../Components/StoreItem';

import { formatPrice } from '../../util/format';

export type ProductsItems = {
  id: string;
  name: string;
  pack: string;
  group: string;
  description: string;
  price: number;
  picUrl: string;
  amount: number;
};

const Store: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [priceChecked, setPriceChecked] = useState<number>();
  const [categoryChecked, setCategoryChecked] = useState<number>();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as ProductsItems[]);
  const [category, setCategory] = React.useState('');
  const [minPrice, setMinPrice] = React.useState<number>(0);
  const [maxPrice, setMaxPrice] = React.useState<number>(999999999);
  const [products, setProducts] = useState<ProductsItems[]>([]);
  const [searchInput, setSearchInput] = useState('');

  // Method to get the total value of items
  const getTotalItems = (items: ProductsItems[]) =>
    items.reduce((prod: number, item) => prod + item.amount, 0);

  // Filter products by input type
  const handleSearchChange = event => {
    setSearchInput(event.target.value);
  };

  // Load products
  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const foundProducts = await api.get('priceproducts', {
        params: {
          minPrice,
          maxPrice,
          group: category,
        },
      });

      const results = foundProducts.data.filter(prd =>
        prd.name.toLowerCase().includes(searchInput),
      );

      setProducts(results);
    }

    loadProducts();
  }, [minPrice, maxPrice, category, searchInput]);

  // Handle Filter by price
  const handleTogglePriceFilter = (value: number) => () => {
    if (value === 0) {
      setMinPrice(0);
      setMaxPrice(99.99);
      setPriceChecked(0);
    } else if (value === 1) {
      setMinPrice(100);
      setMaxPrice(399.99);
      setPriceChecked(1);
    } else if (value === 2) {
      setMinPrice(400.0);
      setMaxPrice(999.99);
      setPriceChecked(2);
    } else if (value === 3) {
      setMinPrice(1000.0);
      setMaxPrice(9999999.99);
      setPriceChecked(3);
    } else if (value === 4) {
      setMinPrice(0);
      setMaxPrice(9999999.99);
      setPriceChecked(4);
    } else {
      setMinPrice(0);
      setMaxPrice(9999999.99);
      setPriceChecked(5);
    }
  };

  // Handle Filter by category (groups)
  const handleToggleCategoryFilter = (value: string) => () => {
    if (value === 'utensils') {
      setCategory('Utensils');
      setCategoryChecked(0);
    } else if (value === 'knives') {
      setCategory('Knives');
      setCategoryChecked(1);
    } else if (value === 'teaware') {
      setCategory('Teaware');
      setCategoryChecked(2);
    } else if (value === 'food') {
      setCategory('Food');
      setCategoryChecked(3);
    } else if (value === 'allCategories') {
      setCategory('');
      setCategoryChecked(4);
    }
  };

  // Handle cart add
  const handleAddToCart = (selectedItem: ProductsItems) => {
    setCartItems(previous => {
      // If the product is already added to the cart
      const itemInCart = previous.find(item => item.id === selectedItem.id);

      if (itemInCart) {
        return previous.map(item =>
          item.id === selectedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item,
        );
      }

      // If the product was not added to the cart
      return [...previous, { ...selectedItem, amount: 1 }];
    });
  };

  // Handle cart remove
  const handleRemoveFromCart = (productId: string) => {
    setCartItems(previous =>
      previous.reduce((prod, items) => {
        if (items.id === productId) {
          if (items.amount === 1) return prod;
          return [...prod, { ...items, amount: items.amount - 1 }];
        }
        return [...prod, items];
      }, [] as ProductsItems[]),
    );
  };

  return (
    <Container>
      <header>
        <Link to="/">Japan Store</Link>
        <nav>
          <Drawer
            anchor="bottom"
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            style={{ zIndex: 100 }}
          >
            {/* Will only render on small screens */}
            <MenuFilterCol>
              <div className="PricesFilterContainer">
                <h6>Prices</h6>
                <List>
                  <RadioGroup>
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label={`${formatPrice(0)} - ${formatPrice(99.99)}`}
                      onClick={handleTogglePriceFilter(0)}
                      checked={priceChecked === 0}
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label={`${formatPrice(100)} - ${formatPrice(399.99)}`}
                      onClick={handleTogglePriceFilter(1)}
                      checked={priceChecked === 1}
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label={`${formatPrice(400)} - ${formatPrice(999.99)}`}
                      onClick={handleTogglePriceFilter(2)}
                      checked={priceChecked === 2}
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label={`${formatPrice(1000)} - ${formatPrice(
                        9999999.99,
                      )}`}
                      onClick={handleTogglePriceFilter(3)}
                      checked={priceChecked === 3}
                    />

                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="All Prices"
                      onClick={handleTogglePriceFilter(4)}
                      checked={priceChecked === 4}
                    />
                  </RadioGroup>
                </List>
              </div>

              <div className="CategoryFilterContainer">
                <h6>Categories</h6>
                <List>
                  <RadioGroup>
                    <FormControlLabel
                      value="utensils"
                      control={<Radio />}
                      label="Utensils"
                      onClick={handleToggleCategoryFilter('utensils')}
                      checked={categoryChecked === 0}
                    />
                    <FormControlLabel
                      value="knives"
                      control={<Radio />}
                      label="Knives"
                      onClick={handleToggleCategoryFilter('knives')}
                      checked={categoryChecked === 1}
                    />
                    <FormControlLabel
                      value="teaware"
                      control={<Radio />}
                      label="Teaware"
                      onClick={handleToggleCategoryFilter('teaware')}
                      checked={categoryChecked === 2}
                    />
                    <FormControlLabel
                      value="food"
                      control={<Radio />}
                      label="Food"
                      onClick={handleToggleCategoryFilter('food')}
                      checked={categoryChecked === 3}
                    />

                    <FormControlLabel
                      value="allCategories"
                      control={<Radio />}
                      label="All Categories"
                      onClick={handleToggleCategoryFilter('allCategories')}
                      checked={categoryChecked === 4}
                    />
                  </RadioGroup>
                </List>
              </div>
            </MenuFilterCol>
          </Drawer>

          <StyledButton id="menuButton" onClick={() => setMenuOpen(true)}>
            <MenuSharp style={{ color: '#fff' }} fontSize="large" />
          </StyledButton>

          <StyledButton id="accountButton">
            <AccountCircle style={{ color: '#fff' }} fontSize="large" />
          </StyledButton>

          <Drawer
            anchor="right"
            open={cartOpen}
            onClose={() => setCartOpen(false)}
            style={{ zIndex: 100 }}
          >
            <Cart
              cartItems={cartItems}
              addToCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart}
            />
          </Drawer>
          <StyledButton id="cartButton" onClick={() => setCartOpen(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color="error">
              <AddShoppingCart style={{ color: '#fff' }} fontSize="large" />
            </Badge>
          </StyledButton>
        </nav>
      </header>

      <ProductsContainer>
        <FilterCol>
          <h2>Filter</h2>
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={handleSearchChange}
          />
          <div className="PricesFilterContainer">
            <h6>Prices</h6>
            <List>
              <RadioGroup>
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label={`${formatPrice(0)} - ${formatPrice(99.99)}`}
                  onClick={handleTogglePriceFilter(0)}
                />
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label={`${formatPrice(100)} - ${formatPrice(399.99)}`}
                  onClick={handleTogglePriceFilter(1)}
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label={`${formatPrice(400)} - ${formatPrice(999.99)}`}
                  onClick={handleTogglePriceFilter(2)}
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label={`${formatPrice(1000)} - ${formatPrice(9999999.99)}`}
                  onClick={handleTogglePriceFilter(3)}
                />

                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label="All Prices"
                  onClick={handleTogglePriceFilter(4)}
                />
              </RadioGroup>
            </List>
          </div>

          <div className="CategoryFilterContainer">
            <h6>Categories</h6>
            <List>
              <RadioGroup>
                <FormControlLabel
                  value="utensils"
                  control={<Radio />}
                  label="Utensils"
                  onClick={handleToggleCategoryFilter('utensils')}
                />
                <FormControlLabel
                  value="knives"
                  control={<Radio />}
                  label="Knives"
                  onClick={handleToggleCategoryFilter('knives')}
                />
                <FormControlLabel
                  value="teaware"
                  control={<Radio />}
                  label="Teaware"
                  onClick={handleToggleCategoryFilter('teaware')}
                />
                <FormControlLabel
                  value="food"
                  control={<Radio />}
                  label="Food"
                  onClick={handleToggleCategoryFilter('food')}
                />

                <FormControlLabel
                  value="allCategories"
                  control={<Radio />}
                  label="All Categories"
                  onClick={handleToggleCategoryFilter('allCategories')}
                />
              </RadioGroup>
            </List>
          </div>
        </FilterCol>
        <ProductsHolder>
          {products?.map(product => (
            <ProductsCard
              key={product.id}
              items={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </ProductsHolder>
      </ProductsContainer>
    </Container>
  );
};

export default Store;
