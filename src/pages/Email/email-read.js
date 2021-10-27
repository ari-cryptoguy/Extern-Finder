import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Media, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Components
import EmailSidebar from "./email-sidebar";
import EmailToolBar from "./email-toolbar";

//Import Image
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";

class EmailRead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Email", link : "#" },
                { title : "Read Email", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Read Email" breadcrumbItems={this.state.breadcrumbItems} />

                        <Row>
                            <Col xs={12}>
                                
                                {/* left sidebar */}
                                <EmailSidebar/>

                                
                                <div className="email-rightbar mb-3">

                                    <Card>
                                        {/* email toolbar */}
                                        <EmailToolBar/>

                                        <CardBody>
                                            <Media className="mb-4">
                                                <img className="d-flex mr-3 rounded-circle avatar-sm" src={avatar2} alt="Generic placeholder"/>
                                                <Media body>
                                                    <h5 className="font-size-14 my-1">Humberto D. Champion</h5>
                                                    <small className="text-muted">support@domain.com</small>
                                                </Media>
                                            </Media>

                                            <h4 className="mt-0 font-size-16">This Week's Top Stories</h4>

                                            <p>Dear Lorem Ipsum,</p>
                                            <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus convallis.
                                            </p>
                                            <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.</p>
                                            <p>Sincerly,</p>
                                            <hr/>

                                            <Row>
                                                <Col xl={2} xs={6}>
                                                    <Card>
                                                        <CardImg top className="img-fluid" src={img3} alt="Card cap"/>
                                                        <div className="py-2 text-center">
                                                            <Link to="" className="font-weight-medium">Download</Link>
                                                        </div>
                                                    </Card>
                                                </Col>
                                                <Col xl={2} xs={6}>
                                                    <Card>
                                                        <CardImg top className="img-fluid" src={img4} alt="Card image cap"/>
                                                        <div className="py-2 text-center">
                                                            <Link to="" className="font-weight-medium">Download</Link>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            </Row>

                                            <Link to="#" className="btn btn-secondary waves-effect mt-4"><i className="mdi mdi-reply"></i> Reply</Link>
                                        </CardBody>

                                    </Card>
                                </div>

                            </Col>
                        </Row>

                        
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default EmailRead;