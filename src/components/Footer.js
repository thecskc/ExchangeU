import React, {Component} from "react";
import "./Footer.css";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import {Link, Router} from "@reach/router";

class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <footer>
                <p
                    style={{
                        color: "white",
                        textAlign: "center",
                        verticalAlign: "middle"
                    }}
                >
                    © 2019 Exchange. All rights reserved.

                </p>

                <p
                    style={{
                        color: "white",
                        textAlign: "center",
                        verticalAlign: "middle"
                    }}
                >
                    Contact us - info@exchangetheapp.com

                </p>
            </footer>
        );
    }
}

export default Footer;