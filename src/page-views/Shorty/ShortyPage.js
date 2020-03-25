import React , { Fragment } from 'react';
import clsx from 'clsx';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import image from '../../assets/images/mario-cruz-unsplash.jpg';
import PageViewsShortyStyles from "../../assets/jss/Shorty/PageViewsShortyStyles";

const useStyles = PageViewsShortyStyles;

const ShortyPage = (props) => {

    const classes = useStyles();

    return (
      <Fragment>
          <div style={{
              backgroundImage: "url(" + image + ")",
              backgroundSize: "cover",
              backgroundPosition: "top center"
          }}>
          <Grid container
                alignItems="center"
                justify="center"
                style={{ minHeight: "100vh" }}
          >
              <Grid item xs={10}>
                  <Card>
                      <CardContent>
                          <Typography variant="h4" gutterBottom component="h3">
                              URL Shorty
                          </Typography>
                          <Typography variant="body1" component="p" gutterBottom>
                              To get started, enter a URL you would like to shorten
                          </Typography>
                          <div className={classes.textField}>
                              <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                                  <TextField
                                      required
                                      className={classes.margin}
                                      margin="normal"
                                      label="PASTE LONG URL"
                                      placeholder="E.g. http://localhost:3000/some/super/long/uniform/resource/locator"
                                      id="outlined-required"
                                      variant="outlined"
                                      fullWidth
                                  />
                              </FormControl>
                          </div>
                      </CardContent>
                      <CardActions>
                          <Button variant="contained" className={classes.loginButton}>
                              {/*<Link href={'/home'}>*/}
                                  <a style={{"textDecoration": "none", "color":"white"}}>
                                      SHORTIFY ME!
                                  </a>
                              {/*</Link>*/}
                          </Button>
                      </CardActions>
                  </Card>
              </Grid>
          </Grid>
          </div>
      </Fragment>
    );
};

export default ShortyPage;