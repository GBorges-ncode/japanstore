import styled from 'styled-components';

export const Container = styled.div`
  background: #171412;
  height: 100vh !important;

  header {
    display: flex;
    z-index: 99;
    width: 100%;
    position: fixed;

    justify-content: space-between;
    align-items: center;

    padding-left: 10px;

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;

      /* height: 60px; */
      width: 100%;
      margin: 10px auto;

      h1 {
        color: #c91f37;
        font-size: 50px;
        font-weight: 600px;
        font-family: 'Poppins';

        text-align: center;
      }

      #gobackButton {
        display: flex;
        justify-content: center;
        align-items: center;
        border: transparent;
        border-radius: 4px;
        width: 80px;
        height: 40px;
        background: #c91f37;
        color: #fff;
        outline: none;
        text-decoration: none;
        text-align: center;
        margin-right: 10px;
      }
    }
  }

  /* Grid Container */
  .MuiGridList-root {
    margin: auto !important;
  }

  /* Grid items */
  .MuiGridListTile-tile {
    margin-top: 10px;
    #link {
      display: flex;
      margin: 0 auto;
      height: 100% !important;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  /* Grid Items Title */
  .MuiGridListTileBar-title {
    color: #fff;
    font-size: 20px;
    width: 100% !important;

    :hover {
      cursor: pointer;
    }
  }

  /* ***************************************************************** */
  @media (max-width: 920px) {
    /* Grid Container */
    .MuiGridList-root {
      margin: 0 auto;
      padding: 0;
      width: 60%;
    }

    .MuiGridListTile-tile {
      display: inline-flex !important;
    }

    #gobackButton {
      width: 80px;
    }
  }

  @media (max-width: 750px) {
    /* Grid Container */
    .MuiGridList-root {
      margin: 0 auto;
      padding: 0;
      width: 70%;
    }
    #gobackButton {
      width: 80px !important;
    }
  }

  @media (max-width: 600px) {
    /* Grid Container */
    .MuiGridList-root {
      margin: 0 auto;
      padding: 0;
      width: 75%;
    }

    #gobackButton {
      width: 80px !important;
    }
  }
`;
