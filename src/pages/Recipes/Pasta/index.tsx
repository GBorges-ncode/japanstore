import React from 'react';
import { Link } from 'react-router-dom';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import chickenudon from '../../../assets/Recipes/Pasta/chickenudon.png';
import udonnoodles from '../../../assets/Recipes/Pasta/udonnoodles.png';
import ramencarbonara from '../../../assets/Recipes/Pasta/ramencarbonara.png';
import yakiudon from '../../../assets/Recipes/Pasta/yakiudon.png';
import buttershoyu from '../../../assets/Recipes/Pasta/buttershoyu.png';
import mentaiko from '../../../assets/Recipes/Pasta/mentaiko.png';

import { Container } from './styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '40%',
      height: '100%',
      borderRadius: '4px',
    },
  }),
);

const Pasta: React.FC = () => {
  const classes = useStyles();

  const items = [
    {
      title: 'Chicken Udon',
      img: `${chickenudon}`,
      href: 'https://norecipes.com/chicken-udon/',
    },
    {
      title: 'Udon Noodles',
      img: `${udonnoodles}`,
      href: 'https://norecipes.com/homemade-udon-noodles/',
    },
    {
      title: 'Ramen Carbonara',
      img: `${ramencarbonara}`,
      href: 'https://norecipes.com/ramen-carbonara-recipe/',
    },
    {
      title: 'Yaki Udon',
      img: `${yakiudon}`,
      href: 'https://norecipes.com/yaki-udon-recipe/',
    },
    {
      title: 'Butter Shoyu Pasta',
      img: `${buttershoyu}`,
      href: 'https://norecipes.com/butter-soy-sauce-pasta/',
    },
    {
      title: 'Mentaiko Pasta',
      img: `${mentaiko}`,
      href: 'https://norecipes.com/creamy-mentaiko-pasta/',
    },
  ];

  return (
    <Container>
      <header>
        <nav>
          <h1>Pasta Recipes</h1>
          <Link to="/#section2" id="gobackButton">
            {' '}
            Go Back
          </Link>
        </nav>
      </header>

      <GridList cellHeight={180} className={classes.gridList} id="grid">
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div" />
        </GridListTile>
        {items.map(tile => (
          <GridListTile key={tile.img}>
            <a
              href={tile.href}
              id="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tile.img} alt={tile.title} />
            </a>

            <GridListTileBar
              style={{ textAlign: 'center', fontWeight: 600 }}
              title={tile.title}
            />
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
};

export default Pasta;
