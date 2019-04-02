import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {createMuiTheme} from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";


const theme = createMuiTheme({
    palette: {
        primary:{
            main: "#F44336"
        },
        secondary: {
            main: "#4CAF50"
        }

    }
});

class Root extends Component{

    render(){
        return(

            <MuiThemeProvider theme={theme}>
                <App/>
            </MuiThemeProvider>


        );

    }
}

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
