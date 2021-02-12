import styled from 'styled-components';

export const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;

  /* Title */
  h1 {
    color: #c91f37;
    display: flex;
    justify-content: center;
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
`;
