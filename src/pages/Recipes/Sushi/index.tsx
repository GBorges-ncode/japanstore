import React from 'react';
import { Link } from 'react-router-dom';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

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
      img:
        'https://sushishop.com/wp-content/uploads/2019/07/NIGIRI_SASHIMI_MAGURO_.png',
      href: 'https://japanfoodstyle.com/nigiri-sushi-recipe/',
    },
    {
      title: 'Uramaki',
      img:
        'https://gohansc.com.br/wp-content/uploads/2018/01/pecas_0001s_0007_uramaki_skin.png',
      href: 'https://www.rotinrice.com/uramaki-inside-out-roll/',
    },
    {
      title: 'Hosomaki',
      img:
        'https://static.takeaway.com/images/restaurants/bg/O73535N1/products/hosomakisiomga.png',
      href: 'https://www.rotinrice.com/hosomaki-thin-sushi-rolls/',
    },
    {
      title: 'Futomaki',
      img:
        'https://lh3.googleusercontent.com/proxy/LwIUCLhbUd-JP-HeLK2gJAPs4lbnc_bDBlMXIy5gdzTQTiVjNus5B1jZF_f6HCJyT4LGOX0tCGcE8W34G87HfB9Klq1IPSekqdlSYgarVt8yxNeDzQ',
      href: 'https://www.rotinrice.com/futomaki-thick-sushi-rolls/',
    },
    {
      title: 'Gunkan Maki',
      img:
        'https://static.thuisbezorgd.nl/images/restaurants/nl/N100N37/products/14-tonijn-gunkan-per-stuk.png',
      href: 'https://cookingwithdog.com/recipe/gunkanmaki/',
    },
    {
      title: 'Temaki',
      img:
        'https://lh3.googleusercontent.com/proxy/IzTcliVJXS4tdehByUzPPQIINmjQ1Xc-HSDhAh5K89pMhj30wS0MFhN3gv-UIsguNzfpkVjtQGeqX7ocME3N5bhBDJ_4I7gfq7TjF1B19hdOie0ukflbMa3p2QfGA9VSz6ZYxFIlQ6WG',
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
