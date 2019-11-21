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
  Button,
  Form,
  FormGroup,
  Input,
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

import { getAppointments, registerAppointment } from "../actions/consulta";

class Tables extends React.Component {
  state = {
    valor: 0,
    descricao: "",
    dataHora: new Date().toLocaleString(),
    paciente_id: 0
  };

  onFieldChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onFormSubmit = event => {
    registerAppointment(
      {
        valor: this.state.valor,
        descricao: this.state.descricao,
        dataHora: this.state.dataHora,
        paciente_id: this.state.paciente_id
      },
      localStorage.getItem("Authorization")
    ).then(res => {
      console.log(res.data);
    });
  };

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>Agendamento</CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Nome Completo</label>
                          <Input
                            onChange={this.onFieldChange}
                            name="paciente_id"
                            value={this.state.paciente_id}
                            type="text"
                          ></Input>
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label>valor</label>
                          <Input
                            onChange={this.onFieldChange}
                            name="valor"
                            value={this.state.valor}
                            type="text"
                          ></Input>
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label>Dia</label>
                          <Input
                            onChange={this.onFieldChange}
                            name="dataHora"
                            value={this.state.dataHora}
                            type="date"
                          ></Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Descrição</label>
                          <Input
                            onChange={this.onFieldChange}
                            name="descricao"
                            value={this.state.descricao}
                            type="text"
                          ></Input>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button onClick={this.onFormSubmit}>Agendar</Button>
                </CardFooter>
              </Card>
            </Col>
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
                        <th>Descrição</th>
                        <th>data</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
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
