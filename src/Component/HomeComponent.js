import React, { Component } from "react";
import Dashboard from "./DashboardComponent";
import Header from "./HeaderComponent";
import Main from "./MainComponent";

class Home extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Header></Header>
                <Dashboard></Dashboard>
                <Main></Main>
            </div>
        );
    }
}

export default Home;