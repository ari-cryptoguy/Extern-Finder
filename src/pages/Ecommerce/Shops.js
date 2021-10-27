import React, { Component } from 'react';
import { Container, Card, CardBody, Row, Col, Media } from "reactstrap";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Images
import img1 from "../../assets/images/companies/img-1.png";
import img2 from "../../assets/images/companies/img-2.png";
import img3 from "../../assets/images/companies/img-3.png";
import img4 from "../../assets/images/companies/img-4.png";
import img5 from "../../assets/images/companies/img-5.png";
import img6 from "../../assets/images/companies/img-6.png";
import img7 from "../../assets/images/companies/img-7.png";
import img8 from "../../assets/images/companies/img-8.png";

class Shops extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Ecommerce", link : "#" },
                { title : "Shops", link : "#" },
            ],
            shops : [
                { img : img1, name : "Nedick's", owner : "Wayne McClain", products : "86", balance : "12,456" },
                { img : img2, name : "Brendle's", owner : "David Marshall", products : "72", balance : "10,352" },
                { img : img3, name : "Tech Hifi", owner : "Katia Stapleton", products : "75", balance : "9,963" },
                { img : img4, name : "Lafayette", owner : "Andrew Bivens", products : "65", balance : "14,568" },
                { img : img5, name : "Packer", owner : "Mae Rankin", products : "82", balance : "16,445" },
                { img : img6, name : "Micro Design", owner : "Brian Correa", products : "71", balance : "11,523" },
                { img : img7, name : "Keeney's", owner : "Dean Odom", products : "66", balance : "13,478" },
                { img : img8, name : "Tech Hifi", owner : "John McLeroy", products : "58", balance : "14,654" },
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Shops" breadcrumbItems={this.state.breadcrumbItems} />

                        <Row>
                            {
                                this.state.shops.map((shop, key) =>
                                    <Col xl={3} sm={6} key={key}>
                                        <Card>
                                            <CardBody>
                                                <div className="text-center">
                                                    <img src={shop.img} alt="" className="avatar-sm mt-2 mb-4"/>
                                                    <Media body>
                                                        <h5 className="text-truncate"><Link to="#" className="text-dark">{shop.name}</Link></h5>
                                                        <p className="text-muted">
                                                            <i className="mdi mdi-account mr-1"></i> {shop.owner}
                                                        </p>
                                                    </Media>
                                                </div>

                                                <hr className="my-4"/>

                                                <Row className="text-center">
                                                    <Col xs={6}>
                                                        <p className="text-muted mb-2">Products</p>
                                                        <h5>{shop.products}</h5>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <p className="text-muted mb-2">Wallet Balance</p>
                                                        <h5>${shop.balance}</h5>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>
                            
                        <Row>
                            <Col xl={12}>
                                <div className="text-center my-3">
                                    <Link to="#" className="text-primary"><i className="mdi mdi-loading mdi-spin font-size-20 align-middle mr-2"></i> Load more </Link>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Shops;