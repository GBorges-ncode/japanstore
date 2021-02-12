import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  /* background: #ebf6f7; */
  /* background: #171412; */
  background: #fff;

  header {
    display: flex;
    width: 100%;
    /* z-index: 99; */
    /* position: fixed; */
    /* height: 60px; */

    justify-content: space-between;
    align-items: center;

    background: #171412;

    h1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;

      color: #ebf6f7;

      width: 100%;
      height: 100%;

      nav {
        display: flex;
        width: 20%;
        height: 100%;

        justify-content: flex-end;
        align-items: center;

        #cartButton {
          /* border: 1px solid white; */
          outline: none;
        }

        #accountButton {
          /* border: 1px solid white; */
          outline: none;
        }

        & > button {
          margin-left: 10px;
        }
      }
    }
  }
`;

export const ProductsContainer = styled.div`
  display: inline-flex;
  width: 100%;
  height: auto;
`;

export const FilterCol = styled.section`
  display: inline-block;
  border: 1px solid #c9ccd1;
  padding-top: 0;
  margin-top: 40px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 4px;

  /* flex-grow: 1; */
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
    width: 100%;

    text-align: center;
  }

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
`;

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
`;

export const StyledButton = styled(IconButton)`
  display: flex;
  /* position: fixed; */
  z-index: 100;
  right: 20px;
  /* top: 20px; */

  /* border: 1px solid red; */
`;
