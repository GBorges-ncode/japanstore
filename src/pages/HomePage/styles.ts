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

    justify-content: center;
    align-items: center;

    h1 {
      color: #c91f37;
      font-size: 50px;
      font-weight: 600;
      font-family: 'Poppins';

      text-align: center;
    }

    nav {
      padding-right: 20px;
      justify-content: space-between;

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

  #fp-nav-down.fp-right {
    border: 1px solid red !important;
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
      position: absolute;
      width: 100%;

      .menuSlider {
        display: flex;
        justify-content: left;
        align-items: center;

        padding-left: 10%;

        h2 {
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
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

          border: none;
          background: none;
          outline: none;

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

        #menuItem:after + #menuOptionName {
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

    img {
      width: 100% !important;
      height: 100% !important;
      background: transparent;
      opacity: 0.5;
    }

    /* ***************************************************************** */
    @media (max-width: 700px) {
      .menuHolder {
        display: block;
        position: absolute;
        width: 100%;

        .menuSlider {
          display: flex;
          justify-content: left;
          align-items: center;

          padding-left: 2%;

          h2 {
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            color: #c91f37;

            /* width: 280px; */

            font-size: 70px;
            font-weight: 600;
          }

          a {
            text-decoration: none;
          }

          #menuItem {
            display: inline-block;
            border: none;
            background: none;
            outline: none;

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
            font-size: 50px;
            margin-left: 30px;
            color: #fff;
          }

          #menuItem:after + #menuOptionName {
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
    }

    @media (max-width: 570px) {
      .menuHolder {
        display: block;
        position: absolute;
        width: 100%;

        .menuSlider {
          display: flex;
          justify-content: left;
          align-items: center;

          h2 {
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            color: #c91f37;

            font-size: 50px;
            font-weight: 600;
          }

          a {
            text-decoration: none;
          }

          #menuItem {
            display: inline-block;
            width: 200px;

            border: none;
            background: none;
            outline: none;

            :hover {
              cursor: pointer;
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

          #menuOptionName {
            display: inline-block;
            opacity: 0;
            font-size: 30px;
            color: #fff;
          }

          #menuItem:after + #menuOptionName {
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

    .slide {
      display: flex;

      .menuHolder {
        display: block;

        position: absolute;
        margin: 0 auto;
        width: 100% !important;
        z-index: 99;

        h2 {
          color: #c91f37;
          font-size: 40px;
          font-weight: 600;

          display: flex;

          justify-content: flex-end;
          padding-right: 45px !important;
          margin-top: -50px;
          margin-bottom: 50px;
        }

        .menuSlider {
          display: flex;

          flex-direction: row-reverse;

          align-items: center;

          // Link items
          a {
            border: 1px solid red;
            color: #fff;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;

            background: #c91f37;
            border: transparent;
            border-radius: 4px;

            text-align: center;
            font-weight: 600;

            margin-right: 70px;

            height: 60px;
            width: 100px;
          }

          /* #menuItem:after + #menuOptionName {
            display: block;
            content: '';
            border-bottom: 3px solid #71b280;
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
          } */

          #menuItem:hover + #menuOptionName {
            opacity: 1;
            -webkit-transition: opacity 0.25s ease-in-out 0s;
            transition: opacity 0.25s ease-in-out 0s;
          }

          h1 {
            display: flex;
            opacity: 0;
            font-size: 50px;
            margin-right: 20px;
            color: #fff;
          }
        }
      }

      img {
        opacity: 0.5;
        display: flex;
        align-items: center;

        z-index: 99;
        position: relative;

        width: 100%;
      }
    }

    /* ***************************************************************** */
    @media (max-width: 1300px) {
      header {
        position: absolute;
        margin: 0 auto;
        width: 100% !important;
      }

      .slide {
        display: flex;

        img {
          margin: 0 auto;
          width: 100% !important;
          height: 100% !important;
          background: transparent;
          opacity: 0.3;
          position: absolute !important;
        }

        .menuHolder {
          display: block;

          height: 50%;
          width: 100%;
          margin: 0 auto;
          width: 100% !important;
          z-index: 99;

          h2 {
            color: #c91f37;
            font-size: 40px;
            font-weight: 600;
            width: 100%;
            padding-right: 45px !important;
          }

          .menuSlider {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;

            // Link items
            a {
              border: 1px solid red;
              color: #fff;
              text-decoration: none;
              display: flex;
              justify-content: center;
              align-items: center;

              background: #c91f37;
              border: transparent;
              border-radius: 4px;

              text-align: center;
              font-weight: 600;

              margin-right: 70px;

              height: 60px;
              width: 100px;
            }

            #menuItem:after + #menuOptionName {
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
              margin-right: 20px;
              color: #fff;
            }
          }
        }
      }
    } //END Media Queries
  } //END SECTION 2

  #section3 {
    display: block;

    #AboutContainer {
      width: auto;
      margin: 0 30%;

      text-align: center;

      h2 {
        display: flex;
        justify-content: center;
        text-align: center;
        color: #c91f37;

        font-weight: 600;
        font-family: 'Poppins';

        margin-bottom: 5%;
      }

      p {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: justify;
        margin-top: 0.1%;

        color: #fff;

        font-weight: 400;
        font-family: 'Poppins';
      }
    }

    /* ***************************************************************** */
    @media (max-width: 1080px) {
      #AboutContainer {
        width: auto;
        margin: 0 25%;
      }
    }

    @media (max-width: 800px) {
      #AboutContainer {
        width: auto;
        margin: 0 20%;
      }
    }

    @media (max-width: 600px) {
      #AboutContainer {
        width: auto;
        margin: 0 10%;
        p {
          font-size: 15px;
        }
      }
    }
  } //END SECTION 3

  #section4 {
    display: flex;
    width: 100%;
    height: 100%;

    #ContactHolder {
      width: 100% !important;
      height: 100% !important;
      display: flex;
      justify-content: center;
      align-items: center;

      #ContactContainer {
        display: block;
        height: 15%;
        width: auto;

        h2 {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: #c91f37;
          font-weight: 600;
        }

        #contactIcons {
          display: flex;
          justify-content: center !important;
          margin: 25px auto;

          svg {
            text-align: center;
            color: #fff;

            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;

            font-size: 60px;

            :hover {
              color: #c91f37;
              cursor: pointer;
            }
          }
        }
      }
    }
  } // END SECTION 4
`;
