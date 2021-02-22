import React from 'react';
import { Link } from 'react-router-dom';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import asari from '../../../assets/Recipes/Soups/asari.png';
import tonkotsu from '../../../assets/Recipes/Soups/tonkotsu.png';
import kabocha from '../../../assets/Recipes/Soups/kabocha.png';
import kenchinjiru from '../../../assets/Recipes/Soups/kenchinjiru.png';
import miso from '../../../assets/Recipes/Soups/miso.png';
import shiromiso from '../../../assets/Recipes/Soups/shiromiso.png';

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

const Soups: React.FC = () => {
  const classes = useStyles();

  const items = [
    {
      title: 'Asari Miso Soup',
      img: `${asari}`,
      href: 'https://norecipes.com/asari-miso-soup-recipe/',
    },
    {
      title: 'Tonkotsu Miso Ramen',
      img: `${tonkotsu}`,
      href: 'https://norecipes.com/tonkotsu-miso-ramen-recipe/',
    },
    {
      title: 'Kabocha Squash Soup',
      img: `${kabocha}`,
      href: 'https://norecipes.com/kabocha-squash-soup/',
    },
    {
      title: 'Kenchinjiru',
      img: `${kenchinjiru}`,
      href: 'https://norecipes.com/kenchinjiru-recipe/',
    },
    {
      title: 'Miso Soup',
      img: `${miso}`,
      href: 'https://norecipes.com/miso-soup-recipe/',
    },
    {
      title: 'Shiromiso Tonjiru',
      img: `${shiromiso}`,
      href: 'https://norecipes.com/shiromiso-tonjiru-pork-white-miso-soup/',
    },
  ];

  return (
    <Container>
      <header>
        <nav>
          <h1>Soups Recipes</h1>
          <Link to="/#section2" id="gobackButton">
            {' '}
            Go Back
          </Link>
        </nav>
      </header>

      <GridList cellHeight={180} className={classes.gridList} id="grid">
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
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

export default Soups;
