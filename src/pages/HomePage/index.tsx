/* eslint-disable func-names */
import React from 'react';

import ReactFullpage from '@fullpage/react-fullpage';

import { Link } from 'react-router-dom';
import { Container } from './styles';

// import {} from 'react-bootstrap';

import pic1 from '../../assets/pic1.jpg';
import sushi2 from '../../assets/sushi2.jpg';
import sushi3 from '../../assets/sushi3.png';
import makisushi from '../../assets/makisushi.png';

const HomePage: React.FC = () => {
  return (
    <Container>
      <header>
        <h1>Store</h1>

        <nav>
          <button type="submit">Home</button>
          <button type="submit">Store</button>
          <button type="submit">About</button>
          <button type="submit">Contact</button>
        </nav>
      </header>

      <ReactFullpage
        navigation
        slidesNavigation
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section" id="section1">
                <div className="menuHolder">
                  <div className="menuSlider">
                    <Link to="/store" id="menuItem">
                      <h2>店舗</h2>
                    </Link>
                    <h1 id="menuOptionName">Store</h1>
                  </div>

                  <div className="menuSlider">
                    <Link to="/" id="menuItem">
                      <h2>レシピ</h2>
                    </Link>
                    {/* <h2 id="menuItem">レシピ</h2> */}
                    <h1 id="menuOptionName">Recipes</h1>
                  </div>

                  <div className="menuSlider">
                    <Link to="/" id="menuItem">
                      <h2>大凡</h2>
                    </Link>
                    {/* <h2 id="menuItem">大凡</h2> */}
                    <h1 id="menuOptionName">About Us</h1>
                  </div>

                  <div className="menuSlider">
                    <Link to="/" id="menuItem">
                      <h2>連絡</h2>
                    </Link>
                    {/* <h2 id="menuItem">連絡</h2> */}
                    <h1 id="menuOptionName">Contact</h1>
                  </div>
                </div>

                <div id="imgHolder">
                  <img src={pic1} alt="Pagoda" />
                </div>
              </div>

              <div className="section" id="section2">
                <div className="slide">
                  <img src={makisushi} alt="Sushi" />

                  <div className="menuHolder">
                    <h2>Recipes</h2>

                    <div className="menuSlider">
                      <button type="submit" id="menuItem">
                        寿司
                      </button>
                      <h1 id="menuOptionName">Sushi</h1>
                    </div>

                    <div className="menuSlider">
                      <button type="submit" id="menuItem">
                        刺身
                      </button>
                      <h1 id="menuOptionName">Sashimi</h1>
                    </div>

                    <div className="menuSlider">
                      <button type="submit" id="menuItem">
                        スープ
                      </button>
                      <h1 id="menuOptionName">Soups</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section" id="section3" />
            </div>
          );
        }}
      />
    </Container>
  );
};

export default HomePage;
