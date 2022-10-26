import React, { Component } from "react";
import { Card, CardImg, CardText, CardTitle } from "reactstrap";
import { BATH_SHOWER } from "../Shared/bath_shower";
import { BEDDING } from "../Shared/bedding";
import { LIGHTING } from "../Shared/lighting";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bath_shower: BATH_SHOWER,
            bedding: BEDDING,
            lighting: LIGHTING
        }
    }
    render() {
        const bath = this.state.bath_shower.map((bath, i) => {
            if (i === 0 && bath) {
                return (
                    <div>
                        <Card>
                            <CardImg width="100%" src={bath.image} alt={bath.name}></CardImg>
                            <CardTitle className="cardTitle">{bath.category}</CardTitle>
                            <CardText>{bath.name}</CardText>
                            <CardText>{bath.price}</CardText>
                        </Card>
                    </div>
                );
            }
        })
        const bedding = this.state.bedding.map((bed, i) => {
            if (i === 0 && bed) {
                return (
                    <div>
                        <Card>
                            <CardImg width="100%" src={bed.image} alt={bed.name}></CardImg>
                            <CardTitle className="cardTitle">{bed.category}</CardTitle>
                            <CardText>{bed.name}</CardText>
                            <CardText>{bed.price}</CardText>
                        </Card>
                    </div>
                );
            }
        })
        const lighting = this.state.lighting.map((light, i) => {
            if (i === 0 && light) {
                return (
                    <div>
                        <Card>
                            <CardImg width="100%" src={light.image} alt={light.name}></CardImg>
                            <CardTitle className="cardTilte">{light.category}</CardTitle>
                            <CardText>{light.name}</CardText>
                            <CardText>{light.price}</CardText>
                        </Card>
                    </div>
                );
            }
        })
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        {bath}
                    </div>
                    <div className="col-12 col-sm-4">
                        {bedding}
                    </div>
                    <div className="col-12 col-sm-4">
                        {lighting}
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;