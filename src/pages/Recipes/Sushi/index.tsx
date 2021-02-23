import React from 'react';
import { Link } from 'react-router-dom';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import nigiri from '../../../assets/Recipes/Sushi/nigiri.png';
import uramaki from '../../../assets/Recipes/Sushi/uramaki.png';
import hosomaki from '../../../assets/Recipes/Sushi/hosomaki.png';
import futomaki from '../../../assets/Recipes/Sushi/futomaki.png';
import gunkanmaki from '../../../assets/Recipes/Sushi/gunkanmaki.png';
import temaki from '../../../assets/Recipes/Sushi/temaki.png';

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

const Sushi: React.FC = () => {
  const classes = useStyles();

  const items = [
    {
      title: 'Nigiri',
      img: `${nigiri}`,
      href: 'https://japanfoodstyle.com/nigiri-sushi-recipe/',
    },
    {
      title: 'Uramaki',
      img: `${uramaki}`,
      href: 'https://www.rotinrice.com/uramaki-inside-out-roll/',
    },
    {
      title: 'Hosomaki',
      img: `${hosomaki}`,
      href: 'https://www.rotinrice.com/hosomaki-thin-sushi-rolls/',
    },
    {
      title: 'Futomaki',
      img: `${futomaki}`,
      href: 'https://www.rotinrice.com/futomaki-thick-sushi-rolls/',
    },
    {
      title: 'Gunkan Maki',
      img: `${gunkanmaki}`,
      href: 'https://cookingwithdog.com/recipe/gunkanmaki/',
    },
    {
      title: 'Temaki',
      img: `${temaki}`,
      href: 'https://norecipes.com/temaki-sushi/',
    },
  ];

  return (
    <Container>
      <header>
        <nav>
          <h1>Sushi Recipes</h1>
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

export default Sushi;
