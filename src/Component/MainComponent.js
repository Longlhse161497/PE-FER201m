import React, { Component } from "react";
import Detail from "./DetailComponent";
import { BATH_SHOWER } from "../Shared/bath_shower";
import { BEDDING } from "../Shared/bedding";
import { LIGHTING } from "../Shared/lighting";

class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Detail></Detail>
        );
    }
}

export default Main;