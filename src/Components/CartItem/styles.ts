import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Poppins';
  border-bottom: 1px solid #c91f37;
  padding-bottom: 20px;
  padding-top: 20px;

  /* Cart Item Data */
  div {
    flex: 1;
  }
  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  /* Item Image */
  img {
    max-width: 140px;
    max-height: 140px;
    /* object-fit: cover; */
    margin-left: 40px;
    /* border: 1px solid #171412; */
  }

  /* Item Name */
  h4 {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  /* Item Description */
  h6 {
    display: flex;
    color: #999;
    justify-content: center;
  }
`;
