import styled from 'styled-components';

export const ProductsCard = styled.span`
  width: 240px;
  height: 260px;
  border-radius: 4px;

  background: #333;

  display: block;

  /* Item Title */
  h3 {
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 20px;
    color: #fff;

    margin-bottom: 10px;
    margin-top: 10px;
  }

  /* Item Image */
  img {
    width: 130px;
    height: 120px;
    margin: 0 auto;

    display: flex;
    justify-content: center;

    border-radius: 4px;

    margin-bottom: 10px;
  }

  /* Item Description */
  h5 {
    display: flex;
    justify-content: center;
    font-size: 13px;
    color: #fff;

    margin-bottom: 5px;
  }

  /* Item Price */
  h6 {
    display: flex;
    justify-content: center;
    color: #fff;

    margin-bottom: 10px;
  }

  /* Buttom Add To Cart */
  button {
    display: flex;
    justify-content: center;
    outline: none;

    background: #c91f37;
    color: #fff;
    border-radius: 4px;
    border: none;

    width: 150px;

    margin: 0 auto;
  }
`;
