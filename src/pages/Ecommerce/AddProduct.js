import React, { Component } from 'react';
import { Container, Card, CardBody, Row, Nav, NavItem, NavLink, TabPane, TabContent, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from 'classnames';

//Dropzone
import Dropzone from "react-dropzone";

//select
import Select from 'react-select';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Ecommerce", link : "#" },
                { title : "Add Product", link : "#" },
            ],
            activeTab: 1,
            selectedFiles: [],
        }
        this.toggleTab = this.toggleTab.bind(this);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
    }

    handleAcceptedFiles = files => {
        files.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: this.formatBytes(file.size)
          })
        );
    
        this.setState({ selectedFiles: files });
      };
    
      /**
       * Formats the size
       */
      formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
      };

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            if(tab >= 1 && tab <=3 ){
                this.setState({
                    activeTab: tab
                });
            }
        }
    }

    render() {
        const options = [
            { value : "TO", label : "Touchscreen" },
            { value : "CF", label : "Call Function" },
            { value : "NO", label : "Notifications" },
            { value : "FI", label : "Fitness" },
            { value : "OU", label : "Outdoor" },
        ]
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Add Product" breadcrumbItems={this.state.breadcrumbItems} />

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>
                                        
                                        <div id="addproduct-nav-pills-wizard" className="twitter-bs-wizard">
                                            <Nav pills justified className="twitter-bs-wizard-nav">
                                                <NavItem>
                                                    <NavLink onClick={() => { this.toggleTab(1); }} className={classnames({ active: this.state.activeTab === 1 })}>
                                                        <span className="step-number">01</span>
                                                        <span className="step-title">Basic Info</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink onClick={() => { this.toggleTab(2); }} className={classnames({ active: this.state.activeTab === 2 })}>
                                                        <span className="step-number">02</span>
                                                        <span className="step-title">Product Img</span>
                                                    </NavLink>
                                                </NavItem>
                                                
                                                <NavItem>
                                                    <NavLink onClick={() => { this.toggleTab(3); }} className={classnames({ active: this.state.activeTab === 3 })}>
                                                        <span className="step-number">03</span>
                                                        <span className="step-title">Meta Data</span>
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                            <TabContent activeTab={this.state.activeTab} className="twitter-bs-wizard-tab-content">
                                                <TabPane tabId={1}>
                                                    <h4 className="card-title">Basic Information</h4>
                                                    <p className="card-title-desc">Fill all information below</p>

                                                    <Form>
                                                        <FormGroup>
                                                            <Label htmlFor="productname">Product Name</Label>
                                                            <Input id="productname" name="productname" type="text" className="form-control"/>
                                                        </FormGroup>
                                                        <Row>
                                                            <Col lg={4}>
                                                                
                                                                <FormGroup>
                                                                    <Label htmlFor="manufacturername">Manufacturer Name</Label>
                                                                    <Input id="manufacturername" name="manufacturername" type="text" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col lg={4}>
                                                                
                                                                <FormGroup>
                                                                    <Label htmlFor="manufacturerbrand">Manufacturer Brand</Label>
                                                                    <Input id="manufacturerbrand" name="manufacturerbrand" type="text" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <FormGroup>
                                                                    <Label htmlFor="price">Price</Label>
                                                                    <Input id="price" name="price" type="text" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Label className="control-label">Category</Label>
                                                                    <select className="form-control select2">
                                                                        <option>Select</option>
                                                                        <option value="EL">Electronic</option>
                                                                        <option value="FA">Fashion</option>
                                                                        <option value="FI">Fitness</option>
                                                                    </select>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Label className="control-label">Features</Label>
                                                                    <Select
                                                                        defaultValue={[options[2], options[3]]}
                                                                        isMulti
                                                                        name="features"
                                                                        options={options}
                                                                        className="select2 select2-multiple"
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>

                                                        <FormGroup>
                                                            <Label htmlFor="productdesc">Product Description</Label>
                                                            <textarea className="form-control" id="productdesc" rows="5"></textarea>
                                                        </FormGroup>
                                                    </Form>
                    
                                                </TabPane>
                                                <TabPane tabId={2}>
                                                    <h4 className="card-title">Product Images</h4>
                                                    <p className="card-title-desc">Upload product image</p>
                                                    <Form>
                                                        <Dropzone
                                                            onDrop={acceptedFiles =>
                                                            this.handleAcceptedFiles(acceptedFiles)
                                                            }
                                                        >
                                                            {({ getRootProps, getInputProps }) => (
                                                            <div className="dropzone">
                                                                <div
                                                                className="dz-message needsclick mt-2"
                                                                {...getRootProps()}
                                                                >
                                                                <input {...getInputProps()} />
                                                                <div className="mb-3">
                                                                    <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
                                                                </div>
                                                                <h4>Drop files here or click to upload.</h4>
                                                                </div>
                                                            </div>
                                                            )}
                                                        </Dropzone>
                                                        <div
                                                            className="dropzone-previews mt-3"
                                                            id="file-previews"
                                                        >
                                                            {this.state.selectedFiles.map((f, i) => {
                                                            return (
                                                                <Card
                                                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                                key={i + "-file"}
                                                                >
                                                                <div className="p-2">
                                                                    <Row className="align-items-center">
                                                                    <Col className="col-auto">
                                                                        <img
                                                                        data-dz-thumbnail=""
                                                                        height="80"
                                                                        className="avatar-sm rounded bg-light"
                                                                        alt={f.name}
                                                                        src={f.preview}
                                                                        />
                                                                    </Col>
                                                                    <Col>
                                                                        <Link
                                                                        to="#"
                                                                        className="text-muted font-weight-bold"
                                                                        >
                                                                        {f.name}
                                                                        </Link>
                                                                        <p className="mb-0">
                                                                        <strong>{f.formattedSize}</strong>
                                                                        </p>
                                                                    </Col>
                                                                    </Row>
                                                                </div>
                                                                </Card>
                                                            );
                                                            })}
                                                        </div>
                                                        </Form>

                                                </TabPane>
                                                <TabPane tabId={3}>
                                                    <h4 className="card-title">Meta Data</h4>
                                                    <p className="card-title-desc">Fill all information below</p>

                                                    <Form>
                                                        <Row>
                                                            <Col sm={6}>
                                                                <FormGroup>
                                                                    <Label htmlFor="metatitle">Meta title</Label>
                                                                    <Input id="metatitle" name="metatitle" type="text" className="form-control"/>
                                                                </FormGroup>
                                                                
                                                            </Col>
                    
                                                            <Col sm={6}>
                                                                <FormGroup>
                                                                    <Label htmlFor="metakeywords">Meta Keywords</Label>
                                                                    <Input id="metakeywords" name="metakeywords" type="text" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>

                                                        <FormGroup>
                                                            <Label htmlFor="metadescription">Meta Description</Label>
                                                            <textarea className="form-control" id="metadescription" rows="5"></textarea>
                                                        </FormGroup>
                                                    </Form>

                                                    <div className="text-center mt-4">
                                                        <Button color="primary" type="submit" className="mr-2 waves-effect waves-light">Save Changes</Button>
                                                        <Button color="light" type="submit" className="waves-effect ml-1">Cancel</Button>
                                                    </div>
                                                </TabPane>
                                            </TabContent>
                                            <ul className="pager wizard twitter-bs-wizard-pager-link">
                                            <li className={this.state.activeTab === 1 ? "previous disabled" : "previous"}><Link to="#" onClick={() => { this.toggleTab(this.state.activeTab - 1);} }>Previous</Link></li>
                                                <li className={this.state.activeTab === 3 ? "next disabled" : "next"}><Link to="#" onClick={() => { this.toggleTab(this.state.activeTab + 1);} }>Next</Link></li>
                                            </ul>
                                        </div>
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

export default AddProduct;