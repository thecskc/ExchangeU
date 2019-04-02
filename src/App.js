import React, { Component } from "react";
import { Link, Router } from "@reach/router";

import Coach from "./components/Coach";
import Form from "./components/FormContainer";
import Navbar from "./components/Navbar";
import Grid from "@material-ui/core/Grid/Grid";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";




class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
          <Grid container spacing={24}>
              <AppBar position="static">
                  <Toolbar variant="dense">
                      <IconButton color="inherit" aria-label="Menu">

                      </IconButton>
                      <Typography variant="h6" color="inherit">
                          Exchange
                      </Typography>
                  </Toolbar>
              </AppBar>
            <Router>
              <Coach path="/" />
              <Form path="/appointment-form/:coachId" />
            </Router>
          </Grid>

    );
  }
}

export default App;
