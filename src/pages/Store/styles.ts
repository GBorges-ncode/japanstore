import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import { transform } from 'typescript';

export const Container = styled.div`
  position: absolute;
  height: 100%;

  width: 100%;
  background: #fff;

  min-block-size: 300px;
  writing-mode: horizontal-tb;

  .MuiIconButton-root {
    border-radius: 0;
  }

  /* Page header */
  header {
    display: flex;
    width: 100%;
    height: 10%;

    justify-content: space-between;
    align-items: center;

    background: #171412;

    a {
      display: inline-block;
      text-decoration: none;

      border: none;

      color: #ebf6f7;

      font-size: 32px;
      margin-left: 2%;
      outline: none;

      :hover {
        color: #c91f37;
      }

      :after {
        display: block;
        content: '';
        border-bottom: 3px solid #fff;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
      }

      :hover:after {
        transform: scaleX(1);
        transform-origin: 0% 100%;
      }
    }

    nav {
      display: flex;
      width: 20%;
      height: 60px;

      justify-content: flex-end;
      align-items: center;

      #menuButton {
        display: none;
        outline: none;
        justify-content: center;
        text-decoration: none;

        & :hover {
          color: #c91f37;
        }
      }

      #cartButton {
        outline: none;
        & :hover {
          color: #c91f37;
        }
      }

      #accountButton {
        outline: none;
        & :hover {
          color: #c91f37;
        }
      }

      & > button {
        margin-left: 10px;
      }
    }
  }

  /* 375px Screens - Container */
  @media (max-width: 424px) {
    header {
      display: flex;
      width: 100%;
      height: 10%;
      z-index: 99;
      position: fixed;

      justify-content: space-between;
      align-items: center;

      background: #171412;

      a {
        font-size: 24px;
      }

      nav {
        #menuButton {
          width: 30px;
        }

        #cartButton {
          width: 30px;
        }

        #accountButton {
          width: 30px;
        }
      }
    }
  }

  @media (max-width: 1075px) {
    #menuButton {
      display: flex !important;
    }
  }

  @media (max-width: 300px) {
    header {
      display: inline-block;
      height: 12%;
      justify-content: center;
      margin: 0 auto;

      /* Title */
      a {
        display: inline-block;
        text-decoration: none;
        text-align: center;
        border: none;
        margin: 0 auto;
        width: 100% !important;
        justify-content: center !important;

        color: #ebf6f7;

        font-size: 32px;
        outline: none;

        :hover {
          color: #c91f37;
        }

        :after {
          display: block;
          content: '';
          border-bottom: 3px solid #fff;
          transform: scaleX(0);
          transition: transform 250ms ease-in-out;
        }

        :hover:after {
          transform: scaleX(1);
          transform-origin: 0% 100%;
        }
      }

      nav {
        display: flex;
        width: 100% !important;
        height: 50px;
        justify-content: center !important;
        text-align: center;
        margin: 0 auto;

        #menuButton {
          outline: none;
        }

        #cartButton {
          outline: none;
        }

        #accountButton {
          outline: none;
        }

        & > button {
          margin-left: 40px;
        }
      }
    }
  }
`;

// Container to hold all the store products
export const ProductsContainer = styled.div`
  display: inline-flex;
  width: 100%;
  height: auto;

  /* Medias */
  @media (max-width: 1075px) {
    display: inline-flex;
    width: 90%;
  }

  @media (max-width: 900px) {
    margin: 0 auto;
    width: 100%;
    display: inline-flex;
  }

  @media (max-width: 375px) {
    margin: 0 auto;
    width: 100%;
    display: inline-flex;
  }
`;

// Column with filters (price and categories)
export const FilterCol = styled.section`
  display: inline-block;
  border: 1px solid #c9ccd1;
  padding-top: 0;
  margin-top: 40px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 4px;
  height: 700px;
  max-width: 20%;

  /* filter title */
  h2 {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #c9ccd1;
    border-radius: 4px;
  }

  /* Search Input */
  input {
    border: 1px solid red;
    border-radius: 4px;
    display: flex;
    width: 94%;
    margin-left: 10px;
    /* margin-right: 10px; */
    text-align: center;
  }

  /* Prices and Categories Container */
  .PricesFilterContainer,
  .CategoryFilterContainer {
    border: 1px solid #c9ccd1;
    border-radius: 4px;
    margin: 10px;

    /* Prices Title */
    h6 {
      text-align: center;
      background: #c9ccd1;
    }

    /* List of filter items */
    ul {
      display: block;
      justify-content: center;
      margin-left: 5px;

      div {
        label {
          margin-left: 5px;
          span {
            font-size: 13px;
            font-family: 'Poppins';
          }
        }
      }
    }
  }

  @media (max-width: 1075px) {
    display: none;
  }
`;

// holder for products around the products container
export const ProductsHolder = styled.div`
  height: 80%;
  margin-top: 40px;
  margin-bottom: 40px;

  align-items: center;

  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 20px;
  row-gap: 20px;
  flex: 1;

  justify-content: center;

  @media (max-width: 1330px) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 20px;
    row-gap: 20px;
    flex: 1;
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;
  }

  @media (max-width: 590px) {
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-gap: 20px;
    row-gap: 20px;
    flex: 1;
    margin-top: 40px;
  }

  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-gap: 20px;
    row-gap: 20px;
    flex: 1;
    margin-top: 120px;
  }
`;

// Account and Cart Buttons
export const StyledButton = styled(IconButton)`
  display: flex;
  z-index: 100;
  right: 20px;
`;

// Menu for small screens
export const MenuFilterCol = styled.section`
  display: inline-flex;
  margin: 0 auto;
  width: 100%;

  /* filter title */
  h2 {
    display: flex;
    margin: 0 auto;
    /* align-items: center; */
    justify-content: center;
    border-bottom: 1px solid #c9ccd1;
    border-radius: 4px;
    font-size: 18px;
    width: 100%;
    height: 20px;
    text-align: center;
    border: 1px solid red;
  }

  /* Search Input */
  input {
    border: 1px solid red;
    border-radius: 4px;
    display: none;
    width: 94%;
    margin-left: 10px;
    /* margin-right: 10px; */
    text-align: center;
  }

  /* Prices and Categories Container */
  .PricesFilterContainer,
  .CategoryFilterContainer {
    border: 1px solid #c9ccd1;
    border-radius: 4px;
    /* margin-top: 30px; */

    /* Prices Title */
    h6 {
      text-align: center;
      background: #c9ccd1;
    }

    /* List of filter items */
    ul {
      display: block;
      justify-content: center;
      /* margin-left: 5px; */

      div {
        label {
          margin-left: 5px;
          span {
            font-size: 12px;
            font-family: 'Poppins';
          }
        }
      }
    }
  }

  & > .PricesFilterContainer,
  .CategoryFilterContainer {
    margin-left: 2px;
  }

  @media (max-width: 1075px) {
    display: inline-flex;
    margin: 10px auto;
    width: 500px !important;
    justify-content: center;

    .CategoryFilterContainer {
      width: 200px;
    }

    .PricesFilterContainer,
    .CategoryFilterContainer {
      display: inline-block;
    }

    & > .PricesFilterContainer,
    .CategoryFilterContainer {
      margin-left: 20px;
    }
  }

  @media (max-width: 300px) {
    display: block;
    margin: 10px auto;
    width: 280px !important;
    justify-content: center;

    .CategoryFilterContainer {
      width: 275px !important;
    }

    .PricesFilterContainer,
    .CategoryFilterContainer {
      display: block;
      margin-left: 5px;
    }

    & > .PricesFilterContainer,
    .CategoryFilterContainer {
      margin-top: 20px;
    }
  }
`;
