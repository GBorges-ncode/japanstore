import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background: #171412;

  header {
    display: flex;
    z-index: 99;
    width: 100%;
    position: fixed;

    justify-content: space-between;
    align-items: center;

    padding-left: 10px;

    h1 {
      color: #c91f37;
      font-size: 50px;
      font-weight: 600px;
      font-family: 'Poppins';

      text-align: center;

      /* width: 90%; */
    }

    nav {
      padding-right: 20px;
      justify-content: space-between;
      /* width: 20%; */

      button {
        border: transparent;
        background: transparent;
        color: #fff;
        outline: none;
      }

      & > button {
        margin-left: 10px;
      }
    }
  }

  .fp-section.fp-table {
    display: block;
    height: 0;
  }

  #section1 {
    display: block;

    .fp-tableCell {
      height: 100%;
      width: 100%;

      display: flex;

      justify-content: center;
      align-items: center;
    }

    .menuHolder {
      display: block;

      width: 50%;

      .menuSlider {
        display: flex;
        justify-content: left;
        align-items: center;

        padding-left: 10%;
        /* float: right; */

        h2 {
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          /* color: #c3272b; */
          color: #c91f37;

          width: 280px;

          font-size: 80px;
          font-weight: 600;
        }

        a {
          text-decoration: none;
        }

        #menuItem {
          display: inline-block;

          width: 280px;

          :hover {
            cursor: pointer;
          }

          :after {
            display: block;
            content: '';
            margin-left: 30px;
            border-bottom: 3px solid #fff;
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
          }

          :hover:after {
            transform: scaleX(1);
            transform-origin: 0% 100%;
          }
        }

        #menuOptionName {
          display: inline-block;
          opacity: 0;
          font-size: 60px;
          margin-left: 30px;
          color: #fff;
        }

        #menuItem:after + #menuOtionName {
          display: block;
          content: '';
          border-bottom: 3px solid #71b280;
          transform: scaleX(0);
          transition: transform 250ms ease-in-out;
        }

        #menuItem:hover + #menuOptionName {
          opacity: 1;
          -webkit-transition: opacity 0.25s ease-in-out 0s;
          transition: opacity 0.25s ease-in-out 0s;
        }
      }
    }

    #imgHolder {
      display: flex;
      opacity: 0.5;

      /* justify-content: right; */
      align-items: center;

      width: 900px;
      height: 100%;

      /* margin-right: 20px; */

      z-index: 99;
      position: relative;

      img {
        width: 900px;
        height: 100%;

        background: transparent;
      }
    }
  } /* END SECTION 1 */

  #section2 {
    display: block;

    .fp-tableCell {
      height: 100%;
      width: 100%;

      display: flex;

      justify-content: flex-start;
      align-items: center;
    }

    .fp-section.fp-table {
      display: block;
      height: 0;
    }

    #imgHolder {
      display: flex;

      /* justify-content: right; */
      /* align-items: right; */
      width: 100%;
      height: 100%;

      /* margin-right: 20px; */

      z-index: 99;
      position: relative;

      img {
        width: 100%;
        height: 100%;

        background: transparent;
      }
    }

    .slide {
      display: flex;
      /* align-items: flex-start; */

      .menuHolder {
        display: block;

        height: 50%;
        width: 100%;

        h2 {
          color: #c3272b;
          font-size: 40px;

          display: flex;

          justify-content: flex-end;

          margin-right: 20%;
          margin-top: -50px;
          margin-bottom: 50px;
        }

        .menuSlider {
          display: flex;

          flex-direction: row-reverse;

          /* justify-content: space-between; */
          align-items: center;

          /* width: 500px; */

          button {
            border: 1px solid red;
            color: #fff;

            display: flex;
            justify-content: center;
            align-items: center;

            background: #c3272b;
            border: transparent;
            border-radius: 4px;

            text-align: center;
            font-weight: 600;

            margin-right: 70px;

            height: 60px;
            width: 100px;
          }

          #menuItem:after + #menuOtionName {
            display: block;
            content: '';
            border-bottom: 3px solid #71b280;
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
          }

          #menuItem:hover + #menuOptionName {
            opacity: 1;
            -webkit-transition: opacity 0.25s ease-in-out 0s;
            transition: opacity 0.25s ease-in-out 0s;
          }

          h1 {
            display: flex;

            opacity: 0;
            font-size: 50px;
            /* margin-right: 0; */
            margin-right: 20px;
            color: #fff;
          }
        }
      }

      img {
        opacity: 0.7;

        z-index: 99;
        position: relative;

        margin-left: 20px;
      }
    }
  }

  #section3 {
  }
`;
