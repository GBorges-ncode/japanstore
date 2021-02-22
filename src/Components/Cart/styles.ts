import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Poppins', 'Roboto Slab', serif;
  width: 500px;
  padding: 20px;

  /* Title */
  h1 {
    color: #c91f37;
    display: flex;
    justify-content: space-between;
  }

  svg {
    float: right;
    display: flex;
    margin: 0 auto;

    :hover {
      cursor: pointer;
    }
  }

  /* Empty Cart */
  #cartEmptyInfo {
    text-align: center;
    margin-top: 10px;
    background: #171412;
    color: #fff;
  }

  #cartFooter {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;

    /* Total */
    h2 {
      margin-top: 10px;
      color: #171412;
      justify-content: right;
      text-align: end;
    }

    /* Checkout Button */
    button {
      border: none;
      background: #171412;
      color: #c91f37;
      width: 100px;
      font-weight: 600;

      border-radius: 4px;
    }
  }

  @media (max-width: 300px) {
    display: inline-block;
    justify-content: space-between;

    border: 1px solid orange;
  }

  /* 375px Screens - Container */
  @media (max-width: 375px) {
    padding: 10px;
    width: 300px;

    /* Title */
    h1 {
      color: #c91f37;
      display: flex;
      justify-content: center;
      font-size: 28px;
    }

    /* Empty Cart */
    #cartEmptyInfo {
      text-align: center;
      margin-top: 10px;
      background: #171412;
      color: #fff;

      font-size: 24px;
    }

    #cartFooter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 10px;

      /* Total */
      h2 {
        margin-top: 10px;
        color: #171412;
        justify-content: right;
        text-align: end;
        font-size: 24px;
      }

      /* Checkout Button */
      button {
        border: none;
        background: #171412;
        color: #c91f37;
        /* width: 80px; */
        height: 40px;
        font-weight: 600;
        font-size: 14px;
        border-radius: 4px;
      }
    }
  }
`;
