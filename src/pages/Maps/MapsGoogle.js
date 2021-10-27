import React, { Component } from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import LightData from "./LightData";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

const LoadingContainer = props => <div>Loading...</div>;

class MapsGoogle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      breadcrumbItems : [
        { title : "Charts", link : "#" },
        { title : "Google Maps", link : "#" },
      ],
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(props, marker, e) {
    alert("You clicked in this marker");
  }

  activateStreetView = (position) => {
    const mapObj = this.mapRef.map.getStreetView();
    mapObj.setPov({ heading: 34, pitch: 10 });
    mapObj.setPosition(position);
    mapObj.setVisible(true);
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>

          <Breadcrumbs title="Google Maps" breadcrumbItems={this.state.breadcrumbItems} />

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Markers</CardTitle>
                    <CardSubtitle className="mb-3">Example of google maps.</CardSubtitle>
                    <div
                      id="gmaps-markers"
                      className="gmaps"
                      style={{ position: "relative" }}
                    >
                      <Map
                        google={this.props.google}
                        style={{ width: "100%", height: "100%" }}
                        zoom={14}
                      >
                        <Marker
                          title={"The marker`s title will appear as a tooltip."}
                          name={"SOMA"}
                          position={{ lat: 37.778519, lng: -122.40564 }}
                        />
                        <Marker name={"Dolores park"} />
                        <InfoWindow>
                          <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                          </div>
                        </InfoWindow>
                      </Map>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Overlays</CardTitle>
                    <CardSubtitle className="mb-3">Example of google maps.</CardSubtitle>
                    <div
                      id="gmaps-overlay"
                      className="gmaps"
                      style={{ position: "relative" }}
                    >
                      <Map
                        google={this.props.google}
                        zoom={14}
                        style={{ width: "100%", height: "100%" }}
                        initialCenter={{
                          lat: 40.854885,
                          lng: -88.081807
                        }}
                      >
                        <Marker onClick={this.onMarkerClick} />
                        <InfoWindow>
                          <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                          </div>
                        </InfoWindow>
                      </Map>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Street View Panoramas</CardTitle>
                    <CardSubtitle className="mb-3">Example of google maps.</CardSubtitle>
                    <div
                      id="gmaps-markers"
                      className="gmaps"
                      style={{ position: "relative" }}
                    >
                      <Map
                        google={this.props.google}
                        ref={(map) => this.mapRef = map}
                        zoom={14}
                        initialCenter={{ lat: 40.7295174, lng: -73.9986496 }}
                        style={{ height: "100%", width: "100%" }}
                        streetViewControl={true}
                        onReady={() => { this.activateStreetView({ lat: 40.7295174, lng: -73.9986496 }) }}>
                      </Map>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Ultra Light</CardTitle>
                    <CardSubtitle className="mb-3">Example of google maps.</CardSubtitle>
                    <div
                      id="gmaps-overlay"
                      className="gmaps"
                      style={{ position: "relative" }}
                    >
                      <Map
                        google={this.props.google}
                        zoom={14}
                        styles={LightData.Data}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <Marker onClick={this.onMarkerClick} />
                        <InfoWindow>
                          <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                          </div>
                        </InfoWindow>
                      </Map>
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

export default GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3"
  })(MapsGoogle);
