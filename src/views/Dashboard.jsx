/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// core components
import { chartExample2 } from "variables/charts.jsx";

import { getDentistRevenue, getClinicRevenue } from "../actions/revenue";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      chart1Data: [],
      chart2Data: []
    };
  }

  componentDidMount() {
    getDentistRevenue(localStorage.getItem("Authorization")).then(res => {
      let chart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      res.data.map(consulta => {
        chart[consulta.mes] = consulta.valor;
      });

      this.setState({
        chart2Data: chart
      });
    });

    getClinicRevenue(localStorage.getItem("Authorization")).then(res => {
      this.setState({
        chart1Data: res.data
      });
    });
  }

  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Analise de desempenho</h5>
                      <CardTitle tag="h2">Clínica</CardTitle>
                    </Col>
                    <Col sm="6"></Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={e => chartExample2.data(e, this.state.chart1Data)}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Ganho mensal</h5>
                  <CardTitle tag="h3">Dentista</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={e => chartExample2.data(e, this.state.chart2Data)}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
