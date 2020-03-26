import React , { Fragment, useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import Link from "next/link";
// import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import { API_ROOT } from "../../api/apiroot";
import image from '../../assets/images/mario-cruz-unsplash.jpg';
import PageViewsShortyStyles from "../../assets/jss/Shorty/PageViewsShortyStyles";

const useStyles = PageViewsShortyStyles;

const ShortyPage = (props) => {

    const classes = useStyles();

    const API = `${API_ROOT}/shortUrl/add-og-url`;
    const preventDefault = event => event.preventDefault();
    const [ longUrl, setLongUrl ] = useState('');
    const [ shortUrl, setShortUrl ] = useState('');
    const [ value, setValue ] =useState('');

    let addLongUrl = {
        "longUrl" : longUrl
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(API,addLongUrl)
            .then((response) => {
                const resStatus = response.status;
                console.log(response);
                if (resStatus === 201) {
                    setShortUrl(response.data.shortUrl);
                }
            })
            .catch( err => console.log(err));
    };

    const handleResetState = () => {
        setLongUrl('');
        setShortUrl('');
        // setValue('');
    };

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
                              Shortify URL
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
                                      // value={value}
                                      onChange={e => setLongUrl(e.target.value)}
                                  />
                              </FormControl>
                          </div>
                      </CardContent>
                      <CardActions>
                          <Button variant="contained"
                                  className={classes.clearButton}
                                  onClick={handleResetState}
                          >
                              CLEAR FORM
                          </Button>
                          <Button variant="contained"
                                  className={classes.shortifyButton}
                                  onClick={handleSubmit}
                          >
                              SHORTIFY ME!
                          </Button>
                      </CardActions>
                      <CardContent>
                          <Typography>
                          <Link href={shortUrl}>
                              {shortUrl}
                          </Link>
                          </Typography>
                      </CardContent>
                  </Card>
              </Grid>
          </Grid>
          </div>
      </Fragment>
    );
};

export default ShortyPage;