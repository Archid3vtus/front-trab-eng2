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

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Agendamento de limpeza</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Paciente</th>
                        <th>Endereço</th>
                        <th style={{width:'10%'}}>data</th>
                        <th className="text-center">Valor</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Lauro Milagres</td>
                        <td>Prédio 34, R. Dom José Gaspar, 500 - Coração Eucarístico</td>
                        <td>16/10/2019</td>
                        <td className="text-center">R$36,78</td>
                      </tr>
                      <tr>
                        <td>Gustavo Kotarsky</td>
                        <td>Prédio 34, R. Dom José Gaspar, 500 - Coração Eucarístico</td>
                        <td>16/10/2019</td>
                        <td className="text-center">R$23,89</td>
                      </tr>
                      <tr>
                        <td>Yuri Cancela</td>
                        <td>Prédio 34, R. Dom José Gaspar, 500 - Coração Eucarístico</td>
                        <td>16/10/2019</td>
                        <td className="text-center">R$56,42</td>
                      </tr>
                      <tr>
                        <td>Bernardo Victor</td>
                        <td>Prédio 34, R. Dom José Gaspar, 500 - Coração Eucarístico</td>
                        <td>16/10/2019</td>
                        <td className="text-center">R$38,75</td>
                      </tr>
                      {/*<tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td className="text-center">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className="text-center">$78,615</td>
                      </tr>*/}
                      <tr>
                        <td>Daniel</td>
                        <td>Prédio 34, R. Dom José Gaspar, 500 - Coração Eucarístico</td>
                        <td>16/10/2019</td>
                        <td className="text-center">R$98,65</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Agendamento de consulta</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Paciente</th>
                        <th>Endereço</th>
                        <th style={{width:'10%'}}>Data</th>
                        <th className="text-center">Valor</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Yuri Cancela</td>
                        <td>Prédio 34, R. Dom José Gaspar, 500 - Coração Eucarístico</td>
                        <td>16/10/2019</td>
                        <td className="text-center">R$36,73</td>
                      </tr>
                      <tr>
                        <td>Lauro Milagres</td>
                        <td>Prédio 34, R. Dom José Gaspar, 500 - Coração Eucarístico</td>
                        <td>Sinaai-Waas</td>
                        <td className="text-center">R$23,79</td>
                      </tr>
                      <tr>
                        <td>Bernardo Victor</td>
                        <td>Prédio 34, R. Dom José Gaspar, 500 - Coração Eucarístico</td>
                        <td>16/10/2019</td>
                        <td className="text-center">R$56,42</td>
                      </tr>
                      <tr>
                        <td>Gustavo Kotarsky</td>
                        <td>Prédio 34, R. Dom José Gaspar, 500 - Coração Eucarístico</td>
                        <td>16/10/2019</td>
                        <td className="text-center">R$38,35</td>
                      </tr>
                      {/*<tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td className="text-center">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className="text-center">$78,615</td>
                      </tr>*/}
                      <tr>
                        <td>Daniel Professor</td>
                        <td>Prédio 34, R. Dom José Gaspar, 500 - Coração Eucarístico</td>
                        <td>16/10/2019</td>
                        <td className="text-center">R$98,60</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
