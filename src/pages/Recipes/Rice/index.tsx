import React from 'react';
import { Link } from 'react-router-dom';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import friedRice from '../../../assets/Recipes/Rice/friedRice.png';
import salmonRice from '../../../assets/Recipes/Rice/salmonRice.png';
import yakimeshi from '../../../assets/Recipes/Rice/yakimeshi.png';
import hayashi from '../../../assets/Recipes/Rice/hayashi.png';
import matsutake from '../../../assets/Recipes/Rice/matsutake.png';
import soboro from '../../../assets/Recipes/Rice/soboro.png';

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

const Rice: React.FC = () => {
  const classes = useStyles();

  const items = [
    {
      title: 'Japanese Fried Rice',
      img: `${friedRice}`,
      href: 'https://norecipes.com/curry-fried-rice/',
    },
    {
      title: 'Japanese Salmon Rice',
      img: `${salmonRice}`,
      href: 'https://www.rotinrice.com/salmon-fried-rice/',
    },
    {
      title: 'Yakimeshi',
      img: `${yakimeshi}`,
      href: 'https://norecipes.com/yakimeshi-japanese-fried-rice/',
    },
    {
      title: 'Hayashi Rice',
      img: `${hayashi}`,
      href: 'https://norecipes.com/hayashi-rice/',
    },
    {
      title: 'Matsutake Gohan',
      img: `${matsutake}`,
      href: 'https://norecipes.com/matsutake-gohan/',
    },
    {
      title: 'Soboro Don',
      img: `${soboro}`,
      href: 'https://norecipes.com/soboro-don-chicken-rice-bowl/',
    },
  ];

  return (
    <Container>
      <header>
        <nav>
          <h1>Rice Recipes</h1>
          <Link to="/#section2" id="gobackButton">
            {' '}
            Go Back
          </Link>
        </nav>
      </header>

      <GridList cellHeight={180} className={classes.gridList} id="grid">
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }} />
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

export default Rice;
