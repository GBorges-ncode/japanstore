import React from 'react';

import ReactFullpage from '@fullpage/react-fullpage';

import { Link } from 'react-router-dom';
import { AlternateEmail, Facebook, Instagram } from '@material-ui/icons';
import { Container } from './styles';

import pic1 from '../../assets/pic1.jpg';
import sushiPlate from '../../assets/sushiPlate.jpg';

const HomePage: React.FC = () => {
  return (
    <Container>
      <header>
        <h1>Japan Store</h1>
      </header>

      <ReactFullpage
        navigation
        slidesNavigation
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              {/* SECTION 1 */}
              <div className="section" id="section1">
                <img src={pic1} alt="Pagoda" />
                <div className="menuHolder">
                  <div className="menuSlider">
                    <Link to="/store" id="menuItem">
                      <h2>店舗</h2>
                    </Link>
                    <h1 id="menuOptionName">Store</h1>
                  </div>

                  <div className="menuSlider">
                    <button
                      type="button"
                      id="menuItem"
                      onClick={() => fullpageApi.moveTo(2, 0)}
                    >
                      <h2>レシピ</h2>
                    </button>
                    <h1 id="menuOptionName">Recipes</h1>
                  </div>

                  <div className="menuSlider">
                    <button
                      id="menuItem"
                      type="button"
                      onClick={() => fullpageApi.moveTo(3, 0)}
                    >
                      <h2>大凡</h2>
                    </button>
                    <h1 id="menuOptionName">About Us</h1>
                  </div>

                  <div className="menuSlider">
                    <button
                      type="button"
                      id="menuItem"
                      onClick={() => fullpageApi.moveTo(4, 0)}
                    >
                      <h2>連絡</h2>
                    </button>
                    <h1 id="menuOptionName">Contact</h1>
                  </div>
                </div>
              </div>
              {/* END SECTION 1 */}

              {/* SECTION 2 */}
              <div className="section" id="section2" data-anchor="section2">
                <div className="slide">
                  <img src={sushiPlate} alt="Sushi" />

                  <div className="menuHolder">
                    <h2>Recipes</h2>

                    <div className="menuSlider">
                      <Link to="/sushi" id="menuItem">
                        寿司
                      </Link>

                      <h1 id="menuOptionName">Sushi</h1>
                    </div>

                    <div className="menuSlider">
                      <Link to="/rice" id="menuItem">
                        白米
                      </Link>
                      <h1 id="menuOptionName">Rice</h1>
                    </div>

                    <div className="menuSlider">
                      <Link to="/soups" id="menuItem">
                        スープ
                      </Link>
                      <h1 id="menuOptionName">Soups</h1>
                    </div>

                    <div className="menuSlider">
                      <Link to="pasta" id="menuItem">
                        パスタ
                      </Link>
                      <h1 id="menuOptionName">Pasta</h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* END SECTION 2 */}

              {/* SECTION 3 */}
              <div className="section" id="section3">
                <div id="AboutContainer">
                  <h2>About Us</h2>

                  <p>
                    Welcome to Japan Store, your number one source for all asian
                    products. We&apos;re dedicated to providing you the very
                    best of japanese products, with an emphasis on utensils,
                    knives, food.
                  </p>
                  <br />
                  <p>
                    Founded in 2018 by Muto Arata, Japan Store has come a long
                    way from its beginnings in Tokyo. When Muto Arata first
                    started out, his passion for providing good products with
                    quality and affordable prices drove them to start their own
                    business.
                  </p>
                  <br />
                  <p>
                    We hope you enjoy our products as much as we enjoy offering
                    them to you. If you have any questions or comments, please
                    don&apos;t hesitate to contact us. Sincerely, Muto Arata.
                  </p>
                </div>
              </div>
              {/* END SECTION 3 */}

              {/* SECTION 4 */}
              <div className="section" id="section4">
                <div id="ContactHolder">
                  <div id="ContactContainer">
                    <h2>Contact Us</h2>

                    <div id="contactIcons">
                      <Instagram fontSize="large" />
                      <Facebook fontSize="large" />
                      <AlternateEmail />
                    </div>
                  </div>
                </div>
              </div>
              {/* END SECTION 4 */}
            </div>
          );
        }}
      />
    </Container>
  );
};

export default HomePage;
