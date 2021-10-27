import React, { Component } from "react";
// import apexChart
import LineApexChart from "../AllCharts/apex/chartapex";
import DashedLine from "../AllCharts/apex/dashedLine";
import SplineArea from "../AllCharts/apex/SplineArea";
import Apaexlinecolumn from "../AllCharts/apex/apaexlinecolumn";
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels";
import BarChart from "../AllCharts/apex/barchart";
import LineColumnArea from "../AllCharts/apex/LineColumnArea";
import RadialChart from "../AllCharts/apex/RadialChart";
import PieChart from "../AllCharts/apex/PieChart";
import DonutChart from "../AllCharts/apex/dountchart";

import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class ApexChart extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Charts", link : "#" },
                { title : "Apex charts", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Apex charts" breadcrumbItems={this.state.breadcrumbItems} />
                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Line with Data Labels</CardTitle>
                                        <LineApexChart />
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Dashed Line</CardTitle>
                                        <DashedLine />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4"> Spline Area </CardTitle>
                                        <SplineArea />
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4"> Column Charts </CardTitle>
                                        <Apaexlinecolumn />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Column with Data Labels </CardTitle>
                                        <ColumnWithDataLabels />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Bar Chart</CardTitle>
                                        <BarChart />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Line, Column & Area Chart </CardTitle>
                                        <LineColumnArea />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Radial Chart</CardTitle>
                                        <RadialChart />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Pie Chart </CardTitle>
                                        <PieChart />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Donut Chart</CardTitle>
                                        <DonutChart />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default ApexChart;
