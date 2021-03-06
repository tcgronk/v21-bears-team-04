import React from 'react';
import { createUseStyles } from 'react-jss';
import { Typography } from '../../../components/Typography';
import { Link } from 'react-router-dom';


export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.detail}>
          <div>
            <Typography variant="h5">FitX</Typography>
            <Typography>Social Fitness App</Typography>
          </div>

          <div className={classes.description}>
            <Typography variant="body2">
              This app is designed for people who are ready to make themselves
              better!
            </Typography>
          </div>
        </div>

        <div className={classes.links}>
          <ul>
            <Typography variant="h6">Product</Typography>
            <Link to='/blog'><li className={classes.link}>Blog</li></Link>
            <Link to='/pricing'><li className={classes.link}>Prices</li></Link>
          </ul>

          <ul>
            <Typography variant="h6">Company</Typography>
            <Link to='/about'><li className={classes.link}>About Us</li></Link>
            <Link to='/contacts'><li className={classes.link}>Contacts</li></Link>
          </ul>
          <ul>
            <Typography variant="h6">Legal</Typography>
            <Link to='/privacy'><li className={classes.link}>Privacy Policy</li></Link>
          </ul>
        </div>
      </div>

      <Typography className={classes.copyright} variant="overline">
        All rights reserved by FitX
      </Typography>
    </div>
  );
};

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  detail: {
    maxWidth: '400px',
    marginRight: theme.spacing(3),
  },
  description: {
    marginTop: theme.spacing(2),
  },
  links: {
    '& > ul': {
      margin: {
        top: theme.spacing(2),
        right: '6vw',
        bottom: theme.spacing(2),
        left: 0,
      },
      ...theme.typography.body2,
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  link: {
    '&:hover':{
      color: '#e8a66a'
    }
  },
  copyright: {
    fontSize: theme.typography.pxToRem(8),
    opacity: 0.5,
  },
});

const useStyles = createUseStyles(styles, { name: 'footer' });
