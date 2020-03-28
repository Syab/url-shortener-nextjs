import React from "react";
import { makeStyles } from "@material-ui/core";

const PageViewsShortyStyles = makeStyles( theme => ({
    textField: {
        marginTop : theme.spacing(1),
    },
    margin: {
        marginTop: theme.spacing(2),
    },
    shortifyButton: {
        margin: theme.spacing(1),
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
        width: '50%',
    },
    clearButton: {
        margin: theme.spacing(1),
        background: 'linear-gradient(45deg, #50A7C2 30%, #B7F8DB 90%)',
        color: 'white',
        width: '50%',
    },

}));

export default PageViewsShortyStyles;