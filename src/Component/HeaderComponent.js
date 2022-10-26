import React, { Component } from "react";

function message() {
    alert("this function is building")
}

class Header extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid header">
                    <div className="row">
                        <span className="col-4 col-sm-3 d-flex justify-content-start" href="/"><img height="30" src='assets/images/logo.png' alt='logo'></img></span>
                        <span className="col-8 col-sm-9 d-flex justify-content-end">
                            <button onClick={message}><img src="assets/images/shoppingcart.jfif" height="30" alt="cart"></img></button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;